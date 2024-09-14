import React from 'react';

const EmployeeList = ({ employees, onDelete, onUpdate }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <p>{employee.name}</p>
            <p>{employee.position}</p>
            <p>Salary: {employee.salary}</p>
            <p>Performance points: {employee.perf}</p>
            <p>Number of leaves: {employee.leaves}</p> 
            <p>HR data: {employee.hr_notes}</p> 
             
            <button onClick={() => onDelete(employee.id)}>Delete</button>
            <button onClick={() => onUpdate(employee)}>Update info</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
