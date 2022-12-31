import React from "react";
import { Box, Container, Stack } from "@mui/system";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Information from "../components/information-block";
import Requirements from "../components/requirements-block";
import Documents from "../components/documents-block";
import ProgramMarathon from "../components/program-block-marathon";
import { NextPage } from "next";
import CustomBtn from "../components/ui/CustomBtn";
import { useRouter } from "next/router";
import Footer from "../components/footer-block";

const MarathonPage: NextPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const router = useRouter();

  return (
    <Box
      height="100%"
      sx={{
        backgroundColor: "#E6342D",
        overflowX: "hidden",
      }}
    >
      <Stack
        sx={{
          px: matches ? "73px" : "25px",
          pt: "19px",
          mb: matches ? "45px" : "51px",
        }}
      >
        <Box
          component={"img"}
          src={"/images/desktop/logo/arrow.svg"}
          sx={{ width: "36px", cursor: "pointer" }}
          onClick={() => router.push("/preview")}
        />
      </Stack>
      <Container disableGutters maxWidth="xl">
        <Stack direction={"column"}>
          {matches ? (
            <Stack direction={"row"} alignItems={"flex-end"}>
              <Stack direction={"column"} spacing={"57px"}>
                <Stack
                  direction={"row"}
                  px={"30px"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box
                    component={"img"}
                    src={"/images/desktop/logo/ski-logo.svg"}
                    sx={{
                      maxWidth: 311,
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
                  }}
                >
                  <Stack
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
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
                      {`Новый марафон в серии Russialoppet. Концепция и положение мероприятия 
                        находятся в разработке. Место проведения - Битцевский парк. 
                        Организатор - Департамент спорта г. Москвы.

                        Московский марафон войдет в календари Суперкубка, Кубка Команд и 
                        проект "Лаки Лузер", также будут результат будет включен в рейтинг 
                        финишеров.
                      `}
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
              <Box
                component={"img"}
                src={"/images/desktop/marathon-page/ski-man.svg"}
                alt="marathonSkiMan"
              />
            </Stack>
          ) : (
            <>
              <Stack direction={"column"} spacing={"80px"}>
                <Stack
                  direction={"row"}
                  px={"30px"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box
                    component={"img"}
                    src={"/images/desktop/logo/ski-logo.svg"}
                    sx={{
                      maxWidth: 100,
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
                      "url(/images/mobile/marathon-page/desc-bg.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    py: "40px",
                  }}
                >
                  <Stack
                    sx={{
                      ml: "31px",
                      justifyContent: "center",
                      alignItems: "start",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        textOverflow: "ellipsis",
                        whiteSpace: "pre-line",
                        overflow: "hidden",
                        fontWeight: 400,
                        fontSize: "20px",
                      }}
                      color={"#870000"}
                      variant={"desc"}
                    >
                      {`Новый марафон в серии 
                      Russialoppet. Концепция и 
                      положение мероприятия 
                      находятся в разработке. 
                      Место проведения - 
                      Битцевский парк. 
                      Организатор - Департамент 
                      спорта г. Москвы.

                      Московский марафон войдет 
                      в календари Суперкубка,
                      Кубка Команд и проект 
                      "Лаки Лузер", также будут 
                      результат будет включен в 
                      рейтинг финишеров.
                    `}
                    </Typography>
                  </Stack>
                  <Box
                    component={"img"}
                    src={"/images/desktop/marathon-page/ski-man.svg"}
                    sx={{
                      minWidth: 185,
                      height: 214,
                      position: "absolute",
                      right: "-130px",
                      top: "-75px",
                    }}
                    alt="marathonSkiMan"
                  />
                </Box>
              </Stack>
            </>
          )}

          {/* ------------------------------------- */}

          <Stack
            sx={{
              width: "100%",
              alignItems: "center",
              mt: matches ? "23px" : "30px",
              mb: matches ? "112px" : "46px",
            }}
          >
            <CustomBtn
              bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
              text={"РЕГИСТРАЦИЯ"}
              height={matches ? "60px" : "48px"}
              width={matches ? "468px" : "320px"}
              lineHeight={"30px"}
              fontSize={matches ? "32px" : "24px"}
              onClick={() => {
                window
                  .open(
                    "https://russialoppet.ru/registration/mm2023/",
                    "_blank"
                  )
                  ?.focus();
              }}
            />
          </Stack>

          <Box
            sx={{
              backgroundImage: "url(/images/desktop/marathon-page/center.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right 35% bottom 45%;",
              minHeight: 500,
            }}
          />

          <Stack
            direction={"column"}
            sx={{
              px: "16px",
              mt: matches ? "80px" : "46px",
              mb: matches ? "114px" : "53px",
            }}
            spacing={matches ? 10 : 2}
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
              isMobile={matches}
            />
            <ProgramMarathon
              bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
              isMobile={matches}
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
              text2={"Согласие на обработку персональных данных"}
              isMobile={matches}
            />
            <Footer
              bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
              isMobile={matches}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MarathonPage;
