import { AlternateEmail, MarkEmailRead } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { style_Email_p1, style_Email_p2, style_Email_p3, style_Email_p4 } from "./style";

export default function Emailـmanagement() {
    return(
        <>
            <Box sx={{width:'100%'}}>
                <Box sx={style_Email_p1}><AlternateEmail/> Email</Box>
                <Box sx={style_Email_p2}>
                    <Box sx={style_Email_p3}><MarkEmailRead/> your email</Box>
                    <Box sx={style_Email_p4}>
                        Example@gmail.com
                    </Box>
                    <Button>change Email</Button>
                    <Button>Email confirmation</Button>
                </Box>
            </Box>
        </>
    )
}