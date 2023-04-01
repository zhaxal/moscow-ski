import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  bg: string;
  isMobile: boolean;
}

const ProgramMarathon = ({ bg, isMobile }: Props) => {
  let spacing = isMobile ? 7 : 1;

  return (
    <Stack direction={"column"} sx={{ width: "100%" }} spacing={2}>
      <Header bg={bg} text={"ПРОГРАММА"} />
      <Stack sx={{ width: "100%" }} spacing={5}>
        <Stack direction={"column"} spacing={"4px"}>
          <Stack direction={"row"} spacing={spacing}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                width: isMobile ? "10%" : "40%",
                textAlign: "center",
                fontFamily: "Gotham Pro Bold",
              }}
            >
              12 февраля
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%" }}
            ></Typography>
          </Stack>
          <Stack direction={"column"} spacing={"4px"}>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  width: isMobile ? "10%" : "40%",
                  textAlign: "center",
                  fontFamily: isMobile
                    ? "Gotham Pro Regular"
                    : "Gotham Pro Light",
                }}
              >
                08:00 - 10:30
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  width: isMobile ? "90%" : "60%",
                  fontFamily: isMobile
                    ? "Gotham Pro Regular"
                    : "Gotham Pro Light",
                }}
              >
                Регистрация участников, выдача стартовых номеров
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  width: isMobile ? "10%" : "40%",
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
                  width: isMobile ? "90%" : "60%",
                  fontFamily: isMobile
                    ? "Gotham Pro Regular"
                    : "Gotham Pro Light",
                }}
              >
                Старт
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  width: isMobile ? "10%" : "40%",
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
                  width: isMobile ? "90%" : "60%",
                  fontFamily: isMobile
                    ? "Gotham Pro Regular"
                    : "Gotham Pro Light",
                }}
              >
                Марафон 51 км
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  width: isMobile ? "10%" : "40%",
                  textAlign: "center",
                  fontFamily: isMobile
                    ? "Gotham Pro Regular"
                    : "Gotham Pro Light",
                }}
              >
                11:10
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  width: isMobile ? "90%" : "60%",
                  fontFamily: isMobile
                    ? "Gotham Pro Regular"
                    : "Gotham Pro Light",
                }}
              >
                Старт Полумарафона 34 км  и Спутника 17 км
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  width: isMobile ? "10%" : "40%",
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
                  width: isMobile ? "90%" : "60%",
                  fontFamily: isMobile
                    ? "Gotham Pro Regular"
                    : "Gotham Pro Light",
                }}
              >
                Закрытие выхода на 2 круг для дистанции 51 и 34 км
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  width: isMobile ? "10%" : "40%",
                  textAlign: "center",
                  fontFamily: isMobile
                    ? "Gotham Pro Regular"
                    : "Gotham Pro Light",
                }}
              >
                15:30
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  width: isMobile ? "90%" : "60%",
                  fontFamily: isMobile
                    ? "Gotham Pro Regular"
                    : "Gotham Pro Light",
                }}
              >
                Закрытие выхода на 3 круг для дистанции 51 км
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  width: isMobile ? "10%" : "40%",
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
                  width: isMobile ? "90%" : "60%",
                  fontFamily: "Gotham Pro Bold",
                }}
              >
                Церемония награждения
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  width: isMobile ? "10%" : "40%",
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
                  width: isMobile ? "90%" : "60%",
                  fontFamily: isMobile
                    ? "Gotham Pro Regular"
                    : "Gotham Pro Light",
                }}
              >
                Награждение – Спутник 17 км
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  width: isMobile ? "10%" : "40%",
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
                  width: isMobile ? "90%" : "60%",
                  fontFamily: isMobile
                    ? "Gotham Pro Regular"
                    : "Gotham Pro Light",
                }}
              >
                Награждение – Полумарафон 34 км
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  width: isMobile ? "10%" : "40%",
                  textAlign: "center",
                  fontFamily: isMobile
                    ? "Gotham Pro Regular"
                    : "Gotham Pro Light",
                }}
              >
                15:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  width: isMobile ? "90%" : "60%",
                  fontFamily: isMobile
                    ? "Gotham Pro Regular"
                    : "Gotham Pro Light",
                }}
              >
                Награждение – Марафон 51 км
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProgramMarathon;
