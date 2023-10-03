import { Box } from "@mui/material";
import Account_security from "./Component/Account_security";
import { AccountBalanceWallet } from "@mui/icons-material";
import Delete_account from "./Component/Delete_Account";
import { style_Account_p1, style_Account_p2 } from "./style";

export default function Accountـmanagement() {
    return(
        <>
            <Box sx={{width:'100%'}}>
                <Box sx={style_Account_p1}><AccountBalanceWallet/> Account</Box>
                <Box sx={style_Account_p2}>
                    <Account_security/>
                    <Delete_account/>
                </Box>
            </Box>
        </>
    )
}