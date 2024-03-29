import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Footer = () => {
  const footerStyles = {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100vw!important",
  };
  return (
    <Stack sx={footerStyles}>
      <Stack sx={{ background: "#f47cb9", padding: "5rem 2rem" }}>
        <Typography
          variant="h6"
          fontFamily={"Rum Raisin"}
          fontSize={"8rem"}
          color={"#fff"}
          lineHeight={1}
        >
          Grow with me.
        </Typography>
        <Typography variant="h6" fontSize={"2rem"} color={"#fff"}>
          Let's imporve your processes together.
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        spacing={2}
        width={"100vw"}
        justifyContent={"space-evenly"}
      >
        <Stack p={5} marginY={5}>
          <Typography fontWeight={700} fontSize={"2rem"} color={"#f47cb9"}>
            PHONE
          </Typography>
          <Typography fontSize={"1.5rem"}>580-236-9257</Typography>
        </Stack>
        <Stack p={5} marginY={5}>
          <Typography fontWeight={700} fontSize={"2rem"} color={"#f47cb9"}>
            EMAIL
          </Typography>
          <Typography fontSize={"1.5rem"}>cguthr00@gmail.com</Typography>
        </Stack>
        <Stack p={5} marginY={5}>
          <FacebookIcon />
        </Stack>
      </Stack>
    </Stack>
  );
};
