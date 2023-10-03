import { Box } from "@mui/material";
import Setting_section from "./sections/setting_section";
import Accountـmanagement from "./sections/childComponent/Account/Accountـmanagement"
import Emailـmanagement from "./sections/childComponent/Email/Emailـmanagement";
import { style_Setting_p1 } from "./style";

export default function Setting() {
    return(
        <>
            <Box sx={style_Setting_p1}>
                <Setting_section childern={<Accountـmanagement/>}/>
                <Setting_section childern={<Emailـmanagement/>} />
            </Box>
        </>
    )
}