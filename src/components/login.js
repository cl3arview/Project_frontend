import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../services/api"; // Import the loginUser function from your api.js
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChangeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(username, password);

      const { token, expiration, userId, role, userName } = response;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("tokenExpiration", expiration);
      localStorage.setItem("role", role);
      localStorage.setItem("userName", userName);

      console.log(response);
      // Redirect based on user's role
      if (role === "Admin") {
        navigate("/admin");
      } else if (role === "Client" && token) {
        navigate("/client");
      } else {
        // Handle other roles or redirect to a default route
        navigate("/client"); // Replace with your desired default route
      }
      toast.success("Login successful", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Login failed. Please check your credentials.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
            name="username"
            value={username}
            onChange={handleChangeForm}
          />
          <TextField
            sx={{ marginTop: "10px" }}
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            name="password"
            value={password}
            onChange={handleChangeForm}
          />

          <Button
            sx={{ marginTop: "10px" }}
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
        </form>
      </Paper>
      <ToastContainer position="top-center" autoClose={3000} />
    </Grid>
  );
};

export default Login;
