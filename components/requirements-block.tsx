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

  const typographyStyles = {
    whiteSpace: "pre-line",
    fontFamily: matches ? "Gotham Pro Regular" : "Gotham Pro Light",
    textAlign: matches ? "justify" : "left",
    width: matches ? "50%" : "100%",
  };

  return (
    <Stack direction="column" sx={{ width: "100%", mb: 3 }} spacing={2}>
      <Header bg={bg} text="ТРЕБОВАНИЯ К УЧАСТНИКАМ" />
      <Box sx={{ width: "100%", px: "16px" }}>
        <Stack sx={{ width: "100%" }} direction={matches ? "row" : "column"} spacing="50px">
          <Typography variant="body" color="white" sx={typographyStyles}>
            {text1}
          </Typography>
          <Typography variant="body" color="white" sx={typographyStyles} dangerouslySetInnerHTML={{ __html: text2 }} />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Requirements;