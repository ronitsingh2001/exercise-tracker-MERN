import React, { useEffect, useState } from "react";

function ExerciseList() {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/exercises", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        res = res.map((r) => {
          return {
            username: r.username,
            description: r.description,
            duration: r.duration,
            date: r.date,
          };
        });
        setExercise(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{
                exercise?.map(item=>(
                    <tr className="align-middle" >
                        <td >{item.username}</td>
                        <td>{item.description}</td>
                        <td>{item.duration}</td>
                        <td>{item.date}</td>
                        <td><span className="btn btn-primary mx-1">Edit</span>|<span className="btn btn-danger mx-1">Delete</span></td>
                    </tr>
                ))
            }</tbody>
        </table>
      </div>
    </>
  );
}

export default ExerciseList;
