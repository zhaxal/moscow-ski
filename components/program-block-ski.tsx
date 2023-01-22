import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  bg: string;
  isMobile: boolean;
}

const ProgramSki = ({ bg, isMobile }: Props) => {
  return (
    <Stack
      direction={"column"}
      sx={{ width: "100%", mb: isMobile ? 5 : 2 }}
      spacing={"20px"}
    >
      <Header bg={bg} text={"ПРОГРАММА"} />
      <Box sx={{ width: "100%", px: "16px" }}>
        <Stack direction={"column"} spacing={"7px"}>
          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              08:00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              {`Начало выдачи стартовых комплектов. (Дополнительная 
                регистрация возможна при наличии свободных слотов)`}
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              09:50
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Церемония открытия соревнований
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              10:00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Старт группы ПРО (Элита)
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              10:30
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Старт группы 18-29 лет
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              11:00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Старт группы 30-39 лет
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              11:15
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              {`Награждение победителей и призеров категории ПРО 
              (Элита)`}
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              11:30
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Старт группы 40-49 лет
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              11:45
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Награждение победителей и призеров категории 18-29 лет
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              12:00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Старт группы 50-59 лет
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              12:15
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Награждение победителей и призеров категории 30-39 лет
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              12:30
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Старт группы 60-99 лет
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              12:45
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Награждение победителей и призеров категории 40-49 лет
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              13:00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Старт детского забега на 1 км
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              13:15
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Награждение победителей и призеров категории 50-59 лет
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              13:45
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Награждение победителей и призеров категории 60-99 лет
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              14:00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Награждение детского забега
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "5%" : "20%",
                textAlign: "center",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              14:30
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "95%" : "80%",
                fontFamily: isMobile
                  ? "Gotham Pro Regular"
                  : "Gotham Pro Light",
              }}
            >
              Окончание мероприятия
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProgramSki;
