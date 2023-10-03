import { Box, Button } from "@mui/material";
import { AssignmentReturned } from "@mui/icons-material";
import { style_bx2_sec2_p1, style_bx2_sec2_p2 } from "./style";

export default function Section_2() {
    return(
        <>
            <Box sx={style_bx2_sec2_p1}>
                <Button sx={style_bx2_sec2_p2} endIcon={<AssignmentReturned/>}>
                    download report
                </Button>
            </Box>
        </>
    )
}