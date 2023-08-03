import { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  async componentDidMount() {
    let users;
    await fetch("http://localhost:9000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        users = result.map((r) => r.username);
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      users: users,
      username: "Test user",
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    await fetch("http://localhost:9000/exercises/add", {
      method: "POST",
      body: JSON.stringify(exercise),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        window.location = "/";
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <div className="container">
          <h3>Create New Exercise Log!</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group my-2">
              <label>Username: </label>
              <select
                ref={"userInput"}
                required
                className="form-control"
                onChange={this.onChangeUsername}
              >
                {this.state.users.map((user) => (
                  <option key={user} value={user} className="w-50">
                    {user}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group my-2">
              <label>Description: </label>
              <input
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </div>
            <div className="form-group my-2">
              <label>Duration (in minutes): </label>
              <input
                required
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
              />
            </div>
            <div className="form-group my-2">
              <label>Date: </label>
              <div className="">
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                  className="my-2"
                />
              </div>
            </div>
            <div className="form-group my-2">
              <input
                type="submit"
                value={"Create Exercise Log"}
                className="btn btn-primary"
                onChange={this.onChangeDescription}
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}
