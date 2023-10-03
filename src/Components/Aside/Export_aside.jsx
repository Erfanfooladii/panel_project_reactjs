import { useContext, useState } from "react";
import Aside from "./Aside";
import Aside_res from "./Aside_res";
import { Button_menu } from "./Components/btn_aside/btn_menu/Button_menu";
import { GlobalContexts } from "../../story/Contexts/Contextmode";
import { Box } from "@mui/material";
import { style_ExportAside_p1 } from "./style";

export default function Export_aside() {
    const contextMenu=useContext(GlobalContexts)
    const [open,setOpen]=useState(false)
    const toggelmenu={
      menuToggel:()=>{
        setOpen(!open)
        console.log('dsddf');
      }
    }
    return(
        <>  
            <GlobalContexts.Provider value={toggelmenu}>
              <Box sx={style_ExportAside_p1}>
                <Button_menu/>
                <Aside_res children={open?'250px':'0%'}/>
                <Aside/>
              </Box>
            </GlobalContexts.Provider>
        </>
    )
}