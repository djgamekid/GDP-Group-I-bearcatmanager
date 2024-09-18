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

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import CreateEvent from './CreateEvent';
import Navbar from './Navbar';
<<<<<<< HEAD:bearcatmanager/src/App.jsx
import Container from './Container';
=======

import FlexboxLayout from './container';

>>>>>>> 3c10391ac6620557b98d86e01541726df618350e:bearcatmanager/src/App.js
 
function App() {
  return (
      <>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/CreateEvent" element={<CreateEvent />} />
        </Routes>
      </div>
    </Router>
    <hr />
<<<<<<< HEAD:bearcatmanager/src/App.jsx
       <Container />
=======
       <FlexboxLayout />
>>>>>>> 3c10391ac6620557b98d86e01541726df618350e:bearcatmanager/src/App.js
       </>
  );
}
 
export default App;
