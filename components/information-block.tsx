import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  text: string;
  bg: string;
  isMobile: boolean;
}

const Information = ({ text, bg, isMobile }: Props) => {
  return (
    <Stack
      direction={"column"}
      sx={{ width: "100%" }}
      spacing={isMobile ? "20px" : 2}
    >
      <Header bg={bg} text={"ОБЩАЯ ИНФОРМАЦИЯ"} />
      <Box sx={{ width: "100%", px: "16px" }}>
        <Typography
          variant="body"
          color={"white"}
          sx={{ whiteSpace: "pre-line"}}
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        >
        </Typography>
      </Box>
    </Stack>
  );
};

export default Information;
