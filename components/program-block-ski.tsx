import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";
import CustomBtn from "./ui/CustomBtn";
import ProgramBlock from "./ui/ProgramBlock";

interface Props {
  bg: string;
  isMobile: boolean;
}

const events9 = [
  {
    name: "Дистанция 3 км.",
    events: [
      { time: "10:30", text: "Юноши среднего возраста (2008 - 2009 г.р.)" },
      { time: "11:08", text: "Девушки среднего возраста (2008 - 2009 г.р.)" },
      { time: "12:15", text: "​Награждение за дистанцию 3 км" },
    ],
  },
  {
    name: "Дистанция 5 км.",
    events: [
      { time: "12:30", text: "Юноши старшего возраста (2006-2007 г.р.)" },
      { time: "12:54", text: "Девушки старшего возраста (2006-2007 г.р.)" },
      { time: "13:06", text: "Юноши старшего возраста (2005+ г.р.)" },
      { time: "13:28", text: "Девушки старшего возраста (2005+ г.р.)" },
      { time: "14:30", text: "Награждение за дистанцию 5 км" },
    ],
  },
  {
    name: "Дистанция 1 км.",
    events: [
      { time: "15:00", text: "Юноши младшего возраста (2010 - 2011 г.р.)" },
      { time: "15:22", text: "Девушки младшего возраста (2010 - 2011 г.р.)" },
      { time: "15:35", text: "Юноши младшего возраста (2012 - 2013 г.р.)" },
      { time: "15:58", text: "Девушки младшего возраста (2012 - 2013 г.р.)" },
      { time: "16:11", text: "Мальчики (2014-2015 г.р.)" },
      { time: "16:29", text: "​Девочки (2014-2015 г.р.)" },
      { time: "17:00", text: "Награждение за дистанцию 1 км" },
    ],
  },
];

const events10 = [
  { time: "08:00", text: `Начало выдачи стартовых пакетов на территории СК «Альфа- Битца» в помещении \"Регистрация\". Дополнительная регистрация возможна только при наличии свободных номеров.` },
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

const events10_2 = [
  {
    name: "Дистанция 1 км.",
    events: [
      { time: "11:00", text: "Мальчики 2011 – 2012 г.р." },
      { time: "11:05", text: "Мальчики 2013 – 2014 г.р." },
      { time: "11:10", text: "Девочки 2011 – 2012 г.р." },
      { time: "11:15", text: "Девочки 2013 – 2014 г.р." },
      { time: "11:20", text: "Мальчики 2015 г.р. и моложе." },
      { time: "11:25", text: "Девочки 2015 г.р. и моложе." },
      { time: "11:50", text: "Награждение участников дистанции 1 км" },
    ],
  },
  {
    name: "Дистанция 3 км.",
    events: [
      { time: "11:35", text: "Юноши 2009 – 2010 г.р." },
      { time: "11:40", text: "Женщины 1972-1963 г.р." },
      { time: "11:40", text: "Женщины 1962 г.р. и старше" },
      { time: "11:45", text: "Девушки 2007 – 2008 г.р." },
      { time: "11:50", text: "Девушки 2009 – 2010 г.р." },
      { time: "12:30", text: "Награждение участников дистанции 3 км" },
    ],
  },
  {
    name: "Дистанция 5 км.",
    events: [
      { time: "11:55", text: "Мужчины 1962 - 1958 г.р." },
      { time: "12:00", text: "Мужчины 1957 - 1953 г.р." },
      { time: "12:05", text: "Мужчины 1952 - 1948 г.р." },
      { time: "12:10", text: "Мужчины 1947 г.р. и старше" },
      { time: "12:15", text: "Юноши 2007 – 2008 г.р." },
      { time: "12:20", text: "Женщины 1982 – 1973 г.р." },
      { time: "12:25", text: "Женщины 2004 – 1993 г.р." },
      { time: "12:30", text: "Женщины 1992 – 1983 г.р." },
      { time: "12:35", text: "Награждение участников дистанции 5 км" },
    ],
  },
  {
    name: "Дистанция 10 км.",
    events: [
      { time: "12:40", text: "Мужчины 2004 – 1993 г.р." },
      { time: "12:45", text: "Юноши 2005 – 2006 г.р." },
      { time: "12:50", text: "Мужчины 1992 – 1983 г.р." },
      { time: "12:55", text: "Мужчины 1982 – 1973 г.р." },
      { time: "13:00", text: "Мужчины 1972 – 1963 г.р." },
      { time: "14:00", text: "Награждение участников дистанции 10 км" },
    ],
  },
];

const ProgramSki = ({ bg, isMobile }: Props) => {
  const stackSpacing = "20px";
  const marginBottom = isMobile ? 5 : 2;
  const boxPadding = isMobile ? "16px" : "0px";
  const columnWidth = isMobile ? "50%" : "100%";
  const buttonHeight = isMobile ? "60px" : "48px";
  const buttonWidth = isMobile ? "468px" : "320px";
  const buttonFontSize = isMobile ? "21px" : "14px";
  const buttonBg = "linear-gradient(90deg, #015B88 0%, #009DEC 100%)";
  const whiteTextStyle = { color: "white" };
  const boldTextStyle = { fontFamily: "Gotham Pro Bold" };
  const uppercaseTextStyle = { textTransform: "uppercase" };

  return (
    <Stack direction="column" sx={{ width: "100%", mb: marginBottom }} spacing={stackSpacing}>
      <Header bg={bg} text="ПРОГРАММА" />
      <Box sx={{ width: "100%", px: boxPadding }}>
        <Stack direction="column" spacing="50px">
          <Stack direction={isMobile ? "row" : "column"} spacing={isMobile ? "0px" : "50px"}>
            <Stack direction="column" width={columnWidth} spacing="30px">
              <Typography variant="body" sx={{ ...whiteTextStyle, ...boldTextStyle }}>
                9 ФЕВРАЛЯ
              </Typography>
              <Typography variant="body" sx={{ ...whiteTextStyle, ...boldTextStyle, fontSize: "20px", ...uppercaseTextStyle }}>
                регистрация участников на месте не производится
              </Typography>
              {events9.map((event, index) => (
                <Stack key={index} direction="column" spacing="7px">
                  <Typography variant="body" sx={{ ...whiteTextStyle, fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}>
                    {event.name}
                  </Typography>
                  {event.events.map((event, index) => (
                    <ProgramBlock width="23%" key={index} isMobile={isMobile} time={event.time} text={event.text} />
                  ))}
                </Stack>
              ))}
              <CustomBtn
                bg={buttonBg}
                text="РЕЗУЛЬТАТЫ"
                height={buttonHeight}
                width={buttonWidth}
                lineHeight="30px"
                fontSize={buttonFontSize}
                onClick={() => window.open("https://sportident.online/ol/?id=1609", "_blank")?.focus()}
              />
              <CustomBtn
                bg={buttonBg}
                text="ФОТО"
                height={buttonHeight}
                width={buttonWidth}
                lineHeight="30px"
                fontSize={buttonFontSize}
                onClick={() => window.open("https://disk.yandex.ru/d/L3hpN5Gd4kFtCA", "_blank")?.focus()}
              />
              <Typography variant="body" sx={{ ...whiteTextStyle, ...boldTextStyle }}>
                Почта для связи с организатором:
              </Typography>
              <Typography
                variant="body"
                component="a"
                sx={{ ...whiteTextStyle, ...boldTextStyle, textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "3px", cursor: "pointer" }}
                href="mailto:pershutkinae@gmail.com"
              >
                pershutkinae@gmail.com
              </Typography>
            </Stack>
            <Stack direction="column" width={columnWidth} spacing="30px">
              <Typography variant="body" sx={{ ...whiteTextStyle, ...boldTextStyle }}>
                10 ФЕВРАЛЯ АЛЬФА-БИТЦА
              </Typography>
              <Typography variant="body" sx={{ ...whiteTextStyle, ...boldTextStyle, fontSize: "20px", ...uppercaseTextStyle }}>
                регистрация участников на месте не производится
              </Typography>
              <Stack direction="column" spacing="10.3px">
                {events10.map((event, index) => (
                  <ProgramBlock width="10%" key={index} isMobile={isMobile} time={event.time} text={event.text} />
                ))}
              </Stack>
              <CustomBtn
                bg={buttonBg}
                text="РЕЗУЛЬТАТЫ"
                height={buttonHeight}
                width={buttonWidth}
                lineHeight="30px"
                fontSize={buttonFontSize}
                onClick={() => window.open("https://results.zone/lyzhnya-rossii-2024", "_blank")?.focus()}
              />
              <CustomBtn
                bg={buttonBg}
                text="ФОТО"
                height={buttonHeight}
                width={buttonWidth}
                lineHeight="30px"
                fontSize={buttonFontSize}
                onClick={() => window.open("https://disk.yandex.ru/d/1yoiCGORL_U0Tg", "_blank")?.focus()}
              />
            </Stack>
          </Stack>
          <Stack direction="column" width={columnWidth} spacing="30px">
            <Typography variant="body" sx={{ ...whiteTextStyle, ...boldTextStyle }}>
              10 ФЕВРАЛЯ ВОРОНОВСКОЕ
            </Typography>
            {events10_2.map((event, index) => (
              <Stack key={index} direction="column" spacing="7px">
                <Typography variant="body" sx={{ ...whiteTextStyle, fontFamily: isMobile ? "Gotham Pro Regular" : "Gotham Pro Light" }}>
                  {event.name}
                </Typography>
                {event.events.map((event, index) => (
                  <ProgramBlock width="23%" key={index} isMobile={isMobile} time={event.time} text={event.text} />
                ))}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProgramSki;