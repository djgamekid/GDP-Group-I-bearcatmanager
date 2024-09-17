import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import CreateEvent from './pages/CreateEvent';
import Navbar from './Navbar';

 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/CreateEvent" element={<CreateEvent />} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
