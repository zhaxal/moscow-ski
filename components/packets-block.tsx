import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import { fontFamily } from "@mui/system";
import React from "react";
import Header from "./ui/Header";

interface Props {
  bg: string;
  matches: boolean;
  isSki: boolean;
}

const Packets = ({ bg, matches, isSki }: Props) => {
  return (
    <Stack
      direction={"column"}
      sx={{ width: "100%", mb: matches ? 5 : 2 }}
      spacing={2}
    >
      <Header bg={bg} text={"ПАКЕТ УЧАСТНИКА"} />
      <Box sx={{ width: "100%", px: "16px" }}>
        {isSki ? (
          <Stack sx={{ width: "100%" }} direction={"column"} spacing={5}>
            <Typography variant="body"
              color={"white"}
              sx={{
                fontSize: "20px",
                fontFamily: "Gotham Pro Bold",
                textTransform: "uppercase"
              }}>
              регистрация участников на месте не производится
            </Typography>
            <Stack sx={{ width: "100%" }} direction={matches ? "row" : "column"} spacing={6}>
              <Stack sx={{ width: matches ? "50%" : "100%" }} spacing={3}>
                <Typography
                  variant="body"
                  color={"white"}
                  sx={{
                    whiteSpace: "pre-line",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `Время и место получения:
                    <strong>(Для бегущих в Альфа-Битце и Лужниках):</strong>`,
                  }}
                />
                <Typography
                  variant="body"
                  color={"white"}
                  sx={{ whiteSpace: "pre-line" }}
                >
                  {`7 февраля: с 15:00 до 20:00
                        8 февраля: с 10:00 до 20:00
                        ул. Лужники д. 24, ориентир: Входной павильон 1Е (Лужники, 24с22)`}
                </Typography>
                <Typography
                  variant="body"
                  color={"white"}
                  sx={{
                    whiteSpace: "pre-line",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `<strong>(Для бегущих в Лужниках):</strong>
                    9 февраля 2024 г. (в день старта) с 9:00 до 13:15 выдача стартовых комплектов будет проводиться по адресу: 
                    <div style="margin-top:5px">ул. Лужники, д. 24, ориентир: Входной павильон 1Е (Лужники, 24с22), лыжно-биатлонная трасса в шатре «Регистрация»</div>`
                  }}
                />
                <Typography
                  variant="body"
                  color={"white"}
                  sx={{
                    whiteSpace: "pre-line",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `<strong>(Для бегущих в Альфа-Битце):</strong>
                    10 февраля 2024 года (в день старта) с 8:00 до 13:15 выдача стартовых комплектов будет проводиться на территории зоны отдыха «Альфа-Битца» в помещении «Регистрация»`
                  }}
                />
              </Stack>
              <Stack sx={{ width: matches ? "50%" : "100%" }} spacing={3}>
                <Typography
                  variant="body"
                  color={"white"}
                  sx={{
                    whiteSpace: "pre-line",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `Время и место получения:
                    <strong>(Для бегущих в Вороново):</strong>`,
                  }}
                />

                <Typography
                  variant="body"
                  color={"white"}
                  sx={{ whiteSpace: "pre-line" }}>
                  10 февраля 2024 года (в день старта) с 09:30 до 10:45  выдача стартовых комплектов будет проводиться по адресу: г. Москва, п. Вороновское, пос. ЛМС, лыжная трасса
                </Typography>
              </Stack>
            </Stack>
            {/* <Stack sx={{ width: "100%" }} direction={"row"}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line" }}
                dangerouslySetInnerHTML={{
                  __html: `<strong>9 февраля 2024 года</strong> (в день старта) с 9:00 до 13:15 выдача стартовых комплектов будет проводиться по адресу: ул. Лужники, д. 24, Биатлонная трасса в шатре «Регистрация»`,
                }}
              ></Typography>
            </Stack>
            <Stack sx={{ width: "100%" }} direction={"row"}>
              <Typography
                variant="body"
                color={"white"}
                sx={{ whiteSpace: "pre-line" }}
                dangerouslySetInnerHTML={{
                  __html: `<strong>10 февраля 2024 года</strong> (в день старта) с 8:00 до 12:30 выдача стартовых комплектов будет проводиться на территории зоны отдыха «Альфа-Битца» в помещении  «Регистрация»`,
                }}
              ></Typography>
            </Stack> */}
          </Stack>
        ) : (
          <Stack sx={{ width: "100%" }} direction={"column"} spacing={5}>
            <Stack sx={{ width: "100%" }} direction={matches ? "row" : "column"} spacing={6}>
              <Stack sx={{ width: matches ? "50%" : "100%", mb: "90px" }} spacing={3}>
                <Typography
                  variant="body"
                  color={"white"}
                  sx={{
                    whiteSpace: "pre-line",
                  }}
                >
                  Время и место получения:
                </Typography>
                <Typography
                  variant="body"
                  color={"white"}
                  sx={{ whiteSpace: "pre-line" }}
                >
                  {`7 февраля: с 15:00 до 20:00
                    8 февраля: с 10:00 до 20:00`}
                </Typography>
                <Typography
                  variant="body"
                  color={"white"}
                  sx={{ whiteSpace: "pre-line" }}
                >
                  СК Лужники, Москва, ул.Лужники, 24, стр. 1
                </Typography>
                <Typography
                  variant="body"
                  color={"white"}
                  sx={{ whiteSpace: "pre-line" }}
                >
                  {`11 февраля 2024 года (в день старта) с 8:00 до 10:30 
                  выдача стартовых комплектов будет проводиться на 
                  территории зоны отдыха «Альфа-Битца»`}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        )}
      </Box>
    </Stack >
  );
};

export default Packets;
