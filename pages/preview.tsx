import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import CustomBtn from "../components/ui/CustomBtn";
import { useRouter } from "next/router";
import { NextPage } from "next";

const Preview: NextPage = () => {
  const route = useRouter();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return matches ? (
    <Box
      height="100vh"
      sx={{ background: "linear-gradient(90deg, #0082C2 50%, #E6342D 50%)" }}
    >
      <Container disableGutters maxWidth="xl" sx={{ position: "relative" }}>
        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
          <Box
            component={"img"}
            src={"/images/desktop/main-page/main-page.svg"}
            sx={{
              width: "100%",
            }}
          />
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-around",
            position: "absolute",
            width: "100%",
            bottom: 0,
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
      <Stack sx={{ height: "45%", width: "100%", alignItems: "center", background: "#0082C2", pt: "64px" }} spacing={"77px"}>
        <Box
          component={"img"}
          src={"/images/mobile/main-page/blue-top.png"}
          sx={{
            width: "100%"
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

      <Stack sx={{ width: "100%", height: "10%", background: "linear-gradient(180deg, #0082C2 50%, #E6342D 50%)", py: "35px" }} direction={"row"} alignItems="center" justifyContent={"space-around"}>
        <Box
          component={"img"}
          src={"/images/mobile/icon/mossport.svg"}
          sx={{
            width: "40px",
            height: "56px"
          }}
        />

        <Box
          component={"img"}
          src={"/images/mobile/icon/department.svg"}
          sx={{
            width: "45px",
            height: "57px"
          }}
        />

        <Box
          component={"img"}
          src={"/images/mobile/icon/grom.svg"}
          sx={{
            width: "117px",
            height: "59px"
          }}
        />

        <Box
          component={"img"}
          src={"/images/mobile/icon/mlogo.svg"}
          sx={{
            width: "72px",
            height: "63px"
          }}
        />

        <Box
          component={"img"}
          src={"/images/mobile/icon/russialoppet.svg"}
          sx={{
            width: "90px",
            height: "34px"
          }}
        />
      </Stack>

      <Stack sx={{ height: "45%", width: "100%", alignItems: "center", background: "#E6342D", pb: "64px" }} spacing={"77px"}>
        <Box
          component={"img"}
          src={"/images/mobile/main-page/red-bottom.png"}
          sx={{
            width: "100%"
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
