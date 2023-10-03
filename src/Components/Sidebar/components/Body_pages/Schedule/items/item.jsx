import { Box } from "@mui/material";
import React from "react";
import { styel_item_p1, styel_item_p2, styel_item_p3, styel_item_p4 } from "./style";

export default function Item_Sc({text,title}) {
    
    return(
        <>
            <Box sx={styel_item_p1}>
                <Box sx={styel_item_p2}>
                     <Box sx={styel_item_p3}>
                        {title}
                     </Box>
                     <Box sx={styel_item_p4}>
                        <Box component="p" >Description:</Box>
                        <Box>{text}</Box>
                     </Box>
                </Box>
            </Box>
        </>
    )
}