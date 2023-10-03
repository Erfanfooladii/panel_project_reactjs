import React from "react";
import { Box } from "@mui/material";
import Item_Sc from "./items/item";
import List from "../../../../../assets/datas/listTitleSchedule.json"
import { style_Schedule_p1 } from "./style";
export default function Schedule() {
    
    return(
        <>
            <Box sx={style_Schedule_p1}>
                {
                    List.map((item,index)=> <Item_Sc key={index} title={item.title} text={item.text}/>)
                }
            </Box>
        </>
    )
}