import React from 'react';

function Table(props) {
    return (
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Birth</th>
          </tr>
        </thead>
        <tbody>
        {props.employees.map(employee => (
          <tr>
            <td><img alt={`img`} src={employee.picture.medium}></img></td>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
      </table>
      );
}

export default Table;