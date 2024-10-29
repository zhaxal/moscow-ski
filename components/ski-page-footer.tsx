import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  isMobile: boolean;
  bg: string;
}

const SkiPageFooter = ({ isMobile, bg }: Props) => {
  const stackSpacing = isMobile ? "40px" : 2;
  const columnDirection = isMobile ? "row" : "column-reverse";
  const iframeHeight = "100%";
  const iframeWidth = "100%";
  const iframeFrameBorder = "0";
  const boxHeight1 = "592px";
  const boxHeight2 = "633px";
  const boxWidth = isMobile ? "65%" : "100%";
  const stackWidth = isMobile ? "35%" : "100%";
  const typographyStyles = { whiteSpace: "pre-line", fontFamily: "Gotham Pro Light" };
  const underlineStyles = { textDecoration: "underline", fontFamily: "Gotham Pro Light", textDecorationThickness: "1px" };

  return (
    <Stack direction="column" sx={{ width: "100%" }} spacing={stackSpacing}>
      <Header bg={bg} text="МЕСТА ПРОВЕДЕНИЯ" />
      <Stack direction="column" spacing="10px">
        <Typography variant="body" color="white" sx={{ fontFamily: "Gotham Pro Bold", whiteSpace: "pre-line", fontSize: "24px" }}>
          {`9 февраля \nШкольный день`}
        </Typography>
        <Stack sx={{ width: "100%" }} direction={columnDirection} spacing="26px">
          <Box sx={{ height: boxHeight1, width: boxWidth }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A71b804130a0cef1bd2bfdc4eabbf1426bafaf8bac5cda6a9fd90e5990589c0dc&amp;source=constructor"
              height={iframeHeight}
              width={iframeWidth}
              frameBorder={iframeFrameBorder}
            ></iframe>
          </Box>
          <Stack sx={{ width: stackWidth, height: "100%" }} spacing={2} direction="column">
            <Typography variant="footer" sx={typographyStyles}>
              {`ул. Лужники д.24 с.7`}
            </Typography>
            <Typography variant="footer" sx={{ whiteSpace: "pre-line", fontWeight: 700 }}>
              {`Как добраться?`}
            </Typography>
            <Typography variant="footer" sx={{ ...typographyStyles, lineHeight: "21px" }}>
              {`От станции метро «Спортивная» через Центральное КПП (Павильон «1Е»)\n\nОт станции МЦК «Лужники» через Центральное КПП (Павильон «1Е»)\n\nОт станции «Воробьевы горы» через КПП2`}
            </Typography>
            <Stack>
              <Typography variant="footer" sx={underlineStyles}>
                Координаты
              </Typography>
              <Typography variant="footer" sx={typographyStyles}>
                {`Долгота,        широта: \n55.715865, 37.560853`}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="column" spacing="10px">
        <Typography variant="body" color="white" sx={{ fontFamily: "Gotham Pro Bold", whiteSpace: "pre-line", fontSize: "24px" }}>
          {`10 февраля\nОсновной старт`}
        </Typography>
        <Stack sx={{ width: "100%" }} direction={columnDirection} spacing="26px">
          <Box sx={{ height: boxHeight2, width: boxWidth }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A700208c7b0ea0ace0d8154b93892de9ddd6e84e4b2cbb5a92a86c02ea6202d74&amp;source=constructor"
              height={iframeHeight}
              width={iframeWidth}
              frameBorder={iframeFrameBorder}
            ></iframe>
          </Box>
          <Stack sx={{ width: stackWidth, height: "100%" }} spacing={2} direction="column">
            <Typography variant="footer" sx={typographyStyles}>
              {`Москва, ЮЗАО, 36й км МКАД, зона \nотдыха «Альфа-Битца»`}
            </Typography>
            <Typography variant="footer" sx={{ whiteSpace: "pre-line", fontWeight: 700 }}>
              {`Как добраться?`}
            </Typography>
            <Stack>
              <Typography variant="footer" sx={underlineStyles}>
                На машине
              </Typography>
              <Typography variant="footer" sx={{ ...typographyStyles, lineHeight: "21px" }}>
                {`Адрес парковки:\n\nпроезд Карамзина, 17А\nКоординаты:\n55.588664, 37.545536`}
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="footer" sx={underlineStyles}>
                Пешком
              </Typography>
              <Typography variant="footer" sx={{ ...typographyStyles, lineHeight: "21px" }}>
                {`От ст.м. Ясенево, первый вагон из \nцентра, выход номер 3, из \nстеклянных дверей налево, и сразу \nналево. Автобус 165 до ост. «Зона \nотдыха Битца» (10 минут). Далее \nпешком 200 м до старта.\n\nОт ст. м. Бульвар Дмитрия Донского \nвыход N6, авт 967 до ост. «Зона \nотдыха Битца» (10 минут). Далее \nпешком 200 м до старта.`}
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="footer" sx={underlineStyles}>
                Координаты
              </Typography>
              <Typography variant="footer" sx={typographyStyles}>
                {`Долгота,        широта: \n55.585360, 37.545857`}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SkiPageFooter;