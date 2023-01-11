import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
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
  width,
  lineHeight,
  fontSize,
  onClick,
}: Props) => {
  const [isHover, setHover] = useState<boolean>(false);

  return (
    <Stack
      direction={"row"}
      sx={{
        background: bg,
        height: height,
        width: width ? width : 500,
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
        src={
          isHover
            ? "/images/desktop/components/btn-play-active.svg"
            : "/images/desktop/components/btn-play.svg"
        }
        sx={{
          position: "absolute",
          right: 10,
          zIndex: "2",
          maxWidth: 34,
          height: 34,
        }}
        alt={"customBtn"}
      />
    </Stack>
  );
};

export default CustomBtn;
