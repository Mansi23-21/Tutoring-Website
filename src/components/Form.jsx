// ContactForm.js
import React, { useState } from 'react';
import axios from 'axios'; // ✅ Make sure axios is installed
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css'; // Consider renaming to Contact.css

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setServerError('');
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      try {
        // ✅ Axios POST to Spring Boot backend
        await axios.post('http://localhost:8080/api/contact', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } catch (error) {
        console.error(error);
        setServerError('Something went wrong while sending your message.');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container my-5" id="contact">
      <h2 className="text-center mb-4 contac">Contact Us</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        {submitted && (
          <div className="alert alert-success" role="alert">
            ✅ Your message has been sent!
          </div>
        )}
        {serverError && (
          <div className="alert alert-danger" role="alert">
            ❌ {serverError}
          </div>
        )}

        {/* Name Field */}
        <div className="mb-3">
          <label className="form-label">Name *</label>
          <input
            type="text"
            name="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label className="form-label">Email *</label>
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Message Field */}
        <div className="mb-3">
          <label className="form-label">Message *</label>
          <textarea
            name="message"
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn buto w-100">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
