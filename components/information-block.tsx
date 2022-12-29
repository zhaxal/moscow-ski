import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  text: string;
  bg: string;
}

const Information = ({ text, bg }: Props) => {
  return (
    <Stack direction={"column"} sx={{ width: "100%" }} spacing={5}>
      <Header
        bg={bg}
        text={"ОБЩАЯ ИНФОРМАЦИЯ"}
      />
      <Box sx={{ width: "100%", px: "16px" }}>
        <Typography variant="body" color={"white"} sx={{whiteSpace: "pre-line"}}>{text}</Typography>
      </Box>
    </Stack>
  );
};

export default Information;
