import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
    isMobile: boolean;
    bg: string;
}

const SkiPageFooter = ({ isMobile, bg }: Props) => {
    return (
        <Stack
            direction={"column"}
            sx={{ width: "100%" }}
            spacing={isMobile ? "40px" : 2}
        >
            <Header bg={bg} text={"МЕСТА ПРОВЕДЕНИЯ"} />
            <Stack direction={"column"} spacing={"10px"}>
                <Typography
                    variant="body"
                    color={"white"}
                    sx={{
                        fontFamily: "Gotham Pro Bold",
                        whiteSpace: "pre-line",
                        fontSize: "24px",
                    }}
                >
                    {`9 февраля 
                    Школьный день`}
                </Typography>
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
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A71b804130a0cef1bd2bfdc4eabbf1426bafaf8bac5cda6a9fd90e5990589c0dc&amp;source=constructor"
                            height="100%"
                            width={"100%"}
                            frameBorder="0"
                        ></iframe>
                    </Box>

                    <Stack
                        sx={{
                            width: isMobile ? "35%" : "100%",
                            height: "100%",
                        }}
                        spacing={2}
                        direction={"column"}
                    >
                        <Typography
                            variant="footer"
                            sx={{ whiteSpace: "pre-line", fontFamily: "Gotham Pro Light" }}
                        >
                            {`ул. Лужники д.24 с.7`}
                        </Typography>

                        <Typography
                            variant="footer"
                            sx={{ whiteSpace: "pre-line", fontWeight: 700 }}
                        >
                            {`Как добраться?`}
                        </Typography>

                        <Typography
                            variant="footer"
                            sx={{ whiteSpace: "pre-line", fontFamily: "Gotham Pro Light", lineHeight: "21px" }}
                        >
                            {`От станции метро «Спортивная» через Центральное КПП (Павильон «1Е»)

                            От станции МЦК «Лужники» через Центральное КПП (Павильон «1Е»)

                            От станции «Воробьевы горы» через КПП2`}
                        </Typography>
                        <Stack>
                            <Typography
                                variant="footer"
                                sx={{
                                    textDecoration: "underline",
                                    fontFamily: "Gotham Pro Light",
                                    textDecorationThickness: "1px"
                                }}
                            >
                                Координаты
                            </Typography>
                            <Typography
                                variant="footer"
                                sx={{ whiteSpace: "pre-line", fontFamily: "Gotham Pro Light" }}
                            >
                                {`Долгота,        широта: 
                  55.715865, 37.560853`}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction={"column"} spacing={"10px"}>
                <Typography
                    variant="body"
                    color={"white"}
                    sx={{
                        fontFamily: "Gotham Pro Bold",
                        whiteSpace: "pre-line",
                        fontSize: "24px",
                    }}
                >
                    {`10 февраля
                    Основной старт`}
                </Typography>
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
                        }}
                        spacing={2}
                        direction={"column"}
                    >
                        <Typography
                            variant="footer"
                            sx={{ whiteSpace: "pre-line", fontFamily: "Gotham Pro Light" }}
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
                            <Typography
                                variant="footer"
                                sx={{
                                    textDecoration: "underline",
                                    fontFamily: "Gotham Pro Light",
                                    textDecorationThickness: "1px"
                                }}
                            >
                                На машине
                            </Typography>
                            <Typography
                                variant="footer"
                                sx={{ whiteSpace: "pre-line", fontFamily: "Gotham Pro Light", lineHeight: "21px" }}
                            >
                                {`Адрес парковки:
    
                    проезд Карамзина, 17А
                    Координаты:
                    55.588664, 37.545536
                  `}
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography
                                variant="footer"
                                sx={{
                                    textDecoration: "underline",
                                    fontFamily: "Gotham Pro Light",
                                    textDecorationThickness: "1px"
                                }}
                            >
                                Пешком
                            </Typography>
                            <Typography
                                variant="footer"
                                sx={{ whiteSpace: "pre-line", fontFamily: "Gotham Pro Light", lineHeight: "21px" }}
                            >
                                {`От ст.м. Ясенево, первый вагон из 
                  центра, выход номер 3, из 
                  стеклянных дверей налево, и сразу 
                  налево. Автобус 165 до ост. «Зона 
                  отдыха Битца» (10 минут). Далее 
                  пешком 200 м до старта.
    
                  От ст. м. Бульвар Дмитрия Донского 
                  выход N6, авт 967 до ост. «Зона 
                  отдыха Битца» (10 минут). Далее 
                  пешком 200 м до старта.`}
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography
                                variant="footer"
                                sx={{
                                    textDecoration: "underline",
                                    fontFamily: "Gotham Pro Light",
                                    textDecorationThickness: "1px"
                                }}
                            >
                                Координаты
                            </Typography>
                            <Typography
                                variant="footer"
                                sx={{ whiteSpace: "pre-line", fontFamily: "Gotham Pro Light" }}
                            >
                                {`Долгота,        широта: 
                  55.585360, 37.545857`}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default SkiPageFooter