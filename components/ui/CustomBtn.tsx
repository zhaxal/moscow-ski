import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import React from "react";

interface Props {
  bg: string;
  text: string;
  height: string;
  lineHeight: string;
  fontSize: string;
  onClick?: () => void;
}

const CustomBtn = ({
  bg,
  text,
  height,
  lineHeight,
  fontSize,
  onClick,
}: Props) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        background: bg,
        height: height,
        width: 500,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "3px",
        position: "relative",
      }}
      onClick={onClick}
    >
      <Typography
        sx={{
          color: "white",
          ml: "19px",
          fontFamily: "Gotham Pro Regular",
          fontWeight: 700,
          lineHeight: lineHeight,
          fontSize: fontSize,
        }}
      >
        {text}
      </Typography>
      <Box
        sx={{
          backgroundImage: "url(/images/desktop/components/btn-gradient.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: 144,
        }}
      />
      <Box
        component={"img"}
        src={"/images/desktop/components/btn-play.svg"}
        sx={{
          position: "absolute",
          right: 10,
          zIndex: "2",
          maxWidth: 34,
          height: 34,
        }}
      />
    </Stack>
  );
};

export default CustomBtn;
