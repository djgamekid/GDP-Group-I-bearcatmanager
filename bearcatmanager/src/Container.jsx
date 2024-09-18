import React from 'react';
import './Container.css';
 
function Container() {
  return (
<div className="Container">
<header className="header">
<h1>My Website</h1>
</header>
 
      <nav className="navbar">
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Services</a></li>
<li><a href="#">Contact</a></li>
</ul>
</nav>
 
      <main className="content">
<section>
<h2>Welcome</h2>
<p>This is a simple layout example using Flexbox.</p>
</section>
</main>
 
      <footer className="footer">
<p>Footer content goes here.</p>
</footer>
</div>
  );
}
 
export default Container;