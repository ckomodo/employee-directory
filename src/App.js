import React from "react";
import API from "./Utils/API";
import UserTable from "./Components/Table";
import SearchBar from "./Components/SearchBar";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./App.css";

// import { Nav } from "react-bootstrap";

class App extends React.Component {
  state = {
    employees: [],
    userSearch: "",
    filteredEmployees: []
  };

  componentDidMount() {
    API.getEmployees().then((res) => {
      console.log(res);
      this.setState({
        employees: res.data.results,
      });
    });
  }

  handleInputChange = (event) => {
    console.log(event.target);
    // Getting the value and name of the input which triggered the change
    const { value } = event.target;


    const filterValue = event.target.value;
    const filteredList = this.state.employees.filter(employee => {
      let values = Object.values(employee)
        .join("")
        .toLowerCase();
      return values.indexOf(filterValue.toLowerCase()) 
      !== -1;
    });
    this.setState({ employees: filteredList });

    // const employeeSort = this.state.employees.sort()
    // console.log(employeeSort);

    // Updating the input's state
    this.setState({
      userSearch: value,
    });
  };


  render() {
    return (
      <>
        <Jumbotron className="Jumbotron">
          <h1>employee directory</h1>
          <p>list of all employees</p>
          <hr />
        </Jumbotron>
        <SearchBar
          userSearch={this.state.userSearch}
          handleInputChange={this.handleInputChange}
        />
        <UserTable employees={this.state.employees}
        // employeeSort = {this.employeeSort}
        />
      </>
    );
  }
}
export default App;
