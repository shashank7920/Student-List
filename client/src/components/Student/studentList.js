import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Student = (props) => (
  <tr>
    <td>{props.student.name}</td>
    <td>{props.student.register_no}</td>
    <td>{props.student.branch}</td>
    <td>{props.student.age}</td>
    <td>
      <Link to={"/edit1/" + props.student._id}>Edit</Link>
    </td>
  </tr>
);

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/student/getAll")
      .then((response) => {
        this.setState({ students: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  studentList() {
    return this.state.students.map(function (currentStudent, i) {
      return <Student student={currentStudent} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Student List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Register No</th>
              <th>Branch</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>{this.studentList()}</tbody>
        </table>
      </div>
    );
  }
}
