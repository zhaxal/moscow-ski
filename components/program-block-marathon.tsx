import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  bg: string;
}

const ProgramMarathon = ({ bg }: Props) => {
  return (
    <Stack direction={"column"} sx={{ width: "100%" }} spacing={5}>
      <Header bg={bg} text={"ПРОГРАММА"} />
      <Stack sx={{ width: "100%", px: "16px" }} spacing={5}>
        <Stack direction={"column"} spacing={"4px"}>
          <Typography variant="body" color={"white"}>
            11 февраля
          </Typography>
          <Stack direction={"column"} spacing={"4px"}>
            <Stack direction={"row"} spacing={7}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: "10%" }}
              >
                12:00 - 17:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line" }}
              >
                Просмотр лыжной трассы
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={7}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: "10%" }}
              >
                17:00 - 20:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line" }}
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
            <Stack direction={"row"} spacing={7}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: "10%" }}
              >
                08:00 - 10:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line" }}
              >
                Регистрация участников
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={7}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: "10%" }}
              >
                11:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line" }}
              >
                Старт 25 км - Полумарафон
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={7}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: "10%" }}
              >
                11:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line" }}
              >
                Старт 50 км - Полумарафон
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={7}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: "10%" }}
              >
                14:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line" }}
              >
                Награждение – 25 км Полумарафон
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={7}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: "10%" }}
              >
                14:30
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line" }}
              >
                Награждение – 50 км Марафон
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={7}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line", width: "10%" }}
              >
                15:30
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line" }}
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
