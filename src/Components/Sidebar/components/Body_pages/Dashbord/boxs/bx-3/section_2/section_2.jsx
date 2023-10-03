import { Box } from "@mui/material";
import { BoxMinimum, style_bx3_sec_p1, style_bx3_sec_p2 } from "./style";

export default function section_2() {
    
    
    return(
        <>
            <Box
                sx={style_bx3_sec_p1}
            >
                <BoxMinimum>
                    <Box>Tue</Box>
                    <Box>2</Box>
                </BoxMinimum>
                <BoxMinimum sx={style_bx3_sec_p2}>
                    <Box>Mon</Box>
                    <Box>3</Box>
                </BoxMinimum>
                <BoxMinimum>
                    <Box>Wed</Box>
                    <Box>4</Box>
                </BoxMinimum>
            </Box>
        </>
    )
}