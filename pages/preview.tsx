import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import CustomBtn from "../components/ui/CustomBtn";
import { useRouter } from "next/router";
import { NextPage } from "next";

const Preview: NextPage = () => {
  const route = useRouter();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const logos = useMediaQuery('(min-width:410px)');


  return matches ? (
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
            src={"/images/mobile/icon/mossport-snow.svg"}
            sx={{
              width: "162px",
              height: "45px",
            }}
          />

          <Box
            component={"img"}
            src={"/images/mobile/icon/department.svg"}
            sx={{
              width: "66px",
              height: "83px",
            }}
          />

          <Box
            component={"img"}
            src={"/images/mobile/icon/grom.svg"}
            sx={{
              width: "173px",
              height: "87px",
            }}
          />

          <Box
            component={"img"}
            src={"/images/mobile/icon/mlogo.svg"}
            sx={{
              width: "108px",
              height: "94px",
            }}
          />

          <Box
            component={"img"}
            src={"/images/mobile/icon/russialoppet.svg"}
            sx={{
              width: "143px",
              height: "62px",
            }}
          />
        </Stack>
        <Stack sx={{ width: "100%", justifyContent: "center" }}>
          <Box
            component={"img"}
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
  ) : (
    <Box height={"100%"}>
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
          src={"/images/mobile/icon/mossport-snow.svg"}
          sx={{
            maxWidth: "97px",
          }}
        />

        <Box
          component={"img"}
          src={"/images/mobile/icon/department.svg"}
          sx={{
            maxWidth: "39px",
          }}
        />

        <Box
          component={"img"}
          src={"/images/mobile/icon/grom.svg"}
          sx={{
            maxWidth: "80px",
          }}
        />

        <Box
          component={"img"}
          src={"/images/mobile/icon/mlogo.svg"}
          sx={{
            maxWidth: "76px",
          }}
        />

        <Box
          component={"img"}
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
  );
};

export default Preview;
