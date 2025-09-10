import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src={`${process.env.PUBLIC_URL}/logo-dark.png`} alt="logo" className="logo"/>
        
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto cent">
            <li className="nav-item">
              <a className="nav-link colo" href="#home">
                <span className="fas fa-home me-2 ico"></span>Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link colo" href="#about">
                <span className="fas fa-user me-2 ico"></span>About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link colo" href="#courses">
                <span className="fas fa-book-open me-2 ico"></span>Course
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link colo" href="#gallery">
                <span className="fas fa-image me-2 ico"></span>Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link colo" href="#contact">
                <span className="fas fa-envelope me-2 ico"></span>Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
