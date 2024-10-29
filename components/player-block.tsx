import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  bg: string;
  src1: string;
  src2: string;
  isMobile: boolean;
}

const PlayerBlock = ({ bg, src1, src2, isMobile }: Props) => {
  const stackSpacing = isMobile ? "20px" : 2;
  const marginBottom = isMobile ? 5 : 2;
  const iframeHeight = isMobile ? "720" : "400";
  const boxStyles = { width: "100%", px: "16px" };

  return (
    <Stack direction="column" sx={{ width: "100%", mb: marginBottom }} spacing={stackSpacing}>
      <Header bg={bg} text="ВИДЕО 2024" />
      <Box sx={boxStyles}>
        <iframe
          src={src1}
          width="100%"
          height={iframeHeight}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          allowFullScreen
        />
      </Box>
      <Box sx={boxStyles}>
        <iframe
          src={src2}
          width="100%"
          height={iframeHeight}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          allowFullScreen
        />
      </Box>
    </Stack>
  );
};

export default PlayerBlock;