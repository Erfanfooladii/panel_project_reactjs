import { Box, Button } from "@mui/material";
import { style_bx2_sec1_p1, style_bx2_sec1_p2 } from "./style";

export default function Section_1() {
    return(
        <>
            <Box sx={style_bx2_sec1_p1}>
                <Button sx={style_bx2_sec1_p2}>Fullreport</Button>
                <Box>
                    /2023
                </Box>
            </Box>
        </>
    )
}