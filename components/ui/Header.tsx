import { Typography, Box, Stack, useMediaQuery, useTheme } from "@mui/material";

interface Props {
  bg: string;
  text: string;
}

const Header = ({ bg, text }: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        background: bg,
        height: "48px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="desc"
        color="white"
        sx={{ px: matches ? "58px" : "17px", fontSize: matches ? "24px" : "16px" }}
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
    </Stack>
  );
};

export default Header;
