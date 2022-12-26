import { NextPage } from "next";
import React from "react";
import { Box, Container, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import CustomBtn from "../components/ui/CustomBtn";

const MarathonPage = () => {
  return (
    <Box height="100%" sx={{ backgroundColor: "#E6342D" }}>
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
                    height: 135,
                  }}
                  alt="skiLogo"
                />
                <Box
                  component={"img"}
                  src={"/images/desktop/logo/mosssport-logo.svg"}
                  sx={{
                    maxWidth: 186,
                    height: 55,
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
                      height: "301px",
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
                height: 452,
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
            direction={"row"}
            spacing={"400px"}
            sx={{ px: "16px", mt: "80px" }}
          >
            <Stack direction={"column"} spacing={"48px"}>
              <CustomBtn
                bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
                text={"ОБЩАЯ ИНФОРМАЦИЯ"}
                height={"48px"}
                lineHeight={"23px"}
                fontSize={"24px"}
              />
              <CustomBtn
                bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
                text={"ТРЕБОВАНИЯ К УЧАСТНИКАМ"}
                height={"48px"}
                lineHeight={"15.31px"}
                fontSize={"16px"}
              />
            </Stack>
            <Stack direction={"column"} spacing={"48px"}>
              <CustomBtn
                bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
                text={"ПРОГРАММА"}
                height={"48px"}
                lineHeight={"23px"}
                fontSize={"24px"}
              />
              <CustomBtn
                bg={"linear-gradient(90deg, #880101 0%, #EC0000 100%)"}
                text={"МЕСТО ПРОВЕДЕНИЯ"}
                height={"48px"}
                lineHeight={"23px"}
                fontSize={"24px"}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MarathonPage;
