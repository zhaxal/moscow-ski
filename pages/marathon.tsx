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
import Script from "next/script";
import Packets from "../components/packets-block";

const MarathonPage: NextPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
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
            alt={"arrowIcon"}
            src={"/images/desktop/logo/arrow.svg"}
            sx={{ width: "36px", cursor: "pointer" }}
            onClick={() => router.push("/")}
          />
        </Stack>
        <Container disableGutters maxWidth="xl">
          <Stack direction={"column"}>
            {matches ? (
              <Stack direction={"row"} alignItems={"flex-end"}>
                <Stack direction={"column"}>
                  <Stack
                    direction={"row"}
                    px={"100px"}
                    alignItems={"center"}
                    spacing={"58px"}
                  >
                    <Box
                      component={"img"}
                      src={"/images/mobile/icon/mossport-snow.svg"}
                      sx={{
                        width: 256,
                      }}
                      alt="mossportLogo"
                    />
                    <Box
                      component={"img"}
                      src={"/images/desktop/logo/ski-logo.svg"}
                      sx={{
                        maxWidth: 156,
                      }}
                      alt="skiLogo"
                    />
                    <Box
                      component={"img"}
                      src={"/images/desktop/logo/logo-si.svg"}
                      sx={{
                        maxWidth: 136,
                        cursor: "pointer",
                      }}
                      alt="logo-si"
                      onClick={() => {
                        window
                          .open("https://www.sport-images.ru/", "_blank")
                          ?.focus();
                      }}
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
                      12 ФЕВРАЛЯ 2023
                    </Typography>
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
                        alignItems: "flex-start",
                        justifyContent: "center",
                        height: "100%",
                        px: "57px",
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
                        {`Первый московский лыжный марафон`}
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
                <Stack direction={"column"}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-around"}
                    sx={{ mb: 5 }}
                  >
                    <Box
                      component={"img"}
                      src={"/images/mobile/icon/mossport-snow.svg"}
                      sx={{
                        maxWidth: 155,
                      }}
                      alt="mossportLogo"
                    />

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
                      src={"/images/desktop/logo/logo-si.svg"}
                      sx={{
                        maxWidth: 88,
                        cursor: "pointer",
                      }}
                      alt="logo-si"
                      onClick={() => {
                        window
                          .open("https://www.sport-images.ru/", "_blank")
                          ?.focus();
                      }}
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
                      12 ФЕВРАЛЯ 2023
                    </Typography>
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
                      py: "70px",
                    }}
                  >
                    <Stack
                      sx={{
                        justifyContent: "center",
                        alignItems: "start",
                        height: "100%",
                        width: "90%",
                      }}
                    >
                      <Typography
                        sx={{
                          textOverflow: "ellipsis",
                          whiteSpace: "pre-line",
                          overflow: "hidden",
                          fontWeight: 400,
                          fontSize: "20px",
                          px: "20px",
                        }}
                        color={"#870000"}
                        variant={"desc"}
                      >
                        {`



                        Первый московский лыжный марафон
                                             
                        
                        
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
                text={"РЕГИСТРАЦИЯ ЗАВЕРШЕНА"}
                height={matches ? "60px" : "48px"}
                width={matches ? "468px" : "320px"}
                lineHeight={"30px"}
                fontSize={matches ? "21px" : "14px"}
                onClick={() => {
                  // window
                  //   .open(
                  //     "https://russialoppet.ru/registration/msm2023/",
                  //     "_blank"
                  //   )
                  //   ?.focus();
                }}
              />
            </Stack>

            <Box
              sx={{
                backgroundImage:
                  "url(/images/desktop/marathon-page/center.svg)",
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
              spacing={matches ? "20px" : 2}
            >
              <Information
                text={`Московский лыжный марафон — это совершенно новый марафон в серии Russialoppet
                Стань частью лыжного сообщества!
                Такой гонки еще не было в Москве.
                Ждем тебя 12 февраля 2023 года!
                
                Московский марафон войдет в календари Суперкубка, Кубка Команд и проект «Лаки Лузер»

                Также твой результат будет включен в рейтинг финишеров.
                
                Друзья, Ваши фотографии с Первого Московского лыжного марафона готовы, и ждут Вас <a style="text-decoration: underline; text-decoration-thickness: 1px" target="_blank" href="https://www.sport-images.ru/events/moskovskiy-lijniy-marafon-2023">https://www.sport-images.ru/events/moskovskiy-lijniy-marafon-2023/</a>

                Для Вас доступен удобный поиск по селфи, фамилии или стартовому номеру.`}
                bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
                isMobile={matches}
              />
              <ProgramMarathon
                bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
                isMobile={matches}
              />
              <Requirements
                text1={`Соревнования проводятся в соответствии с правилами лыжных гонок. Стиль свободный.

                К участию в соревновании допускаются лыжники-любители и спортсмены субъектов Российской Федерации, ближнего и дальнего зарубежья в возрасте от 17 и старше на дистанцию 17 км и 19 лет и старше на дистанции 34 и 51 км, имеющие медицинский допуск к участию в соревнованиях. Возраст участников определяется по дате рождения (полных лет) по состоянию на день проведения соревнований. Участники, не прошедшие контрольные пункты по дистанции, будут дисквалифицированы, их результат аннулируется. 
                
                Победители определяются по наименьшему количеству времени, затраченному на прохождение дистанции.`}
                text2={`Все участники предоставляют на комиссию по допуску 
                        следующие документы:
                      <ul>
                        <li>медицинский допуск, подтверждающий состояние 
                        здоровья и возможность допуска к соревнованию, 
                        согласно требованиям приказа Минздрава России 
                        от 23 октября 2020 г. № 1144н</li>
                        <li>паспорт или документ, подтверждающий личность 
                        зарегистрированного участника</li>
                      </ul>
                    `}
                bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
              />
              <Packets
                matches={matches}
                bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
                isSki={false}
              />
              <Documents
                bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
                text1={"ПОЛОЖЕНИЕ"}
                file1={"Лыжный марафон_полож_к.pdf"}
                isMobile={matches}
                height={"116px"}
              />
              <Stack
                sx={{
                  width: "100%",
                  alignItems: "center",
                  py: matches ? "30px" : "30px",
                }}
              >
                <CustomBtn
                  bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
                  text={"РЕГИСТРАЦИЯ ЗАВЕРШЕНА"}
                  height={matches ? "60px" : "48px"}
                  width={matches ? "468px" : "320px"}
                  lineHeight={"30px"}
                  fontSize={matches ? "21px" : "14px"}
                  onClick={() => {
                    // window
                    //   .open(
                    //     "https://russialoppet.ru/registration/msm2023/",
                    //     "_blank"
                    //   )
                    //   ?.focus();
                  }}
                />
              </Stack>
              <Footer
                bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
                isMobile={matches}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default MarathonPage;
