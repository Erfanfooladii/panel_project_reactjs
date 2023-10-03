import { Box, Button } from "@mui/material";
import { style_btnUp_p1 } from "./style";

export default function Button_up() {
    return(
        <>
            <Box>
                <Button sx={style_btnUp_p1}>
                    upgrade
                </Button>
            </Box>
        </>
    )
}