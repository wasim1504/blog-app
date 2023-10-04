import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("login", true);
      navigate("/blog-list");
    } else {
      alert("Invalid credentials !!!!!");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:-</label>
          <input
            type="text"
            id="uname"
            placeholder="username"
            value={username}
            onChange={(a) => setUsername(a.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pass">Password:-</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(a) => setPassword(a.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
