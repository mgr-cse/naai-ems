import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleSave = (employee) => {
    if (editingEmployee) {
      setEmployees(employees.map(emp => emp.id === employee.id ? employee : emp));
      console.log(employee.id)
      console.log(employees)
      setEditingEmployee(null);
    } else {
      setEmployees([...employees, employee]);
    }
    console.log('hello')
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  return (
    <div>
      <EmployeeForm onSave={handleSave} employee={editingEmployee} />
      <EmployeeList employees={employees} onDelete={handleDelete} onUpdate={handleEdit} />
    </div>
  );
};

export default EmployeeManagement;
