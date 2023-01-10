import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  isMobile: boolean;
  bg: string;
}

const Footer = ({ isMobile, bg }: Props) => {
  return (
    <Stack
      direction={"column"}
      sx={{ width: "100%" }}
      spacing={isMobile ? "20px" : 2}
    >
      <Header bg={bg} text={"МЕСТО ПРОВЕДЕНИЯ"} />
      <Stack
        sx={{ width: "100%" }}
        direction={isMobile ? "row" : "column-reverse"}
        spacing={"26px"}
      >
        <Box
          sx={{
            height: "592px",
            width: isMobile ? "65%" : "100%",
          }}
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A700208c7b0ea0ace0d8154b93892de9ddd6e84e4b2cbb5a92a86c02ea6202d74&amp;source=constructor"
            height="100%"
            width={"100%"}
            frameBorder="0"
          ></iframe>
        </Box>

        <Stack
          sx={{
            width: isMobile ? "35%" : "100%",
            height: "100%",
            py: "50px"
          }}
          spacing={2}
          direction={"column"}
        >
          <Typography
            variant="footer"
            sx={{ whiteSpace: "pre-line", fontWeight: 700 }}
          >
            {`Москва, ЮЗАО, 36й км МКАД, зона 
            отдыха «Альфа-Битца»`}
          </Typography>

          <Typography
            variant="footer"
            sx={{ whiteSpace: "pre-line", fontWeight: 700 }}
          >
            {`Как добраться?`}
          </Typography>

          <Stack>
            <Typography variant="footer" sx={{ textDecoration: "underline" }}>
              На машине
            </Typography>
            <Typography variant="footer" sx={{ whiteSpace: "pre-line" }}>
              {`По МКАД с запада на юг: после 
                развязки на Ясенево по внешней 
                стороне МКАД двигайтесь примерно 
                1,5 км. После крытого пешеходного 
                моста снижайте скорость и 
                сворачивайте вниз на стоянку. 
                Для навигатора набрать — «Альфа-
                Битца».`}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="footer" sx={{ textDecoration: "underline" }}>
              Пешком
            </Typography>
            <Typography variant="footer" sx={{ whiteSpace: "pre-line" }}>
              {`Ст.м. Ясенево, первый вагон из 
                центра, из стеклянных дверей 
                налево, и сразу налево. Авт 202, 165 
                до ост. Зона отдыха Битца (10 минут). 
                Далее пешком 200 м до старта.`}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="footer" sx={{ textDecoration: "underline" }}>
              Координаты
            </Typography>
            <Typography variant="footer" sx={{ whiteSpace: "pre-line" }}>
              {`Долгота, широта: 55.585360, 37.545857`}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
