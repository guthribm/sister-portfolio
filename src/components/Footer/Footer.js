import { Box, Grid, Stack, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import createTheme from "@mui/material/styles/createTheme";

export const Footer = () => {
  const iconStyles = {
    width: "50px",
    height: "50px",
  };

  const phoneStyles = {
    cursor: "pointer",
    "& a": {
      color: "#000",
    },
    "& a:visited": {
      color: "#f00",
    },
  };

  const theme = createTheme();

  theme.typography.h2 = {
    fontSize: "3.5rem",
    lineHeight: 1,
    color: "#f47cb9",
    "@media (min-width:600px)": {
      fontSize: "5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "5.5rem",
    },
  };

  theme.typography.body1 = {
    fontSize: "1.25rem",

    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack sx={{ background: "#f47cb9" }}>
          <Box padding={"3rem"} textAlign={"center"} marginY={5}>
            <Typography
              variant="h2"
              fontFamily={"Rum Raisin"} // fontSize={"8rem"}
              letterSpacing={2}
              color={"#fff"}
              lineHeight={1}
            >
              Grow with me.
            </Typography>
            <Typography
              variant="body1"
              color={"#fff"}
              sx={{ "&a:visited": { color: "#000" } }}
            >
              Let's improve your processes together.
            </Typography>
          </Box>
        </Stack>

        <Grid
          container
          spacing={4}
          p={"3rem"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Grid item>
            <Typography
              variant="body2"
              fontWeight={700}
              fontSize={"1.25rem"}
              color={"#f47cb9"}
            >
              PHONE
            </Typography>
            <Typography variant="body1" sx={phoneStyles}>
              <a href="tel:+15802369257">580-236-9257</a>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              fontWeight={700}
              fontSize={"1.25rem"}
              color={"#f47cb9"}
            >
              EMAIL
            </Typography>

            <Typography variant="body1">cguthr00@gmail.com</Typography>
          </Grid>
          <Grid item>
            <Stack direction={"row"} spacing={2}>
              <FacebookIcon sx={iconStyles} />
              <TwitterIcon sx={iconStyles} />
              <InstagramIcon sx={iconStyles} />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </ThemeProvider>
  );
};
