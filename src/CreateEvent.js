import logo from './logo.svg';
import './App.css';

function CreateEvent() {
  return (
    <div className="CreateEvent">
      <header className="CreateEvent-header">
        <img src={logo} className="CreateEvent-logo" alt="logo" />
        <p>
          Edit <code>src/Admin.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="CreateEvent"
          target="_blank"
          rel="noopener noreferrer"
        >
          CreateEvent page!
        </a>
      </header>
    </div>
  );
}

export default CreateEvent;
