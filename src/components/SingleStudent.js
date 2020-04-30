import React, { Component } from "react";
import axios from "axios";

class SingleStudent extends Component {
  state = {
    student: {},
    isLoading: true,
  };
  render() {
    const { student, isLoading } = this.state;
    const { name, startingCohort, blockHistory } = student;
    if (isLoading) return <p>Loading student...</p>;
    return (
      <div>
        <h3>{name}'s Student Page</h3>
        <p>Starting Cohort: {startingCohort}</p>
        <p>
          Block History:
          {blockHistory.map((block) => {
            return block.name;
          })}
        </p>
      </div>
    );
  }

  componentDidMount() {
    this.fetchSingleStudent();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps._id !== this.props._id) {
      this.fetchSingleStudent();
    }
  }

  fetchSingleStudent = () => {
    const { _id } = this.props;
    console.log(_id);
    axios
      .get(
        `https://http://nc-student-tracker.herokuapp.com/api/students/${_id}`
      )
      .then(({ data }) => {
        this.setState({
          student: data.student,
          isLoading: false,
        }).catch((err) => console.dir(err));
      });
  };
}

export default SingleStudent;
