import { Stack, Typography } from "@mui/material";

interface ProgramBlockProps {
  isMobile: boolean;
  text: string;
  time: string;
  width: string;
  isBold?: boolean;
  timeWidth?: string;
  textAlign?: string;
}

const ProgramBlock = ({
  text,
  time,
  width,
  isMobile,
  isBold = false,
  timeWidth = "50%",
  textAlign = "left",
}: ProgramBlockProps) => {
  const fontFamily = isBold ? "Gotham Pro Bold" : "Gotham Pro Light";

  return (
    <Stack direction="row" spacing={isMobile ? 7 : 1}>
      <Typography
        variant="body"
        color="white"
        sx={{
          whiteSpace: "pre-line",
          width: isMobile ? width : timeWidth,
          textAlign,
          fontFamily,
        }}
      >
        {time}
      </Typography>
      <Typography
        variant="body"
        color="white"
        sx={{
          whiteSpace: "pre-line",
          width: isMobile ? "95%" : "80%",
          maxWidth: isMobile ? "650px" : "80%",
          fontFamily,
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default ProgramBlock;
