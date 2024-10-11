import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import { isAuthenticated } from "../utils/auth";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy credentials for login
    const validUsername = "admin";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
      const fakeToken = "your_jwt_token";
      localStorage.setItem("token", fakeToken);

      onLogin();
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Container component="main" maxWidth="xs" className="container">
      <Paper elevation={3} sx={{ padding: 3 }} className="paper">
        <Typography variant="h5" gutterBottom>
          Welcome Back
        </Typography>
        {error && (
          <Typography color="error" className="error-message">
            {error}
          </Typography>
        )}{" "}
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          className="text-field"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          className="text-field"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
          sx={{ marginTop: 2 }}
          className="login-button"
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginPage;
