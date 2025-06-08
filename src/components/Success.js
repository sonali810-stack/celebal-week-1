// src/components/Success.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Form.css';

const Success = () => {
  const { state } = useLocation();

  return (
    <div className="form-container">
      <h2>Form Submitted Successfully!</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Success;
