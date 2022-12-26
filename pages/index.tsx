import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box, Container, Stack } from "@mui/system";
import { useRouter } from "next/router";

export default function Home() {
  const route = useRouter();

  return (
    <Box height="100vh" sx={{ background: "linear-gradient(90deg, #0082C2 50%, #E6342D 50%)" }}>
      <Container disableGutters maxWidth="xl">
        <Box sx={{
          backgroundImage: "url(/images/desktop/main-page/main-page.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: 700,
        }} />
        <Stack direction={'row'} sx={{ justifyContent: "space-around" }}>
          <Stack direction={'column'}>
            <Typography>
              ЛЫЖНЯ РОССИИ 2023
            </Typography>
            <Button variant="contained" onClick={() => route.push('/ski')}>
              Посетить
            </Button>
          </Stack>
          <Stack direction={'column'}>
            <Typography>
              МОСКОВСКИЙ ЛЫЖНЫЙ МАРАФОН
            </Typography>
            <Button variant="contained" onClick={() => route.push('/marathon')}>
              Посетить
            </Button>
          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}
