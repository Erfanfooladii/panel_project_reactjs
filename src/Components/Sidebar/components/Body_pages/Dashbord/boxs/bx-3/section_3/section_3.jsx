import { Box } from "@mui/material";
import { style_bx3_sec3_p1, style_bx3_sec3_p2 } from "./style";

export default function section_3() {
    return(
        <>
            <Box sx={style_bx3_sec3_p1}>
                <Box sx={{fontSize:30}}>
                    56%
                </Box>
                <Box sx={style_bx3_sec3_p2}>
                    <p>-10%</p>
                    <p>Since last day</p>
                </Box>
            </Box>
        </>
    )
}