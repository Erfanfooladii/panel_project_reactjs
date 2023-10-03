import { Box , Button } from "@mui/material";
import { styles_Delete_p1, styles_Delete_p2, styles_Delete_p3 } from "./styles";

export default function Delete_account() {
    return(
        <>
            <Box sx={styles_Delete_p1}>
                <Box sx={styles_Delete_p2}>Delete account</Box>
                <Box component="p">Once you delete your account, there is no going back. Please be certain.</Box>
                <Button sx={styles_Delete_p3}>Delete your account</Button>
            </Box>
        </>
    )
}