import { NextPage } from 'next'
import React from 'react'
import { Box, Container, Stack } from "@mui/system";

const SkiPage: NextPage = () => {
    return (
        <Box height="100vh" sx={{ backgroundColor: "#0082C2" }}>

            <Container disableGutters maxWidth="xl">
                <Box sx={{
                    backgroundImage: "url(/images/desktop/ski-page/desc-bg.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    minHeight: 810,
                }} />
            </Container>
        </Box>
    )
}

export default SkiPage