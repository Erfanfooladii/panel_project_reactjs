import { NotificationsNone } from "@mui/icons-material";
import { Button } from "@mui/material";
import { style_btnNotifications_p1 } from "./style";

export default function Button_Notifications() {
    return(
        <Button sx={style_btnNotifications_p1}>
            <NotificationsNone/>
        </Button>
    )
}