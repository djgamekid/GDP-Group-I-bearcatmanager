// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
 
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Bearcat Manager!</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Login</Link></li>
        <li><Link to="/CreateEvent">Create an Event</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
 
export default Navbar;
