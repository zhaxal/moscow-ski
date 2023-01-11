import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  bg: string;
  isMobile: boolean;
}

const ProgramSki = ({ bg, isMobile }: Props) => {
  return (
    <Stack direction={"column"} sx={{ width: "100%" }} spacing={"20px"}>
      <Header bg={bg} text={"ПРОГРАММА"} />
      <Box sx={{ width: "100%", px: "16px" }}>
        <Stack direction={"column"} spacing={"5px"}>
          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "5%" : "20%", textAlign: "center" }}
            >
              08:00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "95%" : "80%" }}
            >
              Начало дополнительной регистрации участников
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "5%" : "20%", textAlign: "center" }}
            >
              09:50
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "95%" : "80%" }}
            >
              Церемония открытия соревнований
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "5%" : "20%", textAlign: "center" }}
            >
              10:00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "95%" : "80%" }}
            >
              Старт группы ПРО (Элита)
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "5%" : "20%", textAlign: "center" }}
            >
              10:20
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "95%" : "80%" }}
            >
              Старт группы 18-29 лет
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "5%" : "20%", textAlign: "center" }}
            >
              11:00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "95%" : "80%" }}
            >
              Старт группы 30-39 лет
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "5%" : "20%", textAlign: "center" }}
            >
              11:15
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "95%" : "80%" }}
            >
              {`Награждение победителей и призеров Категории ПРО 
              (Элита)`}
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "5%" : "20%", textAlign: "center" }}
            >
              11:30
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" , width: isMobile ?  "95%" : "80%"}}
            >
              Старт группы 40-49 лет
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "5%" : "20%", textAlign: "center" }}
            >
              12:00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "95%" : "80%" }}
            >
              Старт группы 50-59 лет
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "5%" : "20%", textAlign: "center" }}
            >
              12:30
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "95%" : "80%" }}
            >
              Старт группы 60-99 лет
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "5%" : "20%", textAlign: "center" }}
            >
              13:00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "95%" : "80%" }}
            >
              Старт детского забега на 1 км
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "5%" : "20%", textAlign: "center" }}
            >
              14:00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: isMobile ?  "95%" : "80%" }}
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
