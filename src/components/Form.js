// src/components/Form.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';  // CSS yahan add karenge

const Form = () => {
  const navigate = useNavigate();

  // State variables
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Validation Functions
  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.username.trim()) newErrors.username = 'Username is required';

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = 'Invalid Email';

    if (!formData.password) newErrors.password = 'Password is required';

    if (!formData.phoneCode.trim() || !formData.phoneNumber.trim())
      newErrors.phone = 'Phone number is required';

    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';

    if (!formData.panNo.match(/[A-Z]{5}[0-9]{4}[A-Z]{1}/))
      newErrors.panNo = 'Invalid PAN number';

    if (!formData.aadharNo.match(/^[0-9]{12}$/))
      newErrors.aadharNo = 'Invalid Aadhar number';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success', { state: formData });
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {errors.password && <p className="error">{errors.password}</p>}

        <div className="phone-field">
          <input
            type="text"
            name="phoneCode"
            placeholder="+Country Code"
            value={formData.phoneCode}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        {errors.phone && <p className="error">{errors.phone}</p>}

        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
        {errors.country && <p className="error">{errors.country}</p>}

        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="New York">New York</option>
          <option value="Toronto">Toronto</option>
        </select>
        {errors.city && <p className="error">{errors.city}</p>}

        <input
          type="text"
          name="panNo"
          placeholder="PAN Number"
          value={formData.panNo}
          onChange={handleChange}
        />
        {errors.panNo && <p className="error">{errors.panNo}</p>}

        <input
          type="text"
          name="aadharNo"
          placeholder="Aadhar Number"
          value={formData.aadharNo}
          onChange={handleChange}
        />
        {errors.aadharNo && <p className="error">{errors.aadharNo}</p>}

        <button type="submit" disabled={Object.keys(errors).length > 0}>
  Submit
</button>

      </form>
    </div>
  );
};

export default Form;
