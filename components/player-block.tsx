import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/Header";

interface Props {
    bg: string;
    isMobile: boolean;
}

const PlayerBlock = ({ bg, isMobile }: Props) => {
    return (
        <Stack
            direction={"column"}
            sx={{ width: "100%", mb: isMobile ? 5 : 2 }}
            spacing={isMobile ? "20px" : 2}
        >
            <Header bg={bg} text={"ПРЯМАЯ ТРАНСЛЯЦИЯ"} />
            <Box sx={{ width: "100%", px: "16px" }}>
                <iframe
                    src="https://vk.com/video_ext.php?oid=-66385073&id=456239548"
                    width="100%"
                    height={isMobile ? "720" : "400"}
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                    allowFullScreen>
                </iframe>
            </Box>
        </Stack>)
}

export default PlayerBlock