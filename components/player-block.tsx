import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
    bg: string;
    src1: string;
    src2: string;
    isMobile: boolean;
}

const PlayerBlock = ({ bg, src1, src2, isMobile }: Props) => {
    return (
        <Stack
            direction={"column"}
            sx={{ width: "100%", mb: isMobile ? 5 : 2 }}
            spacing={isMobile ? "20px" : 2}
        >
            <Header bg={bg} text={"ПРЯМАЯ ТРАНСЛЯЦИЯ"} />
            <Box sx={{ width: "100%", px: "16px" }}>
                <iframe
                    src={src1}
                    width="100%"
                    height={isMobile ? "720" : "400"}
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                    allowFullScreen>
                </iframe>
            </Box>
            <Box sx={{ width: "100%", px: "16px" }}>
                <iframe
                    src={src2}
                    width="100%"
                    height={isMobile ? "720" : "400"}
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                    allowFullScreen>
                </iframe>
            </Box>
        </Stack>)
}

export default PlayerBlock