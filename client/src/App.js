import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import StudentList from "./components/Student/studentList";
import editStudent from "./components/Student/editStudents";
import createStudent from "./components/Student/createStudents";
import Homepage from "./components/Homepage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              Student CRUD Example
            </Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/slist" className="nav-link">
                    StudentList
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create1" className="nav-link">
                    Create Student
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={Homepage} />
          <Route path="/slist" component={StudentList} />
          <Route path="/edit1/:id" component={editStudent} />
          <Route path="/create1" component={createStudent} />
        </div>
      </Router>
    );
  }
}

export default App;
