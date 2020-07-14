import React, { Component } from "react";
import axios from "axios";

export default class createStudents extends Component {
  constructor(props) {
    super(props);

    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeBranch = this.onChangeBranch.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRegister = this.onChangeRegister.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      register_no: "",
      branch: "",
      age: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeRegister(e) {
    this.setState({
      register_no: e.target.value,
    });
  }
  onChangeBranch(e) {
    this.setState({
      branch: e.target.value,
    });
  }
  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Name: ${this.state.name}`);
    console.log(`Register Number: ${this.state.register_no}`);
    console.log(`Branch: ${this.state.branch}`);
    console.log(`Age: ${this.state.age}`);

    const newStudent = {
      name: this.state.name,
      register_no: this.state.register_no,
      branch: this.state.branch,
      age: this.state.age,
    };

    axios
      .post("http://localhost:4000/student/add", newStudent)
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
      register_no: "",
      branch: "",
      age: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Student</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Register Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.register_no}
              onChange={this.onChangeRegister}
            />
          </div>
          <div className="form-group">
            <label>Branch: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.branch}
              onChange={this.onChangeBranch}
            />
          </div>
          <div className="form-group">
            <label>Age: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Student"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
