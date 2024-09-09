import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <div className="App">
        <p>
        Bearcat Manager!
        </p>

      {/* Bootstrap Navbar */}
      {/* 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Bearcat Manager
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tickets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      */}

      {/* Main Content */}
      <header>
        Event Tickets
        <br />
        <a
          className="font-bold"
          href="tickets"
          target="_blank"
        >
          Back to tickets page!
        </a>
      </header>
      
    </div>
  );
}

export default App;