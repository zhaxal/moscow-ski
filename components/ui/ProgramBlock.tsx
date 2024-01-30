import React from 'react'
import { Stack, Typography } from "@mui/material";

interface ProgramBlockProps {
    bg: string;
    isMobile: boolean;
    text: string;
    time: string;
    width: string;
    isBold?: boolean;    
}

const ProgramBlock = ({ text, time, width, isMobile, isBold }: ProgramBlockProps) => {
    return (
        <Stack direction={"row"} spacing={isMobile ? 7 : 1}>
            <Typography
                variant="body"
                color={"white"}
                sx={{
                    whiteSpace: "pre-line",
                    width: isMobile ? width : "50%",
                    textAlign: "left",
                    fontFamily: isMobile
                        ? isBold ? "Gotham Pro Bold" : "Gotham Pro Light"
                        : "Gotham Pro Light",
                }}
            >
                {time}
            </Typography>
            <Typography
                variant="body"
                color={"white"}
                sx={{
                    whiteSpace: "pre-line",
                    width: isMobile ? "95%" : "80%",
                    maxWidth: isMobile ? "650px" : "80%",
                    fontFamily: isMobile
                        ? isBold ? "Gotham Pro Bold" : "Gotham Pro Light"
                        : "Gotham Pro Light",
                }}
            >
                {text}
            </Typography>
        </Stack>
    );
}

export default ProgramBlock