import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  bg: string;
  matches: boolean;
  text1: string;
  text2: string;
}

const Packets = ({ bg, matches, text1, text2 }: Props) => {
  return (
    <Stack direction={"column"} sx={{ width: "100%" }} spacing={2}>
      <Header bg={bg} text={"ПАКЕТ УЧАСТНИКА"} />
      <Box sx={{ width: "100%", px: "16px" }}>
        <Stack
          sx={{ width: "100%" }}
          direction={matches ? "row" : "column"}
          justifyContent={"space-between"}
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

export default Packets;
