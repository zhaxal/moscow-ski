import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
  bg: string;
}

const ProgramSki = ({ bg }: Props) => {
  return (
    <Stack direction={"column"} sx={{ width: "100%" }} spacing={"20px"}>
      <Header
        bg={bg}
        text={"ПРОГРАММА"}
      />
      <Box sx={{ width: "100%", px: "16px" }}>
        <Stack direction={"column"} spacing={"4px"}>
          <Stack direction={"row"} spacing={7}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: "5%" }}
            >
              10.00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              Начало регистрации участников
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={7}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: "5%" }}
            >
              10.50
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              Церемония открытия соревнований
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={7}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: "5%" }}
            >
              11.00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              Старт забега 1
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={7}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: "5%" }}
            >
              11.20
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              Старт забега 2
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={7}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: "5%" }}
            >
              11.40
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              Старт забега 3
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={7}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: "5%" }}
            >
              12.00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              Старт забега 4
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={7}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: "5%" }}
            >
              12.10
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              Старт забега 5
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={7}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: "5%" }}
            >
              12.30
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              Старт забега 6
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={7}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: "5%" }}
            >
              13.30
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              Подведение итогов, награждение
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={7}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line", width: "5%" }}
            >
              14.00
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              Окончание мероприятия
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProgramSki;
