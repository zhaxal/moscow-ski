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
          sx={{ width: "100%", marginBottom: "50px" }}
          direction={matches ? "row" : "column"}
          spacing={5}
        >
          <Stack sx={{ width: matches ? "50%" : "100%" }} spacing={3}>
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
              {`8 февраля: с 14.00 до 20.00 
                9 февраля: с 10.00 до 20.00`}
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              ул. Лужники д.24
            </Typography>
          </Stack>
          <Stack sx={{ width: matches ? "50%" : "100%" }} spacing={1}>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              Как добраться:
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              {`От станции метро «Спортивная» через Центральное КПП 
                (Павильон «1Е»)`}
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              {`От станции МЦК «Лужники» через Центральное КПП 
                (Павильон «1Е»)`}
            </Typography>
            <Typography
              variant="body"
              color={"white"}
              sx={{ whiteSpace: "pre-line" }}
            >
              {`От станции «Воробьевы горы» через КПП2`}
            </Typography>
          </Stack>

        </Stack>
      </Box>
    </Stack>
  );
};

export default Packets;
