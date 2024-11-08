import React from "react";
import { Box, Container, Stack } from "@mui/system";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Information from "../components/information-block";
import Requirements from "../components/requirements-block";
import ProgramMarathon from "../components/program-block-marathon";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Footer from "../components/footer-block";
import Packets from "../components/packets-block";
import PlayerBlock from "../components/player-block";

const MarathonPage: NextPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const router = useRouter();

  const commonBg = "linear-gradient(90deg, #880101 0%, #EC0000 100%)";
  const commonTextStyle = {
    textOverflow: "ellipsis",
    whiteSpace: "pre-line",
    overflow: "hidden",
  };
  const commonTypographyStyle = {
    fontSize: "36px",
    lineHeight: "36px",
    color: "white",
  };

  return (
    <Box height="100%" sx={{ backgroundColor: "#E6342D", overflowX: "hidden" }}>
      <Stack sx={{ px: matches ? "73px" : "25px", pt: "19px", mb: matches ? "45px" : "51px" }}>
        <Box
          component="img"
          alt="arrowIcon"
          src="/images/desktop/logo/arrow.svg"
          sx={{ width: "36px", cursor: "pointer" }}
          onClick={() => router.push("/")}
        />
      </Stack>
      <Container disableGutters maxWidth="xl">
        <Stack direction="column">
          {matches ? (
            <Stack direction="row" alignItems="flex-end">
              <Stack direction="column">
                <Stack direction="row" px="100px" alignItems="center" spacing="58px">
                  <Box
                    component="img"
                    src="/images/desktop/logo/ski-logo.svg"
                    sx={{ maxWidth: 156 }}
                    alt="skiLogo"
                  />
                  <Box
                    component="img"
                    src="/images/desktop/logo/logo-si.svg"
                    sx={{ maxWidth: 136, cursor: "pointer" }}
                    alt="logo-si"
                    onClick={() => window.open("https://www.sport-images.ru/", "_blank")?.focus()}
                  />
                </Stack>
                <Stack sx={{ my: "20px", width: "100%", alignItems: "center" }}>
                  <Typography variant="heading" sx={commonTypographyStyle}>
                    11 ФЕВРАЛЯ 2024
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    backgroundImage: "url(/images/desktop/marathon-page/marathon-desc.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    minWidth: 1090,
                    height: 300,
                  }}
                >
                  <Stack sx={{ alignItems: "flex-start", justifyContent: "center", height: "100%", px: "57px" }}>
                    <Typography sx={commonTextStyle} color="#870000" variant="desc">
                      Второй московский лыжный марафон
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
              <Box component="img" src="/images/desktop/marathon-page/ski-man.svg" alt="marathonSkiMan" />
            </Stack>
          ) : (
            <Stack direction="column">
              <Stack direction="row" alignItems="center" justifyContent="space-around" sx={{ mb: 5 }}>
                <Box
                  component="img"
                  src="/images/desktop/logo/ski-logo.svg"
                  sx={{ maxWidth: 100 }}
                  alt="skiLogo"
                />
                <Box
                  component="img"
                  src="/images/desktop/logo/logo-si.svg"
                  sx={{ maxWidth: 88, cursor: "pointer" }}
                  alt="logo-si"
                  onClick={() => window.open("https://www.sport-images.ru/", "_blank")?.focus()}
                />
              </Stack>
              <Stack sx={{ my: "20px", width: "100%", alignItems: "center" }}>
                <Typography variant="heading" sx={commonTypographyStyle}>
                  11 ФЕВРАЛЯ 2024
                </Typography>
              </Stack>
              <Box
                sx={{
                  backgroundImage: "url(/images/mobile/marathon-page/desc-bg.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  py: "70px",
                }}
              >
                <Stack sx={{ justifyContent: "center", alignItems: "start", height: "100%", width: "90%" }}>
                  <Typography sx={{ ...commonTextStyle, fontWeight: 400, fontSize: "20px", px: "20px" }} color="#870000" variant="desc">
                    Второй московский лыжный марафон
                  </Typography>
                </Stack>
                <Box
                  component="img"
                  src="/images/desktop/marathon-page/ski-man.svg"
                  sx={{ minWidth: 185, height: 214, position: "absolute", right: "-130px", top: "-75px" }}
                  alt="marathonSkiMan"
                />
              </Box>
            </Stack>
          )}

          <Stack sx={{ width: "100%", alignItems: "center", mt: matches ? "23px" : "30px", mb: matches ? "112px" : "46px" }}>
            {/* <CustomBtn
              bg="linear-gradient(90deg, #880101 0%, #EC0000 100%)"
              text="РЕГИСТРАЦИЯ"
              height={matches ? "60px" : "48px"}
              width={matches ? "468px" : "320px"}
              lineHeight="30px"
              fontSize={matches ? "21px" : "14px"}
              onClick={() => window.open("https://russialoppet.ru/events/moscow-2024.html", "_blank")?.focus()}
            /> */}
          </Stack>

          <Box
            sx={{
              backgroundImage: "url(/images/desktop/marathon-page/center.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right 35% bottom 45%",
              minHeight: 500,
            }}
          />

          <Stack direction="column" sx={{ px: "16px", mt: matches ? "80px" : "46px", mb: matches ? "114px" : "53px" }} spacing={matches ? "20px" : 2}>
            <PlayerBlock bg={commonBg} src1="https://vk.com/video_ext.php?oid=-66385073&id=456239548" src2="https://www.youtube.com/embed/2mAl25PvpVE" isMobile={matches} />
            <Information
              text={`«Московский Лыжный марафон» — это новое любительское соревнование в городском спортивном календаре. 

              11 февраля 2024 года гонка примет большое количество фанатов лыжного спорта России и станет ярким событием Московского региона.
              
              Московский лыжный марафон входит в кубоковые зачеты Russialoppet: Суперкубок лыжных марафонов, Большой и Малый Кубок Команд и лотерею «Лаки Лузер», также результат будет учтен в рейтинге финишёров, паспорте и мастере марафонов русской серии длинных гонок.`}
              bg={commonBg}
              isMobile={matches}
            />
            <ProgramMarathon bg={commonBg} isMobile={matches} />
            <Requirements
              text1={`Соревнования проводятся в соответствии с правилами лыжных гонок. Стиль свободный.

              К участию в соревновании допускаются лыжники-любители и спортсмены субъектов Российской Федерации, ближнего и дальнего зарубежья в возрасте от 17 лет и старше, имеющие медицинский допуск к участию в соревнованиях. Возраст участников определяется по дате рождения (полных лет) по состоянию на день проведения соревнований. Участники, не прошедшие контрольные пункты по дистанции, будут дисквалифицированы, их результат аннулируется.              
              
              Победители определяются по наименьшему количеству времени, затраченному на прохождение дистанции.`}
              text2={`Все участники предоставляют на комиссию по допуску следующие документы: 

              &mdash;&nbsp;медицинский допуск, подтверждающий состояние здоровья и возможность допуска к соревнованию,согласно требованиям приказа Минздрава России от 23 октября 2020 г. № 1144н
              
              &mdash;&nbsp;паспорт или документ, подтверждающий личность зарегистрированного участника
              
              &mdash;&nbsp;договор о страховании (оригинал) жизни и здоровья от несчастных случаев`}
              bg={commonBg}
            />
            <Packets matches={matches} bg={commonBg} isSki={false} />
            {/* <Documents
              bg={commonBg}
              text1="ПОЛОЖЕНИЕ"
              file1="Лыжный марафон_полож_к.pdf"
              isMobile={matches}
              height="116px"
            /> */}
            <Stack sx={{ width: "100%", alignItems: "center", py: matches ? "30px" : "30px" }}>
              {/* <CustomBtn
                bg={commonBg}
                text="РЕГИСТРАЦИЯ"
                height={matches ? "60px" : "48px"}
                width={matches ? "468px" : "320px"}
                lineHeight="30px"
                fontSize={matches ? "21px" : "14px"}
                onClick={() => window.open("https://russialoppet.ru/events/moscow-2024.html", "_blank")?.focus()}
              /> */}
            </Stack>
            <Footer bg={commonBg} isMobile={matches} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MarathonPage;