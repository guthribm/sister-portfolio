import React from "react";
import "../../../src/App.css";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import profilePicture from "../../assets/temp-image.jpg";

export const Home = () => {
  const theme = createTheme();

  theme.typography.h1 = {
    fontSize: "6rem",
    lineHeight: 1,
    maxWidth: "600px",
    "@media (min-width:550px)": {
      fontSize: "8rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "10rem",
    },
  };

  theme.typography.h2 = {
    fontSize: "5rem",
    lineHeight: 1,
    color: "#f47cb9",
    "@media (min-width:600px)": {
      fontSize: "6rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "7rem",
    },
  };

  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  const homePageStyles = {
    display: "flex",
    justifyContent: "center",
    padding: "2rem 0",
    alignItems: "center",
    minHeight: "90vh",
    maxWidth: "100vw!important",
    background:
      "linear-gradient(25deg, rgba(178,106,230,1) 0%, rgba(210,35,92,1) 20%, rgba(205,150,72,1) 50%, rgba(219,44,221,1) 100%)",
    // background:
    //   "radial-gradient(circle, rgba(178,106,230,1) 0%, rgba(210,35,92,1) 32%, rgba(205,150,72,1) 65%, rgba(219,44,221,1) 100%)",
  };

  const CTAStyles = {
    border: "1px solid #fff",
    color: "#fff",
    fontSize: "1.5rem",
    borderRadius: "100%",
    padding: "20px 40px",
    marginTop: "2.5rem",
    fontWeight: "bold",
    "&:hover": {
      background: "#fff",
      color: "rgba(210,35,92,1)",
    },
  };

  const AboutMeStyles = {
    display: "flex",
    maxWidth: "100vw!important",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem 0",
    background: "#f9e7e5",
  };
  return (
    <ThemeProvider theme={theme}>
      <Container sx={homePageStyles}>
        <Box textAlign={"center"} color={"#fff"}>
          <Typography fontFamily={"Rum Raisin"} variant="h1">
            Hi, I'm Christina Norton
          </Typography>
          <Typography variant="subtitle1">
            A digital marketer and graphic designer
          </Typography>
          <Button sx={CTAStyles}>EMAIL ME</Button>
        </Box>
      </Container>
      <Container sx={AboutMeStyles}>
        <Grid container spacing={2} textAlign={"center"} alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={2}
              p={5}
              sx={{ maxWidth: "450px", marginX: "auto" }}
            >
              <Typography variant="h2" fontFamily={"Rum Raisin"}>
                Who <br /> Am I?
              </Typography>
              <Typography variant="body1">
                I am a digital nomad currently based in the United States. I've
                been working in design for the past six months. It was only in
                the past two months that I decided to focus full-time on design
                & marketing.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                height: 1600,
                width: 1500,
                maxHeight: { xs: 300, sm: 340, md: 390 },
                maxWidth: { xs: 310, sm: 350, md: 420 },
              }}
              alt="The house from the offer."
              src={profilePicture}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
