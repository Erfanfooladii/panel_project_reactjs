import * as React from 'react';
import { GppGood } from "@mui/icons-material";
import { Box } from "@mui/material";
import ChangePass from './changePass';
import { styels_AccountSecurity_p1, styels_AccountSecurity_p2 } from './styles';


export default function Account_security() {
    
    
    return(
        <Box sx={styels_AccountSecurity_p1}>
            <Box sx={styels_AccountSecurity_p2}><GppGood/> Account security</Box>
            <Box>
                <p>Change Password</p>
                <ChangePass/>
            </Box>
        </Box>
    )
}