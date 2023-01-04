import { Alert, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import Head from "next/head";
import { useRouter } from "next/router";
import CustomBtn from "../components/ui/CustomBtn";

export default function Home() {
  const route = useRouter();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const logos = useMediaQuery("(min-width:410px)");

  return matches ? (
    <>
      <Head>
        <meta name="yandex-verification" content="5257f1e845f3792f" />
      </Head>
      <Box
        minHeight="100vh"
        sx={{
          background: "linear-gradient(90deg, #0082C2 50%, #E6342D 50%)",
          pb: "93px",
        }}
      >
        <Container disableGutters maxWidth="xl">
          <Stack
            sx={{
              width: "100%",
              pt: "42px",
            }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={"16px"}
          >
            <Box
              component={"img"}
              alt={"mossport-snow"}
              src={"/images/mobile/icon/mossport-snow.svg"}
              sx={{
                width: "162px",
                height: "45px",
              }}
            />

            <Box
              component={"img"}
              src={"/images/mobile/icon/department.svg"}
              alt={"departmentIcon"}
              sx={{
                width: "66px",
                height: "83px",
              }}
            />

            <Box
              component={"img"}
              src={"/images/mobile/icon/grom.svg"}
              alt={"gromIcon"}
              sx={{
                width: "173px",
                height: "87px",
              }}
            />

            <Box
              component={"img"}
              src={"/images/mobile/icon/mlogo.svg"}
              alt={"mLogo"}
              sx={{
                width: "108px",
                height: "94px",
              }}
            />

            <Box
              component={"img"}
              src={"/images/mobile/icon/russialoppet.svg"}
              alt={"russiaLoppetIcon"}
              sx={{
                width: "143px",
                height: "62px",
              }}
            />
          </Stack>
          <Stack sx={{ width: "100%", justifyContent: "center" }}>
            <Box
              component={"img"}
              alt={"mainPageImg"}
              src={"/images/desktop/main-page/main-page.png"}
              sx={{
                maxWidth: "100%",
                mx: "auto",
              }}
            />
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-around",
              width: "100%",
            }}
          >
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
    </>
  ) : (
    <>
      <Head>
        <meta name="yandex-verification" content="5257f1e845f3792f" />
      </Head>
      <Box height={"100%"} position={"relative"}>
        <Box
          component={"img"}
          alt={"departmentIcon"}
          src={"/images/mobile/icon/department.svg"}
          sx={{
            width: "53px",
            position: "absolute",
            mt: 1,
            ml: 2,
          }}
        />
        <Stack
          sx={{
            height: "45%",
            width: "100%",
            alignItems: "center",
            background: "#0082C2",
            pt: "64px",
          }}
          spacing={"77px"}
        >
          <Box
            component={"img"}
            alt={"blueTop"}
            src={"/images/mobile/main-page/blue-top.png"}
            sx={{
              width: "100%",
            }}
          />
          <CustomBtn
            bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
            text={"ПОСЕТИТЬ"}
            height={"48px"}
            width={"284px"}
            lineHeight={"30px"}
            fontSize={"24px"}
            onClick={() => route.push("/ski")}
          />
        </Stack>

        <Stack
          sx={{
            width: "100%",
            background: "linear-gradient(180deg, #0082C2 50%, #E6342D 50%)",
            py: "35px",
          }}
          direction={"row"}
          alignItems="center"
          justifyContent={"center"}
          spacing={logos ? 1 : 0}
        >
          <Box
            component={"img"}
            alt={"mossportSnow"}
            src={"/images/mobile/icon/mossport-snow.svg"}
            sx={{
              maxWidth: "97px",
            }}
          />

          <Box
            component={"img"}
            alt={"departmentIcon"}
            src={"/images/mobile/icon/department.svg"}
            sx={{
              maxWidth: "39px",
            }}
          />

          <Box
            component={"img"}
            alt={"gromIcon"}
            src={"/images/mobile/icon/grom.svg"}
            sx={{
              maxWidth: "80px",
            }}
          />

          <Box
            component={"img"}
            alt={"mLogo"}
            src={"/images/mobile/icon/mlogo.svg"}
            sx={{
              maxWidth: "76px",
            }}
          />

          <Box
            component={"img"}
            alt={"russiaLoppetIcon"}
            src={"/images/mobile/icon/russialoppet.svg"}
            sx={{
              maxWidth: "87px",
            }}
          />
        </Stack>

        <Stack
          sx={{
            height: "45%",
            width: "100%",
            alignItems: "center",
            background: "#E6342D",
            pb: "64px",
          }}
          spacing={"77px"}
        >
          <Box
            component={"img"}
            src={"/images/mobile/main-page/red-bottom.png"}
            alt={"redBottom"}
            sx={{
              width: "100%",
            }}
          />
          <CustomBtn
            bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
            text={"ПОСЕТИТЬ"}
            height={"48px"}
            width={"284px"}
            lineHeight={"30px"}
            fontSize={"24px"}
            onClick={() => route.push("/marathon")}
          />
        </Stack>
      </Box>
    </>
  );
}
