import React from "react";
import { Box, Container, Stack } from "@mui/system";
import { Typography } from "@mui/material";
import Information from "../components/information-block";
import Requirements from "../components/requirements-block";
import Documents from "../components/documents-block";
import ProgramMarathon from "../components/program-block-marathon";
import { NextPage } from "next";

const MarathonPage: NextPage = () => {
  return (
    <Box height="100%" width={"100%"} sx={{ backgroundColor: "#E6342D" }}>
      <Container disableGutters maxWidth="xl">
        <Stack direction={"column"} pt={"125px"}>
          <Stack
            direction={"row"}
            alignItems={"flex-end"}
            spacing={"-35px"}
            sx={{ mb: "193px" }}
          >
            <Stack direction={"column"} spacing={"57px"}>
              <Stack
                direction={"row"}
                px={"30px"}
                justifyContent={"space-between"}
              >
                <Box
                  component={"img"}
                  src={"/images/desktop/logo/ski-logo.svg"}
                  sx={{
                    maxWidth: 243,
                  }}
                  alt="skiLogo"
                />
                <Box
                  component={"img"}
                  src={"/images/desktop/logo/mosssport-logo.svg"}
                  sx={{
                    maxWidth: 186,
                  }}
                  alt="mossportLogo"
                />
              </Stack>

              <Box
                sx={{
                  backgroundImage:
                    "url(/images/desktop/marathon-page/marathon-desc.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  minWidth: 1090,
                  height: 300,
                  pb: "50px",
                  pos: "relative",
                }}
              >
                <Stack
                  sx={{
                    pl: "30px",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100%",
                    pt: "30px",
                  }}
                >
                  <Typography
                    sx={{
                      textOverflow: "ellipsis",
                      whiteSpace: "pre-line",
                      overflow: "hidden",
                    }}
                    color={"#870000"}
                    variant={"desc"}
                  >
                    Новый марафон в серии Russialoppet. Концепция и положение
                    мероприятия{"\n"} находятся в разработке. Место проведения -
                    Битцевский парк.
                    {"\n"}
                    Организатор - Департамент спорта г. Москвы.
                    {"\n"}
                    {"\n"}
                    Московский марафон войдет в календари Суперкубка, Кубка
                    Команд и {"\n"}
                    проект "Лаки Лузер", также будут результат будет включен в
                    рейтинг {"\n"}
                    финишеров.
                  </Typography>
                </Stack>
              </Box>
            </Stack>
            <Box
              component={"img"}
              src={"/images/desktop/marathon-page/ski-man.svg"}
              sx={{
                minWidth: 390,
              }}
              alt="marathonSkiMan"
            />
          </Stack>

          {/* ------------------------------------- */}

          <Box
            sx={{
              backgroundImage: "url(/images/desktop/marathon-page/center.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: 500,
            }}
          />

          <Stack
            direction={"column"}
            sx={{ px: "16px", mt: "80px" }}
            spacing={10}
          >
            <Information
              text={`
              Соревнования проводятся в соответствии с Единым 
              календарным планом физкультурных, спортивных и 
              массовых спортивно-зрелищных мероприятий города 
              Москвы на 2023 год, утвержденным Департаментом 
              спорта города Москвы (далее – Москомспорт), №66313, 
              утвержденным Департаментом спорта города Москвы. 
              Соревнования проводятся в целях:
              - - популяризация здорового образа жизни;
              - привлечение населения к регулярным занятиям лыжным спортом;
              - создание условий для занятий лыжным спортом лиц с ограниченными возможностями;
              - широкий обмен опытом между физкультурными, спортивными организациями, тренерами и спортсменами;
              - сохранение спортивных традиций региона;
              - укрепление дружественных международных спортивных связей.`}
              bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
            />
            <ProgramMarathon
              bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
            />
            <Requirements
              text1={`Соревнования проводятся в соответствии с правилами 
                      лыжных гонок. Стиль свободный.

                      К участию в соревновании допускаются спортсмены-
                      любители и спортсмены субъектов Российской Федерации, 
                      спортсмены ближнего и дальнего зарубежья мужского и 
                      женского пола возраста 17 лет и старше, имеющие 
                      медицинский допуск к участию в соревнованиях. Возраст 
                      участников определяется по дате рождения (полных лет) по 
                      состоянию на день проведения соревнований.
                      
                      Участники, не прошедшие контрольные пункты по 
                      дистанции, будут дисквалифицированы, их результат 
                      аннулируется. Победители определяются по наименьшему 
                      количеству времени, затраченному на прохождение 
                      дистанции.
                    `}
              text2={`Всем участникам предоставляют на комиссию по допуску 
                      следующие документы:
              
                      медицинский допуск, подтверждающий состояние 
                      здоровья и возможность допуска к соревнованию, 
                      согласно требованиям приказа Минздрава России от 23 
                      октября 2020 г. № 1144н
              
                      паспорт или документ, подтверждающий личность 
                      зарегистрированного участника
              
                      договор о страховании (оригинал) жизни и здоровья от 
                      несчастных случаев
                    `}
              bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
            />
            <Documents
              bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
              text1={"ПОЛОЖЕНИЕ"}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MarathonPage;
