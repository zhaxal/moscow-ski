import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import Header from "./ui/Header";

interface Props {
  bg: string;
  matches: boolean;
  isSki: boolean;
}

const MapBlock = ({ bg, matches, isSki }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");

  const handleOpen = (url: string) => {
    setUrl(url);
    setIsOpen(true);
  };

  const stackSpacing = 2;
  const marginBottom = matches ? 5 : 2;
  const imageSrc = matches
    ? "/images/desktop/ski-page/sMap.jpg"
    : "/images/mobile/ski-page/sMap.jpg";
  const previewUrl = "/images/desktop/ski-page/sMap.jpg";
  const boxStyles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    right: 0,
    top: 0,
    textAlign: "center",
    zIndex: 9999,
    width: "100vw",
    height: "100vh",
    display: isOpen ? "block" : "none",
  };

  return (
    <>
      <Stack direction="column" sx={{ width: "100%", mb: marginBottom }} spacing={stackSpacing}>
        <Header bg={bg} text="СХЕМЫ ТРАСС" />
        <Stack sx={{ width: "100%" }} direction={matches ? "row" : "column"} spacing="18px" justifyContent="space-around">
          <Box
            component="img"
            src={imageSrc}
            maxWidth={matches ? "640px" : "100%"}
            maxHeight={matches ? "700px" : "462px"}
            onClick={() => handleOpen(previewUrl)}
          />
        </Stack>
      </Stack>
      <Box sx={boxStyles} onClick={() => setIsOpen(false)} />
    </>
  );
};

export default MapBlock;