import React from "react";
import "./Login.css";

const Login = () => {
  return (
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
  );
};

export default Login;
