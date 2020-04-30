import React, { Component } from "react";
import axios from "axios";
import { Link, Router } from "@reach/router";
import SingleStudent from "./SingleStudent";

class Students extends Component {
  state = {
    students: [],
    isLoading: true,
  };
  render() {
    const { students } = this.state;
    if (this.state.isLoading) return <p>Loading students, please wait...</p>;
    return (
      <>
        <ul>
          {students.map(({ _id, name, currentBlock }) => {
            return (
              <li key={_id}>
                <Link to={`/students/${_id}`}>
                  {name} - current block: {currentBlock}
                </Link>
              </li>
            );
          })}
        </ul>
        <p>Total students in this section: {students.length}</p>
        <Router>
          <SingleStudent path="/:_id" />
        </Router>
      </>
    );
  }

  componentDidMount = () => {
    this.fetchStudents();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.currentBlock !== this.props.currentBlock) {
      this.fetchStudents();
    }
  };

  fetchStudents = () => {
    const { currentBlock } = this.props;
    axios
      .get("https://nc-student-tracker.herokuapp.com/api/students", {
        params: { block: currentBlock },
      })
      .then((response) => {
        this.setState({ students: response.data.students, isLoading: false });
      });
  };
}

export default Students;
