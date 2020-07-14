import React, { Component } from "react";
import axios from "axios";

export default class editStudent extends Component {
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

  componentDidMount() {
    const ans = this.props.match.params.id;
    console.log(ans);
    axios
      .get("http://localhost:4000/student/getAll/" + ans)
      .then((response) => {
        this.setState({
          name: response.data.name,
          register_no: response.data.register_no,
          branch: response.data.branch,
          age: response.data.age,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
    const obj = {
      name: this.state.name,
      register_no: this.state.register_no,
      branch: this.state.branch,
      age: this.state.age,
    };
    axios
      .post(
        "http://localhost:4000/student/update/" + this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h3>Student Todo</h3>
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
            <label>Banch: </label>
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
              value="Update Student"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
