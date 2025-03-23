import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignupPage.css";

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (!formData.agency) {
      newErrors.agency = "Please select if you are an agency";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/settings");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h2>Create your <br /><strong>PopX account</strong></h2>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}

        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <label>Company Name</label>
        <input
          type="text"
          name="company"
          placeholder="Enter company name"
          value={formData.company}
          onChange={handleChange}
        />

        <div className="agency-question">
          <p>Are you an Agency?</p>
          <label>
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={formData.agency === "yes"}
              onChange={handleChange}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agency"
              value="no"
              checked={formData.agency === "no"}
              onChange={handleChange}
            />{" "}
            No
          </label>
        </div>
        {errors.agency && <p className="error">{errors.agency}</p>}

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>

      <p className="login-text">
        Already have an account? <Link to="/login" className="login-link">Login</Link>
      </p>
    </div>
  );
}
