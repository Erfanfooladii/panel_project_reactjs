import { Clear } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { styel_itemTodo_p1 , styel_itemTodo_p2 } from "./style";

export default function Item_todo({title,text,deleteClick}) {
    return(
        <Box sx={styel_itemTodo_p1}>
            <Button sx={styel_itemTodo_p2} onClick={deleteClick}><Clear/></Button>
            <Box component='h2'>{title}</Box>
            <Box component='p'>{text}</Box>
        </Box>
    )
}