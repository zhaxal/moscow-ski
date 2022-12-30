import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  text1: string;
  text2: string;
  bg: string;
}

const Requirements = ({ text1, text2, bg }: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack
      direction={"column"}
      sx={{ width: "100%" }}
      spacing={matches ? 5 : 2}
    >
      <Header bg={bg} text={"ТРЕБОВАНИЯ К УЧАСТНИКАМ"} />
      <Box sx={{ width: "100%", px: "16px" }}>
        <Stack
          sx={{ width: "100%" }}
          direction={matches ? "row" : "column"}
          spacing={"18px"}
        >
          <Typography
            variant="body"
            color={"white"}
            sx={{ whiteSpace: "pre-line" }}
          >
            {text1}
          </Typography>

          <Typography
            variant="body"
            color={"white"}
            sx={{ whiteSpace: "pre-line" }}
          >
            {text2}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Requirements;
