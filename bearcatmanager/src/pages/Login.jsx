import logo from '../logo.svg';
import '../App.css';

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="Login-logo" alt="logo" />
        <p>
          Edit <code>src/Login.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="Login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login page!
        </a>
      </header>
    </div>
  );
}

export default Login;

