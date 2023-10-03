import { Box } from "@mui/material";
import { style_SettingSec_p1 } from "./style";

export default function Setting_section({childern}) {
    return(
        <>
            <Box sx={style_SettingSec_p1}>
                {childern}
            </Box>
        </>
    )
}