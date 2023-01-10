import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import { fontFamily } from "@mui/system";
import React from "react";
import Header from "./ui/Header";

interface Props {
  bg: string;
  matches: boolean;
}

const Packets = ({ bg, matches }: Props) => {
  return (
    <Stack direction={"column"} sx={{ width: "100%" }} spacing={2}>
      <Header bg={bg} text={"ПАКЕТ УЧАСТНИКА"} />
      <Box sx={{ width: "100%", px: "16px" }}>
        <Stack
          sx={{ width: "100%" }}
          direction={matches ? "row" : "column"}
          spacing={5}
        >
          <Stack sx={{ width: matches ? "50%" : "100%" }}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              Время и место получения:
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
            </Typography>
          </Stack>
          <Stack sx={{ width: matches ? "50%" : "100%" }}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              Состав пакета
            </Typography>
            {/* <Stack spacing={1}>
              <Stack spacing={1} direction={"row"} px={1}>
                <Typography variant="footer">•</Typography>
                <Typography variant="footer" sx={{ textDecoration: "underline" }}>Стартовый номер с чипом хронометража и булавки.</Typography>
              </Stack>
              <Stack spacing={1} direction={"row"} px={1}>
                <Typography variant="footer">•</Typography>
                <Typography variant="footer" sx={{ textDecoration: "underline" }}>Браслет и наклейка для камеры хранения.</Typography>
              </Stack>
              <Stack spacing={1} direction={"row"} px={1}>
                <Typography variant="footer">•</Typography>
                <Typography variant="footer" sx={{ textDecoration: "underline" }}>Термонакидка на финише.</Typography>
              </Stack>
              <Stack spacing={1} direction={"row"} px={1}>
                <Typography variant="footer">•</Typography>
                <Typography variant="footer" sx={{ textDecoration: "underline" }}>Продуктовый пакет на финише.</Typography>
              </Stack>
              <Stack spacing={1} direction={"row"} px={1}>
                <Typography variant="footer">•</Typography>
                <Typography variant="footer" sx={{ textDecoration: "underline" }}>Медаль на финише.</Typography>
              </Stack>
            </Stack> */}
          </Stack>

        </Stack>
      </Box>
    </Stack>
  );
};

export default Packets;
