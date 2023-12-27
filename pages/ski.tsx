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
import Script from "next/script";
import Packets from "../components/packets-block";
import MapBlock from "../components/map-block";

const SkiPage: NextPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();

  return (
    <>
      <Script
        id="id"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
       
          ym(91937297, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true,
               webvisor:true
          });
            `,
        }}
      />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/91937297"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>

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
            alt={"arrowIcon"}
            src={"/images/desktop/logo/arrow.svg"}
            sx={{ width: "36px", cursor: "pointer" }}
            onClick={() => router.push("/")}
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
                <Stack direction={"column"}>
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
                      src={"/images/mobile/icon/mossport-snow.svg"}
                      sx={{
                        width: 256,
                      }}
                      alt="mossportLogo"
                    />
                  </Stack>

                  <Stack
                    sx={{ mb: "20px", width: "100%", alignItems: "center" }}
                  >
                    <Typography
                      variant="heading"
                      sx={{
                        fontSize: "36px",
                        lineHeight: "36px",
                        color: "white",
                      }}
                    >
                      10 ФЕВРАЛЯ 2024
                    </Typography>
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
                        {`«Лыжня России» — ежегодное спортивное мероприятие для любителей 
                        беговых лыж. Это самая крупная по числу участников лыжная гонка не 
                        только в России, но и в Европе. Каждый год на старт выходит более 
                        500 тысяч человек из более чем 70 субъектов страны.

                        «Лыжня России» проводится с 1982 года. К старту в гонке допускаются как 
                        любители, так и профессиональные спортсмены. Участие в мероприятии 
                        бесплатное.
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
                <Stack direction={"column"}>
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
                        maxWidth: 150,
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
                  <Stack
                    sx={{ my: "20px", width: "100%", alignItems: "center" }}
                  >
                    <Typography
                      variant="heading"
                      sx={{
                        fontSize: "36px",
                        lineHeight: "36px",
                        color: "white",
                      }}
                    >
                      10 ФЕВРАЛЯ 2024
                    </Typography>
                  </Stack>
                  <Box
                    sx={{
                      backgroundImage:
                        "url(/images/mobile/ski-page/desc-bg.png)",
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
                          fontSize: "24px",
                        }}
                        color={"#005A87"}
                        variant={"desc"}
                      >
                        {`«Лыжня России» — 
                          ежегодное спортивное 
                          мероприятие для любителей 
                          беговых лыж. Это самая 
                          крупная по числу участников 
                          лыжная гонка не только в 
                          России, но и в Европе. 
                          Каждый год на старт 
                          выходит более 500 тысяч 
                          человек из более чем 70 
                          субъектов страны.

                          «Лыжня России» проводится 
                          с 1982 года. К старту в гонке 
                          допускаются как любители, 
                          так и профессиональные 
                          спортсмены. Участие в 
                          мероприятии бесплатное.
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
                fontSize={matches ? "21px" : "14px"}
                onClick={() => {
                  window
                    .open(
                      "https://reg.place/events/lyzhnya-rossii-2024",
                      "_blank"
                    )
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
            >
              <Information
                text={`Лыжня России — главное лыжное событие страны!

                Хотите встретить на старте олимпийских чемпионов, 
                членов сборной команды России по лыжным гонкам и 
                биатлону? Тогда Вы на правильном пути!

                Уже более 40 лет Лыжня России объединяет всех 
                любителей лыжных гонок!

                До встречи на старте!`}
                bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
                isMobile={matches}
              />
              <ProgramSki
                bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
                isMobile={matches}
              />
              <Requirements
                text1={`
                Соревнования проводятся в соответствии с правилами лыжных гонок. Стиль свободный.

                К соревнованиям допускаются все желающие от 9 лет, имеющие медицинский допуск к участию в соревнованиях. Возраст участников определяется по дате рождения (полных лет) по состоянию на день проведения соревнований.
                
                Участники, не прошедшие контрольные пункты по дистанции, будут дисквалифицированы, их результаты аннулируются. Победители определяются по наименьшему количеству времени, затраченному на прохождение дистанции.
                `}
                text2={`
                  Каждому участнику необходимо иметь при себе:

                  &mdash;&nbsp;паспорт или документ, удостоверяющий личность. Для несовершеннолетних детей - свидетельство о рождении.

                  &mdash;&nbsp;индивидуальный (или коллективный) медицинский допуск, подтверждающий состояние здоровья и возможность допуска к соревнованию, согласно требованиям приказа Минздрава России от 23 октября 2020 г.  № 1144н (<a href='/docs/Медицинское заключение о допуске к участию мероприятиях.pdf' download='Медицинское заключение о допуске к участию мероприятиях.pdf' >ОБРАЗЕЦ</a>)
                  
                  &mdash;&nbsp;согласие на обработку персональных данных спортсмена в соответствии с Федеральным законом от 27 июля 2006 г. № 152-ФЗ (<a href='/docs/Согласие_на_обработку_персональных_данных.pdf' download='Согласие_на_обработку_персональных_данных.pdf'>ОБРАЗЕЦ</a>)
                  
                  &mdash;&nbsp;оригинал полиса обязательного медицинского страхования&nbsp;(ОМС) или полиса добровольного медицинского страхования&nbsp;(ДМС). 
                  
                  Иные документы не&nbsp;установленной формы к&nbsp;рассмотрению не&nbsp;принимаются.                             
                `}
                bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
              />
              <Packets
                matches={matches}
                bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
                isSki={true}
              />*
              <MapBlock
                matches={matches}
                bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
                isSki={true}
              />
              {/* (<a target="_blank" href="https://mosgorsport.ru/upload/docs/%D0%9C%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D0%B4%D0%BE%D0%BF%D1%83%D1%81%D0%BA%D0%B5%20%D0%BA%20%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B8%D1%8E%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D1%8F%D1%85.pdf">ОБРАЗЕЦ</a>) */}
              {/* <Documents
                bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
                text1={"ПОЛОЖЕНИЕ"}
                text2={"Согласие на обработку персональных данных"}
                file1={"Положение_Лыжня_России_2024.pdf"}
                file2={"Согласие_на_обработку_персональных_данных.pdf"}
                isMobile={matches}
                height={"60px"}
              /> */}
              <Stack
                sx={{
                  width: "100%",
                  alignItems: "center",
                  pt: matches ? "60px" : "30px",
                  mb: matches ? "112px" : "46px",
                }}
              >
                <CustomBtn
                  bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
                  text={"РЕГИСТРАЦИЯ"}
                  height={matches ? "60px" : "48px"}
                  width={matches ? "468px" : "320px"}
                  lineHeight={"30px"}
                  fontSize={matches ? "21px" : "14px"}
                  onClick={() => {
                    window
                      .open(
                        "https://reg.place/events/lyzhnya-rossii-2024",
                        "_blank"
                      )
                      ?.focus();
                  }}
                />
              </Stack>
              <Footer
                bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
                isMobile={matches}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default SkiPage;
