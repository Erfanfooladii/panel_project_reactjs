import { Box, Switch } from "@mui/material";
import { useContext, useState } from "react";
import { ContextColormode } from "../../../../../story/Contexts/Contextmode"

export default function Button_dark(props) {
    const colormode=useContext(ContextColormode);
    const [state,setState]=useState()
    return(
        <>
            <Box sx={{
                display:'flex',
                alignItems:'center'
            }}>
                <p>Lithg</p>
                <Switch
                    onClick={()=>{setState(!state)}}
                    onChange={colormode.toggelColor}
                />
                <p>Dark</p>
            </Box>
        </>
    )
}