import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import EmployeeManagement from './components/EmployeeManagement';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here (e.g., API call)
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="App">
     <h1>Employee Management System</h1>
     <EmployeeManagement />
    </div>
    
  );
}

export default App;
