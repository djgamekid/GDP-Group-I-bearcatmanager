// import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu';
// import './App.css';

// function admin() {
//   return (
//     <>
//       <NavigationMenu>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <NavigationMenuLink>Link</NavigationMenuLink>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuLink><a href='/CreateEvent'>Create an Event</a></NavigationMenuLink>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <NavigationMenuLink>Link 3</NavigationMenuLink>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Item Four</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <NavigationMenuLink>Link 4</NavigationMenuLink>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//       </NavigationMenu>

//       <div className="admin">
//         <header className="admin-header">
//           <p>
//             Welcome to the admin Page!
//           </p>

//         </header>
//       </div>
//     </>
//   );
// }

// export default admin;


// src/admin.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './admin.css';

// function admin() {
//   return (
//     <>
//       <nav>
//         <div className="logo">
//           <Link to="/">Bearcat Manager!</Link>
//         </div>
//         <ul className="nav-links">
//           <li><Link to="/">Login</Link></li>
//           <li><Link to="/CreateEvent">Create an Event</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/services">Services</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>

//       <div className="admin">
//         <header className="admin-header">
//           <p>
//             Welcome to the admin Page!
//           </p>
//         </header>
//       </div>
//     </>
//   );
// }

// export default admin;

// src/admin.js
import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css';
 
function admin() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Bearcat Manager!</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Login</Link></li>
        <li><Link to="/Item1">Item One</Link></li>
        <li><Link to="/CreateEvent">Create an Event</Link></li>
        <li><Link to="/Item3">Item three</Link></li>
        <li><Link to="/Item4">Item four</Link></li>
      </ul>
    </nav>
  );
}
 
export default admin;


