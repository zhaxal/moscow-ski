import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";
import ProgramBlock from "./ui/ProgramBlock";
import CustomBtn from "./ui/CustomBtn";

interface Props {
  bg: string;
  isMobile: boolean;
}

const programs = [
  {
    "time": "11 февраля",
    "text": "",
    "isBold": true
  },
  {
    "time": "08:00 – 10:30",
    "text": `Регистрация участников Регистрация участников, выдача стартовых номеров 
    
    СК«Альфа Битца», Москва, ЮЗАО, 36й км 
    МКАД, зона отдыха «Битца»`,
    "isBold": false
  },
  {
    "time": "11:00",
    "text": "Старт",
    "isBold": true
  },
  {
    "time": "11:00",
    "text": "Марафон 51 км",
    "isBold": false
  },
  {
    "time": "11:00",
    "text": "Спутник 17 км(при наличии слотов)",
    "isBold": false
  },
  {
    "time": "14:00",
    "text": "Закрытие выхода на 3 круг для дистанции 51км",
    "isBold": false
  },
  {
    "time": "13:00",
    "text": "Церемония награждения",
    "isBold": true
  },
  {
    "time": "13:00",
    "text": "Награждение победителей и призеров дистанции 17 км",
    "isBold": false
  },
  {
    "time": "14:30",
    "text": "Награждение победителей и призеров марафона 51 км и возрастных групп",
    "isBold": false
  },
];

const ProgramMarathon = ({ bg, isMobile }: Props) => {
  return (
    <Stack direction={"column"} sx={{ width: "100%" }} spacing={2}>
      <Header bg={bg} text={"ПРОГРАММА"} />
      <Box sx={{ width: "100%", px: isMobile ? "16px" : "0px" }}>
        <Stack direction={"column"} width={isMobile ? "50%" : "100%"} spacing={"30px"}>
          {programs.map((program, index) => {
            return (
              <Stack key={index} direction={"column"} spacing={"7px"}>
                <ProgramBlock textAlign="center" timeWidth="60%" width="40%" key={index} bg={bg} isBold={program.isBold} isMobile={isMobile} time={program.time} text={program.text} />
              </Stack>
            );
          })}
        </Stack>
      </Box>
      <CustomBtn
        bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
        text={"РЕЗУЛЬТАТЫ"}
        height={isMobile ? "60px" : "48px"}
        width={isMobile ? "468px" : "320px"}
        lineHeight={"30px"}
        fontSize={isMobile ? "21px" : "14px"}
        onClick={() => {
          window
            .open(
              "https://results.zone/lyzhnya-rossii-2024",
              "_blank"
            )
            ?.focus();
        }}
      />
      <CustomBtn
        bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
        text={"ФОТО"}
        height={isMobile ? "60px" : "48px"}
        width={isMobile ? "468px" : "320px"}
        lineHeight={"30px"}
        fontSize={isMobile ? "21px" : "14px"}
        onClick={() => {
          window
            .open(
              "https://disk.yandex.ru/d/af8xfOn0Hx0rYw",
              "_blank"
            )
            ?.focus();
        }}
      />
    </Stack>
  );
};

export default ProgramMarathon;
