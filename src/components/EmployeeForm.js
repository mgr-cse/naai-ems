import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onSave, employee }) => {
  const [name, setName] = useState(employee ? employee.name : '');
  const [position, setPosition] = useState(employee ? employee.position : '');
  const [salary,  setSalary] = useState(employee ? employee.salary : 0)
  const [perf,  setPerf] = useState(employee ? employee.perf : 0)
  const [leaves, setLeaves] = useState(employee ? employee.leaves : 0)
  const [hr_notes, setHrNotes] = useState(employee ? employee.hr_notes : '')

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setPosition(employee.position);
    }
  }, [employee]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ id: employee ? employee.id : Date.now(), name, position, salary, perf, leaves, hr_notes });
    setName('');
    setPosition('');
    setSalary(0)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{employee ? 'Edit Employee' : 'Add Employee'}</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Position:
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Salary:
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </label>
      </div>
      
      <div>
        <label>
          Performace points:
          <input
            type="number"
            value={perf}
            onChange={(e) => setPerf(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Number of leaves:
          <input
            type="number"
            value={leaves}
            onChange={(e) => setLeaves(e.target.value)}
            required
          />
        </label>
      </div>
      
      <div>
        <label>
          HR notes:
          <input
            type="text"
            value={hr_notes}
            onChange={(e) => setHrNotes(e.target.value)}
            required
          />
        </label>
      </div>
      
      

      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;
