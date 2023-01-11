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
      <Stack sx={{ width: "100%", px: "16px" }} spacing={5}>
        <Stack direction={"column"} spacing={"4px"}>
          <Stack direction={"row"} spacing={spacing}>
            <Typography variant="body" color={"white"} sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%", textAlign: "center", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}>
              11 февраля
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%" }}
            >
            </Typography>
          </Stack>
          <Stack direction={"column"} spacing={"4px"}>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%", textAlign: "center", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                12:00 - 17:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                Просмотр лыжной трассы
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%", textAlign: "center", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                17:00 - 20:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                Регистрация участников
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction={"column"} spacing={"4px"}>
          <Stack direction={"row"} spacing={spacing}>
            <Typography variant="body" color={"white"} sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%", textAlign: "center", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}>
              12 февраля
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%" }}
            >
            </Typography>
          </Stack>
          <Stack direction={"column"} spacing={"4px"}>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%", textAlign: "center", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                08:00 - 10:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                Регистрация участников
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%", textAlign: "center", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                11:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                Старт 25 км - Полумарафон
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%", textAlign: "center", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                11:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                Старт 50 км - Марафон
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%", textAlign: "center", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                14:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                Награждение – 25 км Полумарафон
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%", textAlign: "center", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                14:30
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                Награждение – 50 км Марафон
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%", textAlign: "center", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                15:30
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%", fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}
              >
                Награждение – 50 км Марафон (возрастные группы)
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProgramMarathon;
