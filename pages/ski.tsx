import { NextPage } from "next";
import React from "react";
import { Box, Container, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import CustomBtn from "../components/ui/CustomBtn";

const SkiPage: NextPage = () => {
  return (
    <Box height="100%" sx={{ backgroundColor: "#0082C2" }}>
      <Container disableGutters maxWidth="xl">
        <Stack direction={"column"}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                backgroundImage: "url(/images/desktop/ski-page/desc-bg.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: 810,
              }}
            />
          </Box>

          <Stack
            sx={{
              position: "absolute",
              left: "650px",
              top: "293px",
              width: "991px",
              alignItems: "center",
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
              «Лыжня России» - самое массовое спортивное мероприятие в России,
              участниками которого могут стать не только спортсмены- {"\n"}
              профессионалы, но и любители.
              {"\n"}
              {"\n"}С 1982 года, на протяжении вот уже 41 года, на старт по всей
              стране{"\n"} выходят сотни тысяч единомышленников, кто
              неравнодушен к лыжам, здоровому и активному отдыху.
            </Typography>
          </Stack>
          <Box
            sx={{
              backgroundImage: "url(/images/desktop/ski-page/center.svg)",
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
                bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
                text={"ОБЩАЯ ИНФОРМАЦИЯ"}
                height={"48px"}
                lineHeight={"23px"}
                fontSize={"24px"}
              />
              <CustomBtn
                bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
                text={"ТРЕБОВАНИЯ К УЧАСТНИКАМ"}
                height={"48px"}
                lineHeight={"15.31px"}
                fontSize={"16px"}
              />
            </Stack>
            <Stack direction={"column"} spacing={"48px"}>
              <CustomBtn
                bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
                text={"ПРОГРАММА"}
                height={"48px"}
                lineHeight={"23px"}
                fontSize={"24px"}
              />
              <CustomBtn
                bg={"linear-gradient(90deg, #015B88 0%, #009DEC 100%)"}
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

export default SkiPage;
