import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css'; // You may rename this to Footer.css if it's for the footer

const FooterWithMap = () => (
  <footer className="bg-dark text-white mt-5 p-4">
    <div className="container foot">
      <div className="row">
        {/* Contact Info */}
        <div className="col-md-4 mb-3">
          <h5>Contact Us</h5>
          <p>Email: info@example.com</p>
          <p>Phone: +91 0000000000</p>
        </div>

        {/* Navigation Links */}
        <div className="col-md-4 mb-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#home" className="text-white lin">Home</a></li>
            <li><a href="#about" className="text-white lin">About Us</a></li>
            <li><a href="#courses" className="text-white lin">Courses</a></li>
            <li><a href="#gallery" className="text-white lin">Gallery</a></li>
            <li><a href="#contact" className="text-white lin">Contact</a></li>
          </ul>
        </div>

        {/* Google Map */}
        <div className="col-md-4">
          <iframe
            title="Google Map"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '8px' }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8826285393857!2d73.80874227479777!3d18.626076767345456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b95714cc9b9f%3A0x9c39f6888c48a92a!2sPimpri%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411018!5e0!3m2!1sen!2sin!4v1721376000000!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <p className="text-center mt-3 mb-0">© 2025 Your Company Name</p>
    </div>
  </footer>
);

export default FooterWithMap;
