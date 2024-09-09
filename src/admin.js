import logo from './logo.svg';
import './App.css';

function Admin() {
  return (
    <div className="Admin">
      <header className="Admin-header">
        <img src={logo} className="Admin-logo" alt="logo" />
        <p>
          Edit <code>src/Admin.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Admin page!
        </a>
      </header>
    </div>
  );
}

export default Admin;
