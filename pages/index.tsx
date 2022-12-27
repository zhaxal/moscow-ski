import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box, Container, Stack } from "@mui/system";
import { useRouter } from "next/router";
import CustomBtn from "../components/ui/CustomBtn";

export default function Home() {
  const route = useRouter();

  return (
    <Box
      height="100vh"
      sx={{ background: "linear-gradient(90deg, #0082C2 50%, #E6342D 50%)" }}
    >
      <Container disableGutters maxWidth="xl" sx={{ position: "relative" }}>
        <Stack sx={{ justifyContent: "center", alignItems: "center", }}>
          <Box
            component={"img"}
            src={"/images/desktop/main-page/main-page.svg"}
            sx={{
              width: "100%",
            }}
          />
        </Stack>
        <Stack direction={"row"} sx={{ justifyContent: "space-around", position: "absolute", width: "100%", bottom: 0 }}>
          <Stack direction={"column"} spacing={"24px"} alignItems={"center"}>
            <Typography variant="heading" color={"white"}>
              ЛЫЖНЯ РОССИИ 2023
            </Typography>
            <CustomBtn
              bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
              text={"ПОСЕТИТЬ"}
              height={"60px"}
              width={"364px"}
              lineHeight={"30px"}
              fontSize={"32px"}
              onClick={() => route.push("/ski")}
            />
          </Stack>
          <Stack direction={"column"} spacing={"24px"} alignItems={"center"}>
            <Typography variant="heading" color={"white"}>
              МОСКОВСКИЙ ЛЫЖНЫЙ МАРАФОН
            </Typography>
            <CustomBtn
              bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
              text={"ПОСЕТИТЬ"}
              height={"60px"}
              width={"364px"}
              lineHeight={"30px"}
              fontSize={"32px"}
              onClick={() => route.push("/marathon")}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
