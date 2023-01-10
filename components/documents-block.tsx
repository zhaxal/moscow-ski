import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";
interface Props {
  bg: string;
  text1: string;
  text2?: string;
  isMobile: boolean;
  height: string;
}

const Documents = ({ bg, text1, text2, isMobile, height }: Props) => {
  return (
    <Stack direction={"column"} sx={{ width: "100%" }} spacing={"20px"}>
      <Header bg={bg} text={"ДОКУМЕНТЫ"} />
      <Stack
        sx={{ width: "100%", px: "16px", height: isMobile ? height : "100%" }}
        direction={"column"}
        spacing={1}
      >
        <Typography
          variant="body"
          color={"white"}
          sx={{ whiteSpace: "pre-line", textDecoration: "underline" }}
        >
          {text1}
        </Typography>
        <Typography
          variant="body"
          color={"white"}
          sx={{ whiteSpace: "pre-line", textDecoration: "underline" }}
        >
          {text2}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Documents;
