import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { registerUser } from "../services/api"; // Import the registerUser function
import { toast, ToastContainer } from "react-toastify"; // Import Toastify

import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto 20px" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  // State to store form input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Call the registerUser function to register the user
      const response = await registerUser(email, password);
      console.log("User registered successfully:", response);

      // Clear the form fields after successful registration
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error registering user:", error);

      // Show error notification
      toast.error("Error registering user");
    }
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
        </Grid>
        <form onSubmit={handleSignup} sx={{ marginTop: "10px" }}>
          <TextField
            sx={{ marginTop: "10px" }}
            fullWidth
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ marginTop: "10px" }}
            fullWidth
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "10px" }}
          >
            Sign up
          </Button>
        </form>
      </Paper>
      <ToastContainer /> {/* Toastify container */}
    </Grid>
  );
};

export default Signup;
