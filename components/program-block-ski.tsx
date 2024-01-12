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

const events9 = [
  {
    "name": "Дистанция 1 км.",
    "events": [
      {
        "time": "10:30 – 10:45",
        "text": "​Девочки (2014-2015 г.р.)"
      },
      {
        "time": "10:45 – 11:00",
        "text": "Мальчики (2014-2015 г.р.)"
      }
    ]
  },
  {
    "name": "Дистанция 3 км.",
    "events": [
      {
        "time": "11:15 – 11:30",
        "text": "Девушки среднего возраста (2008- 2009 г.р.)"
      },
      {
        "time": "11:30 – 11:45",
        "text": "Юноши младшего возраста (2010 - 2011 г.р.)"
      },
      {
        "time": "11:45 – 12:00",
        "text": "​Девушки младшего возраста (2010 - 2011 г.р.)"
      },
      {
        "time": "12:00 – 12:15",
        "text": "Юноши младшего возраста (2012 - 2013 г.р.)"
      },
      {
        "time": "12:15 – 12:30",
        "text": "Девушки младшего возраста (2012 - 2013 г.р.)"
      }
    ]
  },
  {
    "name": "Дистанция 5 км.",
    "events": [
      {
        "time": "12:45 – 13:00",
        "text": "Девушки старшего возраста (2006-2007 г.р.)"
      },
      {
        "time": "13:00 – 13:15",
        "text": "Юноши среднего возраста (2008-2009 г.р.)"
      },
      {
        "time": "13:30 – 13:45",
        "text": "Юноши старшего возраста (2006-2007 г.р.)"
      }
    ]
  }
];

const events10 = [
  {
    time: "08:00", text: `Начало выдачи стартовых пакетов на территории СК «Альфа- Битца» в помещении \"Регистрация\". Дополнительная регистрация возможна только при наличии свободных номеров.` },
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
  { time: "13:45", text: "Награждение группы 60-99 лет" },
  { time: "14:30", text: "Окончание мероприятия" },
];



const ProgramBlock = ({ text, time, isMobile }: ProgramBlockProps) => {
  return (
    <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
      <Typography
        variant="body"
        color={"white"}
        sx={{
          whiteSpace: "pre-line",
          width: isMobile ? "25%" : "50%",
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
      <Header bg={bg} text={"ПРОГРАММА"} />
      <Box sx={{ width: "100%", px: isMobile ? "16px" : "0px" }}>
        <Stack direction={isMobile ? "row" : "column"} spacing={isMobile ? "0px" : "50px"}>
          <Stack direction={"column"} width={isMobile ? "50%" : "100%"} spacing={"30px"}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                fontFamily: "Gotham Pro Bold",
              }}
            >
              {"9 ФЕВРАЛЯ"}
            </Typography>
            {events9.map((event, index) => (
              <Stack key={index} direction={"column"} spacing={"7px"}>
                <Typography
                  variant="body"
                  color={"white"}
                  sx={{
                    fontFamily: isMobile
                      ? "Gotham Pro Regular"
                      : "Gotham Pro Light",
                  }}
                >
                  {event.name}
                </Typography>
                {event.events.map((event, index) => (
                  <ProgramBlock key={index} bg={bg} isMobile={isMobile} time={event.time} text={event.text} />
                ))}
              </Stack>
            ))}
          </Stack>
          <Stack direction={"column"} width={isMobile ? "50%" : "100%"} spacing={"30px"}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                fontFamily: "Gotham Pro Bold",
              }}
            >
              {"10 ФЕВРАЛЯ"}
            </Typography>
            <Stack direction={"column"} spacing={"7px"}>
              {events10.map((event, index) => (
                <ProgramBlock key={index} bg={bg} isMobile={isMobile} time={event.time} text={event.text} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProgramSki;
