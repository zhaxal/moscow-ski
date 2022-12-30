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
    <Stack direction={"column"} sx={{ width: "100%" }} spacing={5}>
      <Header bg={bg} text={"ПРОГРАММА"} />
      <Stack sx={{ width: "100%", px: "16px" }} spacing={5}>
        <Stack direction={"column"} spacing={"4px"}>
          <Typography variant="body" color={"white"}>
            11 февраля
          </Typography>
          <Stack direction={"column"} spacing={"4px"}>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%" }}
              >
                12:00 - 17:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%" }}
              >
                Просмотр лыжной трассы
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%" }}
              >
                17:00 - 20:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%" }}
              >
                Регистрация участников
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction={"column"} spacing={"4px"}>
          <Typography variant="body" color={"white"}>
            12 февраля
          </Typography>
          <Stack direction={"column"} spacing={"4px"}>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%" }}
              >
                08:00 - 10:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%" }}
              >
                Регистрация участников
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%" }}
              >
                11:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%" }}
              >
                Старт 25 км - Полумарафон
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%" }}
              >
                11:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%" }}
              >
                Старт 50 км - Полумарафон
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%" }}
              >
                14:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%" }}
              >
                Награждение – 25 км Полумарафон
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%" }}
              >
                14:30
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%" }}
              >
                Награждение – 50 км Марафон
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={spacing}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "10%" : "40%" }}
              >
                15:30
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: isMobile ? "90%" : "60%"  }}
              >
                Награждение – 50км Марафон Возрастные группы
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProgramMarathon;
