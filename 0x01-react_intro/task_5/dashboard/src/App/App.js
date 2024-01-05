import React from "react";
import { Notifications } from "../Notifications/Notifications.js";
import logo from "../assets/logo.jpg";
import { getFooterCopy, getFullYear } from "../utils/utils.js";
import "./App.css";
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
