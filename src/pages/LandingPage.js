import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 12 }}>
      <Typography variant="h3" gutterBottom>
        Automate Your Candidate Screening
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Analyze CVs, understand job requirements, and get instant candidate recommendations.
      </Typography>
      <Box mt={5}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/cvscreen"
        >
          Start
        </Button>
      </Box>
    </Container>
  );
}

export default LandingPage;
