import React, { useState } from "react";

function CreateUser() {
  const [user, setUser] = useState("");

  const submit = (e) => {
    e.preventDefault();
    let userBody = {
      username: user,
    };
    fetch("http://localhost:9000/users/add", {
      method: "POST",
      body: JSON.stringify(userBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
          setUser("")
        return res.json();  
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container mt-5">
        <h3>Create New User!</h3>
        <form onSubmit={submit}>
          <div className="form-group my-2">
            <label>Username: </label>
            <input
              required
              className="form-control my-2"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          <div className="form-group my-2">
            <input
              type="submit"
              value={"Create User"}
              className="btn btn-primary"
              disabled={user.length < 4}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateUser;
