import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  bg: string;
  isMobile: boolean;
}

interface ProgramBlockProps extends Props {
  text: string;
  time: string;
}

const events = [
  {
    time: "08:00", text: `Начало выдачи стартовых пакетов на территории СК 
  «Альфа- Битца» в помещении \"Регистрация\". Дополнительная регистрация возможна только при наличии свободных номеров.` },
  { time: "09:50", text: "Церемония открытия соревнований" },
  { time: "10:00", text: "Старт группы ПРО (Элита)" },
  { time: "10:30", text: "Старт группы 18-29 лет" },
  { time: "11:00", text: "Старт группы 30-39 лет" },
  { time: "11:15", text: "Награждение победителей и призеров Категории ПРО (Элита)" },
  { time: "11:30", text: "Старт группы 40-49 лет" },
  { time: "11:45", text: "Награждение группы 18-29 лет" },
  { time: "12:00", text: "Старт группы 50-59 лет" },
  { time: "12:15", text: "Награждение группы 30-39 лет" },
  { time: "12:30", text: "Старт группы 60-99 лет" },
  { time: "12:45", text: "Награждение группы 40-49 лет" },
  { time: "13:15", text: "Награждение группы 50-59 лет" },
  { time: "13:30", text: "Старт детского забега на 1 км" },
  { time: "13:45", text: "Награждение группы 60-99 лет" },
  { time: "14:30", text: "Окончание мероприятия, демонтаж оборудования" },
];



const ProgramBlock = ({ text, time, isMobile }: ProgramBlockProps) => {
  return (
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
        {time}
      </Typography>
      <Typography
        variant="body"
        color={"white"}
        sx={{
          whiteSpace: "pre-line",
          width: isMobile ? "95%" : "80%",
          maxWidth: isMobile ? "650px" : "80%",
          fontFamily: isMobile
            ? "Gotham Pro Regular"
            : "Gotham Pro Light",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
}

const ProgramSki = ({ bg, isMobile }: Props) => {
  return (
    <Stack
      direction={"column"}
      sx={{ width: "100%", mb: isMobile ? 5 : 2 }}
      spacing={"20px"}
    >
      <Header bg={bg} text={"ПРОГРАММА 10 февраля"} />
      <Box sx={{ width: "100%", px: "16px" }}>
        <Stack direction={"column"} spacing={"7px"}>
          <Stack direction={"column"} spacing={"7px"}>
            {events.map((event, index) => (
              <ProgramBlock key={index} bg={bg} isMobile={isMobile} time={event.time} text={event.text} />
            ))}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProgramSki;
