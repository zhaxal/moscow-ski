import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  isMobile: boolean;
  bg: string;
}

const Footer = ({ isMobile, bg }: Props) => {
  const iframeSrc = "https://yandex.ru/map-widget/v1/?um=constructor%3A700208c7b0ea0ace0d8154b93892de9ddd6e84e4b2cbb5a92a86c02ea6202d74&amp;source=constructor";
  const address = `Москва, ЮЗАО, 36й км МКАД, зона 
  отдыха «Альфа-Битца»`;
  const carDirections = `Адрес парковки:

  проезд Карамзина, 17А
  Координаты:
  55.588664, 37.545536`;
  const walkDirections = `От ст.м. Ясенево, первый вагон из 
  центра, выход номер 3, из 
  стеклянных дверей налево, и сразу 
  налево. Автобус 165 до ост. «Зона 
  отдыха Битца» (10 минут). Далее 
  пешком 200 м до старта.

  От ст. м. Бульвар Дмитрия Донского 
  выход N6, авт 967 до ост. «Зона 
  отдыха Битца» (10 минут). Далее 
  пешком 200 м до старта.`;
  const coordinates = `Долгота,        широта: 
  55.585360, 37.545857`;

  return (
    <Stack direction="column" sx={{ width: "100%" }} spacing={isMobile ? "20px" : 2}>
      <Header bg={bg} text="МЕСТО ПРОВЕДЕНИЯ" />
      <Stack sx={{ width: "100%" }} direction={isMobile ? "row" : "column-reverse"} spacing="26px">
        <Box sx={{ height: "592px", width: isMobile ? "65%" : "100%" }}>
          <iframe src={iframeSrc} height="100%" width="100%" frameBorder="0"></iframe>
        </Box>
        <Stack sx={{ width: isMobile ? "35%" : "100%", height: "100%" }} spacing={2} direction="column">
          <Typography variant="footer" sx={{ whiteSpace: "pre-line", fontFamily: "Gotham Pro Light" }}>
            {address}
          </Typography>
          <Typography variant="footer" sx={{ whiteSpace: "pre-line", fontWeight: 700 }}>
            Как добраться?
          </Typography>
          <Stack>
            <Typography variant="footer" sx={{ textDecoration: "underline", fontFamily: "Gotham Pro Light", textDecorationThickness: "1px" }}>
              На машине
            </Typography>
            <Typography variant="footer" sx={{ whiteSpace: "pre-line", fontFamily: "Gotham Pro Light", lineHeight: "21px" }}>
              {carDirections}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="footer" sx={{ textDecoration: "underline", fontFamily: "Gotham Pro Light", textDecorationThickness: "1px" }}>
              Пешком
            </Typography>
            <Typography variant="footer" sx={{ whiteSpace: "pre-line", fontFamily: "Gotham Pro Light", lineHeight: "21px" }}>
              {walkDirections}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="footer" sx={{ textDecoration: "underline", fontFamily: "Gotham Pro Light", textDecorationThickness: "1px" }}>
              Координаты
            </Typography>
            <Typography variant="footer" sx={{ whiteSpace: "pre-line", fontFamily: "Gotham Pro Light" }}>
              {coordinates}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;