import { BarChart } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { style_sec_p1, style_sec_p2, style_sec_p3, style_sec_p4 } from "./style";

export default function Section_1() {
    return(
        <>
            <Box>
                <Box sx={style_sec_p1}>
                    <Box sx={style_sec_p2}>
                        <Box sx={style_sec_p3}><BarChart/></Box>
                        <p>ROI</p>
                    </Box>
                    <Button sx={style_sec_p4}>detalis</Button>
                </Box>
                <Box>
                    <Box fontSize={38}>173%</Box>
                    <p>Return on investment</p>
                </Box>    
            </Box>
        </>
    )
}