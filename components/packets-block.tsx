import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  bg: string;
  matches: boolean;
  isSki: boolean;
}

const Packets = ({ bg, matches, isSki }: Props) => {
  const stackSpacing = 2;
  const marginBottom = matches ? 5 : 2;
  const columnWidth = matches ? "50%" : "100%";
  const registrationText = "регистрация участников на месте не производится";
  const registrationStyle = {
    fontSize: "20px",
    fontFamily: "Gotham Pro Bold",
    textTransform: "uppercase",
  };
  const whiteTextStyle = { whiteSpace: "pre-line" };

  return (
    <Stack direction="column" sx={{ width: "100%", mb: marginBottom }} spacing={stackSpacing}>
      <Header bg={bg} text="ПАКЕТ УЧАСТНИКА" />
      <Box sx={{ width: "100%", px: "16px" }}>
        {isSki ? (
          <Stack sx={{ width: "100%" }} direction="column" spacing={5}>
            <Typography variant="body" color="white" sx={registrationStyle}>
              {registrationText}
            </Typography>
            <Stack sx={{ width: "100%" }} direction={matches ? "row" : "column"} spacing={6}>
              <Stack sx={{ width: columnWidth }} spacing={3}>
                <Typography
                  variant="body"
                  color="white"
                  sx={whiteTextStyle}
                  dangerouslySetInnerHTML={{
                    __html: `Время и место получения:
                    <strong>(Для бегущих в Альфа-Битце и Лужниках):</strong>`,
                  }}
                />
                <Typography variant="body" color="white" sx={whiteTextStyle}>
                  {`7 февраля: с 15:00 до 20:00
                        8 февраля: с 10:00 до 20:00
                        ул. Лужники д. 24, ориентир: Входной павильон 1Е (Лужники, 24с22)`}
                </Typography>
                <Typography
                  variant="body"
                  color="white"
                  sx={whiteTextStyle}
                  dangerouslySetInnerHTML={{
                    __html: `<strong>(Для бегущих в Лужниках):</strong>
                    9 февраля 2024 г. (в день старта) с 9:00 до 13:15 выдача стартовых комплектов будет проводиться по адресу: 
                    <div style="margin-top:5px">ул. Лужники, д. 24, ориентир: Входной павильон 1Е (Лужники, 24с22), лыжно-биатлонная трасса в шатре «Регистрация»</div>`,
                  }}
                />
                <Typography
                  variant="body"
                  color="white"
                  sx={whiteTextStyle}
                  dangerouslySetInnerHTML={{
                    __html: `<strong>(Для бегущих в Альфа-Битце):</strong>
                    10 февраля 2024 года (в день старта) с 8:00 до 13:15 выдача стартовых комплектов будет проводиться на территории зоны отдыха «Альфа-Битца» в помещении «Регистрация»`,
                  }}
                />
              </Stack>
              <Stack sx={{ width: columnWidth }} spacing={3}>
                <Typography
                  variant="body"
                  color="white"
                  sx={whiteTextStyle}
                  dangerouslySetInnerHTML={{
                    __html: `Время и место получения:
                    <strong>(Для бегущих в Вороново):</strong>`,
                  }}
                />
                <Typography variant="body" color="white" sx={whiteTextStyle}>
                  10 февраля 2024 года (в день старта) с 09:30 до 10:45 выдача стартовых комплектов будет проводиться по адресу: г. Москва, п. Вороновское, пос. ЛМС, лыжная трасса
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        ) : (
          <Stack sx={{ width: "100%" }} direction="column" spacing={5}>
            <Stack sx={{ width: "100%" }} direction={matches ? "row" : "column"} spacing={6}>
              <Stack sx={{ width: columnWidth, mb: "90px" }} spacing={3}>
                <Typography variant="body" color="white" sx={whiteTextStyle}>
                  Время и место получения:
                </Typography>
                <Typography variant="body" color="white" sx={whiteTextStyle}>
                  {`7 февраля: с 15:00 до 20:00
                    8 февраля: с 10:00 до 20:00`}
                </Typography>
                <Typography variant="body" color="white" sx={whiteTextStyle}>
                  СК Лужники, Москва, ул.Лужники, 24, стр. 1
                </Typography>
                <Typography variant="body" color="white" sx={whiteTextStyle}>
                  {`11 февраля 2024 года (в день старта) с 8:00 до 10:30 
                  выдача стартовых комплектов будет проводиться на 
                  территории зоны отдыха «Альфа-Битца»`}
                </Typography>
                <Typography variant="body" color="white" sx={{ fontFamily: "Gotham Pro Bold" }}>
                  Почта для связи с организатором:
                </Typography>
                <Typography
                  variant="body"
                  component="a"
                  color="white"
                  href="mailto:pershutkinae@gmail.com"
                  sx={{
                    fontFamily: "Gotham Pro Bold",
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "3px",
                    cursor: "pointer",
                  }}
                >
                  pershutkinae@gmail.com
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        )}
      </Box>
    </Stack>
  );
};

export default Packets;