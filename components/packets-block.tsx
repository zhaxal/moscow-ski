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
          <>
            <Stack sx={{ width: "100%" }} direction={"column"} spacing={5}>
              <Stack sx={{ width: "100%" }} direction={matches ? "row" : "column"} spacing={6}>
                <Stack sx={{ width: matches ? "50%" : "100%" }} spacing={3}>
                  <Typography
                    variant="body"
                    color={"white"}
                    sx={{
                      whiteSpace: "pre-line",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: `<strong>Время и место получения:</spring>`,
                    }}
                  />
                  <Typography
                    variant="body"
                    color={"white"}
                    sx={{ whiteSpace: "pre-line" }}
                  >
                    {`7 февраля: с 15.00 до 20.00
                        8 февраля: с 10.00 до 20.00`}
                  </Typography>
                  <Typography
                    variant="body"
                    color={"white"}
                    sx={{ whiteSpace: "pre-line" }}
                  >
                    г. Москва, ул. Лужники д. 24, Биатлонная трасса
                  </Typography>
                </Stack>
                <Stack sx={{ width: matches ? "50%" : "100%" }} spacing={1}>
                  <Typography
                    variant="body"
                    color={"white"}
                    sx={{
                      whiteSpace: "pre-line",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: `<strong>Как добраться:</spring>`,
                    }}
                  />

                  <Typography
                    variant="body"
                    color={"white"}
                    sx={{ whiteSpace: "pre-line" }}
                  >
                    {`От станции метро «Спортивная» через Центральное КПП 
                (Павильон «1Е»)`}
                  </Typography>
                  <Typography
                    variant="body"
                    color={"white"}
                    sx={{ whiteSpace: "pre-line" }}
                  >
                    {`От станции МЦК «Лужники» через Центральное КПП 
                (Павильон «1Е»)`}
                  </Typography>
                  <Typography
                    variant="body"
                    color={"white"}
                    sx={{ whiteSpace: "pre-line" }}
                  >
                    {`От станции «Воробьевы горы» через КПП2`}
                  </Typography>
                </Stack>
              </Stack>
              <Stack sx={{ width: "100%" }} direction={"row"}>
                <Typography
                  variant="body"
                  color={"white"}
                  sx={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: `<strong>10 февраля 2024 года</strong> (в день старта) с 8:00 до 13:15 выдача стартовых комплектов будет проводиться на территории зоны отдыха «Альфа-Битца» в помещении  «Регистрация»`,
                  }}
                ></Typography>
              </Stack>
            </Stack>
          </>
        ) : (
          <Stack sx={{ width: "100%" }} spacing={3}>
            <Typography
              variant="body"
              color={"white"}
              sx={{
                whiteSpace: "pre-line",
                fontFamily: "Gotham Pro Regular",
                fontWeight: 700,
                textDecoration: "underline",
                textDecorationSkipInk: "none",
                textDecorationThickness: "1px",
              }}
            >
              Время и место получения:
            </Typography>
            <Stack spacing={"5px"}>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  fontWeight: 700,
                  fontFamily: "Gotham Pro Regular",
                }}
              >
                {`08 февраля с 14:00 до 20:00
                  09 февраля с 10:00 до 20:00`}
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  fontWeight: 400,
                  fontFamily: "Gotham Pro Light",
                }}
              >
                СК Лужники, Москва, ул. Лужники, 24, стр. 1
              </Typography>
            </Stack>
            <Stack spacing={"5px"}>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  fontWeight: 700,
                  fontFamily: "Gotham Pro Regular",
                }}
              >
                12 февраля с 08:00
              </Typography>
              <Typography
                variant="body"
                color={"white"}
                sx={{
                  whiteSpace: "pre-line",
                  fontWeight: 400,
                  fontFamily: "Gotham Pro Light",
                }}
              >
                СК«Альфа Битца», Москва, ЮЗАО, 36й км МКАД, зона отдыха
                «Битца»
              </Typography>
            </Stack>
          </Stack>
        )}
      </Box>
    </Stack>
  );
};

export default Packets;
