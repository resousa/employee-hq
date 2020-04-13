import React from "react";
import API from "../utils/API";
import Table from "../components/Table";

class Employee extends React.Component {
  state = {
    employees: [],
    search: "",
    sortType: "",
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getEmployees()
      .then((res) => {
        this.setState({
          employees: res.data.results,
        });
        console.log(this.state.employees);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (   
    <Table employees={this.state.employees} />
    );
  }
}

export default Employee;
