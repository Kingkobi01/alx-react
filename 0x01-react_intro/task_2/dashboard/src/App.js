import "./App.css";
import logo from "./logo.jpg";
import { Notifications } from "./Notifications.js";
import { getFooterCopy, getFullYear } from "./utils.js";

function App() {
  return (
    <div className="App">
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          style={{
            marginRight: "1em",
          }}
          name="email"
          id="email"
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          style={{
            marginRight: "1em",
          }}
          name="password"
          id="password"
        />
        <button>OK</button>
      </div>

      <div className="App-footer">
        <p>
          Copyright {getFullYear()}- {getFooterCopy()}
        </p>
      </div>
    </div>
  );
}

export default App;
