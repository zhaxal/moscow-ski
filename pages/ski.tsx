import { NextPage } from "next";
import React from "react";
import { Box, Container, Stack } from "@mui/system";
import { Typography, useMediaQuery } from "@mui/material";
import Information from "../components/information-block";
import Requirements from "../components/requirements-block";
import Documents from "../components/documents-block";
import ProgramSki from "../components/program-block-ski";
import { useTheme } from "@mui/material/styles";
import CustomBtn from "../components/ui/CustomBtn";
import { useRouter } from "next/router";
import Footer from "../components/footer-block";

const SkiPage: NextPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();

  return (
    <Box
      height="100%"
      sx={{
        backgroundColor: "#0082C2",
        overflowX: "hidden",
      }}
    >
      <Stack
        sx={{
          px: matches ? "73px" : "50px",
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
            <Stack
              direction={"row-reverse"}
              alignItems={"flex-end"}
              spacing={"-35px"}
            >
              <Stack direction={"column"} spacing={"57px"}>
                <Stack
                  direction={"row-reverse"}
                  px={"30px"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box
                    component={"img"}
                    src={"/images/desktop/logo/lyzhnya-logo.svg"}
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
                      "url(/images/desktop/ski-page/desc-bg.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    minWidth: 1090,
                    height: 300,
                    pb: "50px",
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
                      color={"#005A87"}
                      variant={"desc"}
                    >
                      {`«Лыжня России» - самое массовое спортивное мероприятие в России, 
                      участниками которого могут стать не только спортсмены-
                      профессионалы, но и любители. 

                      С 1982 года, на протяжении вот уже 41 года, на старт по всей стране 
                      выходят сотни тысяч единомышленников, кто неравнодушен к лыжам, 
                      здоровому и активному отдыху.
                    `}
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
              <Box
                component={"img"}
                src={"/images/desktop/ski-page/ski-man.svg"}
                sx={{
                  minWidth: 390,
                  height: 452,
                }}
                alt="marathonSkiMan"
              />
            </Stack>
          ) : (
            <>
              <Stack direction={"column"} spacing={"80px"}>
                <Stack
                  direction={"row-reverse"}
                  px={"30px"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box
                    component={"img"}
                    src={"/images/desktop/logo/lyzhnya-logo.svg"}
                    sx={{
                      maxWidth: 156,
                    }}
                    alt="skiLogo"
                  />
                  <Box
                    component={"img"}
                    src={"/images/mobile/icon/mossport-snow.svg"}
                    sx={{
                      maxWidth: 186,
                    }}
                    alt="mossportLogo"
                  />
                </Stack>
                <Box
                  sx={{
                    backgroundImage: "url(/images/mobile/ski-page/desc-bg.png)",
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
                      ml: "83px",
                      justifyContent: "center",
                      alignItems: "end",
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
                      color={"#005A87"}
                      variant={"desc"}
                    >
                      {`«Лыжня России» - самое 
                      массовое спортивное 
                      мероприятие в России, 
                      участниками которого могут 
                      стать не только спортсмены-
                      профессионалы, но 
                      и любители. 

                      С 1982 года, на протяжении 
                      вот уже 41 года, на старт по 
                      всей стране 
                      выходят сотни тысяч единомышленников, кто 
                      неравнодушен к лыжам, 
                      здоровому и активному 
                      отдыху.
                    `}
                    </Typography>
                  </Stack>
                  <Box
                    component={"img"}
                    src={"/images/desktop/ski-page/ski-man.svg"}
                    sx={{
                      minWidth: 185,
                      height: 214,
                      position: "absolute",
                      left: "-125px",
                      top: "-75px",
                    }}
                    alt="marathonSkiMan"
                  />
                </Box>
              </Stack>
            </>
          )}

          <Stack
            sx={{
              width: "100%",
              alignItems: "center",
              mt: matches ? "23px" : "30px",
              mb: matches ? "112px" : "46px",
            }}
          >
            <CustomBtn
              bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
              text={"РЕГИСТРАЦИЯ"}
              height={matches ? "60px" : "48px"}
              width={matches ? "468px" : "320px"}
              lineHeight={"30px"}
              fontSize={matches ? "32px" : "24px"}
              onClick={() => {
                window
                  .open("https://reg.place/events/lyzhnya-moskvy", "_blank")
                  ?.focus();
              }}
            />
          </Stack>

          <Box
            sx={{
              backgroundImage: "url(/images/desktop/ski-page/center.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right",
              minHeight: matches ? 480 : 255,
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
              text={`Соревнования проводятся в соответствии с единым 
              Календарным планом физкультурных и спортивных 
              мероприятий на 2023 год (реестровый № 39395), 
              утвержденным Департаментом спорта города Москвы. 
              (Распоряжение
                  от 28 декабря 2021 года № 368).
                  Соревнования проводятся в целях: 
                  - привлечения жителей г. Москвы к занятиям лыжным 
                  спортом как одного из доступных видов спорта и отдыха;
                  - пропаганды физической культуры и спорта 
                  среди населения г.
                  Москвы;
                  - выявления сильнейших спортсменов.`}
              bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
              isMobile={matches}
            />
            <ProgramSki
              bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
            />
            <Requirements
              text1={`
                  Соревнования проводятся в соответствии с правилами 
                  лыжных гонок. Стиль свободный.
                  К соревнованиям допускаются все желающие от 9 лет 
                  жители
                  Северо-Восточного административного округа, имеющие медицинский допуск к участию в соревнованиях. Возраст участников определяется по дате рождения (полных лет) по состоянию на день проведения соревнований.
                  Участники, не прошедшие контрольные пункты по дистанции, будут дисквалифицированы, их результат аннулируется. Победители определяются по наименьшему количеству времени, затраченному на прохождение дистанции.
                    `}
              text2={`
              Всем участникам необходимо при себе иметь:
              
              - индивидуальный (или коллективный) медицинский допуск, подтверждающий состояние здоровья и возможность допуска к соревнованию, согласно требованиям приказа Минздрава России от 23 октября 2020 г. № 1144н
              
              - согласие на обработку персональных данных спортсмена
              в соответствии с Федеральным законом от 27 июля 2006 г. № 125-ФЗ
              
              - полис обязательного медицинского страхования (ОМС) или полис добровольного медицинского страхования (ДМС). Иные документы неустановленной формы к рассмотрению не принимаются.`}
              bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
            />
            <Documents
              bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
              text1={"ПОЛОЖЕНИЕ"}
              text2={"Согласие на обработку персональных данных"}
              isMobile={matches}
            />
            <Footer
              bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
              isMobile={matches}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default SkiPage;
