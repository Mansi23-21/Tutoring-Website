import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

const AboutUs = () => {
  return (
    <section className="about-section py-5">
      <div className="container size scrollable-content p-4 shadow rounded">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShkqBUfioEFggHnR9lqWaSDuyt_TuiDveJCw&s"
              alt="About Us"
              className="img-fluid rounded shadow imag"
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6 text-center text-md-start">
            <h2 className="mb-4 abo">About Us</h2>
            <p className="para">
              We believe that quality is the foundation of trust. We are a dedicated team of software testing professionals committed to delivering reliable, secure, and user-friendly applications through rigorous and intelligent testing practices.
            </p>
            <p className="para">
              We specialize in delivering reliable, efficient, and high-quality software testing solutions that empower businesses to launch flawless digital products. With a strong commitment to precision and performance, we ensure that every line of code is tested against the highest standards.
            </p>
            <p className="para">
              Founded by a team of passionate QA professionals, our goal is to help organizations minimize risk, reduce costs, and accelerate time-to-market through comprehensive testing strategies. Our expertise spans across various domains, including web applications, mobile apps, and enterprise software.
            </p>
            <ul className="para">
              <li>Manual and Automated Testing</li>
              <li>Functional and Regression Testing</li>
              <li>Performance and Load Testing</li>
              <li>Cross-browser Compatibility</li>
              <li>Mobile and Web App Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
