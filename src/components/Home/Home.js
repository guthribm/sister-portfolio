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
import tempDesign from "../../assets/temp-design.jpg";
import { DegreeAndCertifications } from "../DegreeAndCertifications/DegreeAndCertifications";

export const Home = () => {
  const theme = createTheme();

  theme.typography.h1 = {
    fontSize: "5rem",
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
    fontSize: "4rem",
    lineHeight: 1,
    color: "#f47cb9",
    "@media (min-width:600px)": {
      fontSize: "5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "6rem",
    },
  };

  theme.typography.h3 = {
    fontSize: "3rem",
    lineHeight: 1,
    color: "#f47cb9",
    "@media (min-width:600px)": {
      fontSize: "4rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "5rem",
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
    padding: "2rem 0",
    background: "#f9e7e5",
  };

  const workExperienceStyles = {
    display: "flex",
    // maxWidth: "100vw!important",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 0",
    background: "#fff",
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
              <Typography id="about" variant="h2" fontFamily={"Rum Raisin"}>
                Who <br /> Am I?
              </Typography>
              <Typography variant="h6">
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
                maxHeight: { xs: 280, sm: 340, md: 390 },
                maxWidth: { xs: 290, sm: 350, md: 420 },
              }}
              alt="Graphic of woman with sunglasses."
              src={profilePicture}
            />
          </Grid>
        </Grid>
      </Container>

      <Container sx={workExperienceStyles}>
        <Grid
          container
          spacing={2}
          textAlign={"center"}
          alignItems={"center"}
          flexDirection={"row-reverse"}
        >
          <Grid item xs={12} md={6}>
            <Stack
              spacing={2}
              p={5}
              sx={{ maxWidth: "450px", marginX: "auto" }}
            >
              <Typography
                id="about"
                variant="h2"
                textAlign={"center"}
                fontFamily={"Rum Raisin"}
              >
                Work <br /> Experience
              </Typography>
              <Box textAlign={"left"}>
                <Stack marginY={2}>
                  <Typography variant="h5" fontWeight={700} color={"#f47cb9"}>
                    Stinas Creative
                  </Typography>
                  <Typography variant="h6" color={"#000"}>
                    E-commerce & Digital Marketing
                  </Typography>
                  <Typography
                    variant="body1"
                    fontStyle={"italic"}
                    color={"text.secondary"}
                  >
                    2023-Present
                  </Typography>
                </Stack>
                <Stack marginY={2}>
                  <Typography variant="h5" fontWeight={700} color={"#f47cb9"}>
                    Copper & Co. Jewelry
                  </Typography>
                  <Typography variant="h6" color={"#000"}>
                    E-commerce
                  </Typography>
                  <Typography
                    variant="body1"
                    fontStyle={"italic"}
                    color={"text.secondary"}
                  >
                    2020-2023
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                height: 450,
                width: 450,
                maxHeight: { xs: 290, sm: 375, md: 420 },
                maxWidth: { xs: 290, sm: 375, md: 420 },
              }}
              alt="Graphic of laptop with designs."
              src={tempDesign}
            />
          </Grid>
        </Grid>
      </Container>
      <DegreeAndCertifications />
    </ThemeProvider>
  );
};
