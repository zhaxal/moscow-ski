import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Header from './ui/Header';

interface Props {
    isMobile: boolean;
    bg: string;
}

const Footer = ({ isMobile, bg }: Props) => {
    return (
        <Stack direction={"column"} sx={{ width: "100%" }} spacing={isMobile ? "20px" : 2} >
            <Header
                bg={bg}
                text={"МЕСТО ПРОВЕДЕНИЯ"}
            />
            <Stack sx={{ width: "100%" }} direction={isMobile ? "row" : "column-reverse"} spacing={"26px"}>
                <Box
                    sx={{
                        height: "592px",
                        width: isMobile ? "65%" : "100%"
                    }}
                >
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A700208c7b0ea0ace0d8154b93892de9ddd6e84e4b2cbb5a92a86c02ea6202d74&amp;source=constructor"
                        height="100%"
                        width={isMobile ? "100%" : "80%"}
                        frameBorder="0"
                    ></iframe>
                </Box>

                <Stack sx={{
                    width: isMobile ? "35%" : "100%",
                    height: "253px"
                }}
                    justifyContent={"center"}
                >
                    <Typography variant='footer' sx={{ whiteSpace: "pre-line" }}>
                        {`Москва, ЮЗАО
                        36й км МКАД,
                        зона отдыха
                        “Альфа-Битца”`}
                    </Typography>
                </Stack>
            </Stack>
        </Stack >
    )
}

export default Footer