import React, { Component } from "react";
import axios from "axios";

class Students extends Component {
  state = {
    students: [],
    isLoading: true,
  };
  render() {
    const { students } = this.state;
    if (this.state.isLoading) return <p>Loading students, please wait...</p>;
    return (
      <ul>
        {students.map(({ _id, name }) => {
          return <li key={_id}>{name}</li>;
        })}
      </ul>
    );
  }

  componentDidMount = () => {
    this.fetchStudents();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.block_name !== this.props.block_name) {
      this.fetchStudents();
    }
  };

  fetchStudents = () => {
    axios
      .get("https://nc-student-tracker.herokuapp.com/api/students", {
        params: { block: this.props.currentBlock },
      })
      .then((response) => {
        this.setState({ students: response.data.students, isLoading: false });
      });
  };
}

export default Students;
