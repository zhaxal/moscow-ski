import { Typography, Box, Stack } from "@mui/material";
import { useState } from "react";

interface Props {
  bg: string;
  text: string;
  height: string;
  width?: string;
  lineHeight: string;
  fontSize: string;
  onClick?: () => void;
}

const CustomBtn = ({
  bg,
  text,
  height,
  width = "500px",
  lineHeight,
  fontSize,
  onClick,
}: Props) => {
  const [isHover, setHover] = useState(false);

  return (
    <Stack
      direction="row"
      sx={{
        background: bg,
        height,
        width,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "3px",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Typography
        sx={{
          color: "white",
          ml: "19px",
          fontFamily: "Gotham Pro Medium",
          fontWeight: 700,
          fontSize,
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
          width: "144px",
        }}
      />
      <Box
        component="img"
        src={
          isHover
            ? "/images/desktop/components/btn-play-active.svg"
            : "/images/desktop/components/btn-play.svg"
        }
        sx={{
          position: "absolute",
          right: 10,
          zIndex: 2,
          maxWidth: 34,
          height: 34,
        }}
        alt="customBtn"
      />
    </Stack>
  );
};

export default CustomBtn;
