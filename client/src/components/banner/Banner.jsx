import { Box, Typography } from "@mui/material"

const url = "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const Banner = () => {
    return (
        <Box style={{
                background: `URL(${url}) center/40% repeat-x #000`,
                width: "100%",
                height: "50vh",
            }}>
        </Box>
    )
}

export default Banner;