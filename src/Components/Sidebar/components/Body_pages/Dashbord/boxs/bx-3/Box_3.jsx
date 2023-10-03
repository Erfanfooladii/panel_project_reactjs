import { Box } from "@mui/material";
import Section_1 from "./section_1/section_1";
import Section_2 from "./section_2/section_2";
import Section_3 from "./section_3/section_3";
import { style_bx3_p1 } from "./style";

export default function Box_3() {
    return(
        <>
            <Box sx={style_bx3_p1}>
                <Section_1/>
                <Section_2/>
                <Section_3/>
            </Box>
        </>
    )
}