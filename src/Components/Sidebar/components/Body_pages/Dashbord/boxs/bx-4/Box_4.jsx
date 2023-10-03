import { Box } from "@mui/material";
import Section_2 from "../bx-4/section_2/Section_2";
import Section_1 from "../bx-4/section_1/Section_1";
import { style_bx4_p1 } from "./style";

export default function Box_4() {
    return(
        <>
            <Box sx={style_bx4_p1}>
                <Section_1/>
                <Section_2/>
            </Box>
        </>
    )
}