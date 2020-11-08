import React from "react";
import Table from "react-bootstrap/Table";

// export default function UserTable()

function UserTable(props) {
  return (
    <div>
      {/* add table here, remove inputs */}
      <Table striped bordered hover size="sm">
        <thead>
            {/* {props.employeeSort.map(() => ( */}
          <tr>
            <th>#</th>
            <th>Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          {/* // ))} */}
        </thead>
        <tbody>
          {props.employees.map((employee, i) => (
            <tr>
              <td>{i + 1}</td>
              <td><img src={employee.picture.medium} /></td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default UserTable;
