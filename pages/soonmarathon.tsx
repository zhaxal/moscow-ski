import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";
import CustomBtn from "../components/ui/CustomBtn";

const SoonMarathonPage: NextPage = () => {
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
          <Stack direction={"column"} sx={{ marginBottom: "140px" }}>
            {matches ? (
              <Stack direction={"row"} alignItems={"flex-end"}>
                <Stack direction={"column"}>
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
                      src={"/images/mobile/icon/mossport-snow.svg"}
                      sx={{
                        width: 256,
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
                      11 ФЕВРАЛЯ 2024
                    </Typography>
                  </Stack>

                  <Box
                    sx={{
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
                          fontFamily: "Gotham Pro Regular",
                          fontSize: "36px",
                          fontWeight: 400,
                          lineHeight: "34px",
                        }}
                        color={"white"}
                      >
                        {`Регистрация откроется чуть позже`}
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
                    direction={"row-reverse"}
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
                      11 ФЕВРАЛЯ 2024
                    </Typography>
                  </Stack>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      py: "30px",
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
                          fontSize: "36px",
                          fontFamily: "Gotham Pro Regular",
                          lineHeight: "34px",
                          px: "20px",
                        }}
                        color={"white"}
                      >
                        {`



                        Регистрация откроется чуть позже
                                             
                        

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
                text={"НА ГЛАВНУЮ"}
                height={matches ? "60px" : "48px"}
                width={matches ? "468px" : "320px"}
                lineHeight={"30px"}
                fontSize={matches ? "32px" : "20px"}
                onClick={() => {
                  router.push("/");
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
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default SoonMarathonPage;
