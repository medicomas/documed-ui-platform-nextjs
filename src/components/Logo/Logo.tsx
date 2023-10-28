import { Box, Grid, Stack, Typography } from "@mui/material"

export const Logo = () => {
    return (
        <Box width={"100%"} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box mx={'10%'} width={'80%'}>
                <Box border={"2px solid black"} width={"fit-content"} borderRadius={"4px"} padding={.5}>
                    <Typography>Medicomas</Typography>
                </Box>
            </Box>
        </Box>
    )
}