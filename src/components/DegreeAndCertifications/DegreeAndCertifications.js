import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import degreeVector from "../../assets/certificationIllustration.avif";

export const DegreeAndCertifications = () => {
  const DegreeAndCertificationsStyles = {
    display: "flex",
    maxWidth: "100vw!important",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 0",
    background: "#f9e7e5",
  };
  return (
    <Container sx={DegreeAndCertificationsStyles}>
      <Grid
        container
        spacing={2}
        textAlign={"center"}
        alignItems={"center"}
        p={2}
      >
        <Grid item xs={12} md={6}>
          <Stack spacing={2} p={5} sx={{ maxWidth: "450px", marginX: "auto" }}>
            <Typography id="about" variant="h3" fontFamily={"Rum Raisin"}>
              Degrees & <br /> Certifications
            </Typography>
            <Box textAlign={"left"}>
              <Stack marginY={2}>
                <Typography variant="h5" fontWeight={700} color={"#f47cb9"}>
                  Coursera
                </Typography>
                <Typography variant="h6" color={"#000"}>
                  Google Digital Marketing & E-Commerce Certificate
                </Typography>
                <Typography
                  variant="body1"
                  fontStyle={"italic"}
                  color={"text.secondary"}
                >
                  March 2024
                </Typography>
              </Stack>
              <Stack marginY={2}>
                <Typography variant="h5" fontWeight={700} color={"#f47cb9"}>
                  University of Arkansas - Fort Smith
                </Typography>
                <Typography variant="h6" color={"#000"}>
                  Bachelor of Arts, Psychology
                </Typography>
                <Typography
                  variant="body1"
                  fontStyle={"italic"}
                  color={"text.secondary"}
                >
                  May 2010
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              height: 417,
              width: 626,
              maxHeight: { xs: 200, sm: 310, md: 350 },
              maxWidth: { xs: 260, sm: 400, md: 475 },
              filter: "hue-rotate(110deg)",
            }}
            alt="Graphic of woman with sunglasses."
            src={degreeVector}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
