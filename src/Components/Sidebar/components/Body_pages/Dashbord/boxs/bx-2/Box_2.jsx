import { Box } from "@mui/material";
import Section_2 from "./section_2/Section_2";
import Section_1 from "./section_1/Section_1";
import { style_bx2_p1 } from "./style";

export default function Box_2() {
    return(
        <>
            <Box sx={style_bx2_p1}>
                <Section_1/>
                <Section_2/>
            </Box>
        </>
    )
}