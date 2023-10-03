import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import { GlobalContexts } from "../../../../../story/Contexts/Contextmode";
import DehazeIcon from '@mui/icons-material/Dehaze';
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
export function Button_menu() {
    const contextMenu=useContext(GlobalContexts)
    const [open,setOpen]=useState(false)
    const handel=()=>{
        setOpen(! open)
    }
    return(
        <>
            <Button
                sx={{
                    display:{xs:'flex',lg:'none'},
                    width:'60px',
                    borderRadius:'50%',
                    height:'60px',
                    zIndex:'100',
                    alignItems:'center',
                    justifyContent:'center'
                }}
                onClick={contextMenu.menuToggel}
            >
                <Box onClick={handel}
                    sx={{
                        ':hover':{
                            backgroundColor:'none'
                        },
                        width:'100%',
                        height:'100%',
                        borderRadius:'30px',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    {
                        open ? <ArrowBackIosNew/> : <DehazeIcon/>
                    }
                </Box>
            </Button>
        </>
    )
}