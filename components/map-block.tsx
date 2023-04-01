import { Box, Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
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

  return (
    <>
      <Stack
        direction={"column"}
        sx={{ width: "100%", mb: matches ? 5 : 2 }}
        spacing={2}
      >
        <Header bg={bg} text={"СХЕМЫ ТРАСС"} />
        <Stack
          sx={{ width: "100%" }}
          direction={matches ? "row" : "column"}
          spacing={"18px"}
          justifyContent={"space-around"}
        >
          <Box
            component={"img"}
            src={
              matches
                ? "/images/desktop/ski-page/fMap.jpg"
                : "/images/mobile/ski-page/fMap.jpg"
            }
            maxWidth={matches ? "640px" : "100%"}
            maxHeight={matches ? "700px" : "462px"}
            onClick={() =>
              handleOpen("/images/desktop/ski-page/fMapPreview.jpg")
            }
          />
          <Box
            component={"img"}
            src={
              matches
                ? "/images/desktop/ski-page/sMap.jpg"
                : "/images/mobile/ski-page/sMap.jpg"
            }
            maxWidth={matches ? "640px" : "100%"}
            maxHeight={matches ? "700px" : "462px"}
            onClick={() =>
              handleOpen("/images/desktop/ski-page/sMapPreview.jpg")
            }
          />
        </Stack>
      </Stack>
      <Box
        sx={{
          backgroundImage: `url(${url})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundPosition: "center center",
          backgroundColor: " rgba(0, 0, 0, 0.5)",
          position: "fixed",
          right: 0,
          top: 0,
          textAlign: "center",
          zIndex: 9999,
        }}
        width={"100vw"}
        display={isOpen ? "block" : "none"}
        onClick={() => setIsOpen(false)}
        height={"100vh"}
      />
    </>
  );
};

export default MapBlock;
