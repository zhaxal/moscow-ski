import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  text: string;
  bg: string;
  isMobile: boolean;
}

const Information = ({ text, bg, isMobile }: Props) => {
  const stackSpacing = isMobile ? "20px" : 2;
  const boxWidth = isMobile ? "50%" : "100%";
  const marginBottom = isMobile ? 5 : 2;

  return (
    <Stack direction="column" sx={{ width: "100%", mb: marginBottom }} spacing={stackSpacing}>
      <Header bg={bg} text="ОБЩАЯ ИНФОРМАЦИЯ" />
      <Box sx={{ width: boxWidth, px: "16px" }}>
        <Typography
          variant="body"
          color="white"
          sx={{ whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </Box>
    </Stack>
  );
};

export default Information;