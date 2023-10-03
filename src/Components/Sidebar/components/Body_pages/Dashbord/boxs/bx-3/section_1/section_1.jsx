import { CallMade } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { style_bx3_sec1_p1, style_bx3_sec1_p2 } from "./style";

export default function section_1() {
    return(
        <>
            <Box sx={style_bx3_sec1_p1}>
                <Box>
                    Bounci Rate
                </Box>
                <Button sx={style_bx3_sec1_p2}><CallMade/></Button>
            </Box>
        </>
    )
}