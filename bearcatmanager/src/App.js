// import logo from './logo.svg';
// import { Route, Routes } from "react-router-dom";
// import './App.css';

// function App() {
//   return (
    
//     <div className="App">

//         <p>
//         Bearcat Manager!
//         </p>

//       <header>
//         Event Tickets
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import FindanEvent from './FindanEvent';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/findanevent" element={<FindanEvent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
