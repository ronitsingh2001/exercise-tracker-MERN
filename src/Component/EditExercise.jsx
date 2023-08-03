import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

function EditExercise() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    fetch("http://localhost:9000/exercises/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUsername(res.username);
        setDate(res.date);
        setDuration(res.duration);
        setDescription(res.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };
    fetch("http://localhost:9000/exercises/update/" + id, {
      method: "PUT",
      body: JSON.stringify(exercise),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        window.location = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <h3>Create New Exercise Log!</h3>
        <form onSubmit={submit}>
          <div className="form-group my-2">
            <label>Username: </label>
            <select disabled className="form-control">
              <option value={username} className="w-50">
                {username}
              </option>
            </select>
          </div>
          <div className="form-group my-2">
            <label>Description: </label>
            <input
              required
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="form-group my-2">
            <label>Duration (in minutes): </label>
            <input
              required
              className="form-control"
              onChange={(e) => setDuration(e.target.value)}
              value={duration}
            />
          </div>
          <div className="form-group my-2">
            <label>Date: </label>
            <div className="">
              <DatePicker
                className="my-2"
                onChange={(date) => setDate(date)}
                value={date.toString()}
              />
            </div>
          </div>
          <div className="form-group my-2">
            <input
              type="submit"
              value={"Update Log"}
              className="btn btn-success"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default EditExercise;
