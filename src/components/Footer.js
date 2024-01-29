import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          A storefront.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Definitely one of the most frontends of all time.
        </Typography>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
