import { Box } from "@mui/material";
//import boxs
import Box_1 from "./boxs/bx-1/Box_1";
import Box_2 from "./boxs/bx-2/Box_2";
import Box_3 from "./boxs/bx-3/Box_3";
import Box_4 from "./boxs/bx-4/Box_4";
import Box_5 from "./boxs/bx-5/Box_5";
import Box_6 from "./boxs/bx-6/Box_6 ";
//import style for Dashbord component
import { style_Doshbord_p1 } from "./style";

export default function Dashbord() {
    return(
        <>
          <Box sx={style_Doshbord_p1}>
            <Box_1/>
            <Box_2/>
            <Box_3/>
            <Box_4/>
            <Box_5/>
            <Box_6/>
          </Box>
        </>
    )
}