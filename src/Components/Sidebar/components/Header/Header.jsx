import { AppBar, Box , Toolbar, Typography } from "@mui/material";
import Button_up from "./btn-header/Button_up";
import Search_input from "./inp-search/Search_input";
import Button_Notifications from "./btn-Notifications/Button_Notifications";
import { style_Header_p1, style_Header_p2, style_Header_p3 } from "./style";

export default function Header() {
    return(
        <AppBar position="relative" color="transparent" sx={{boxShadow:0,pt:"7px"}} >
          <Toolbar sx={style_Header_p1}>
            <Typography sx={style_Header_p2} >
              Statistics
            </Typography>
            <Box sx={{display:{xs:'none',lg:'block'}}}>
              <Search_input/>
            </Box>
            <Box sx={style_Header_p3}>
              <Button_up/>
              <Button_Notifications/>
            </Box>
          </Toolbar>
        </AppBar>
    )
}