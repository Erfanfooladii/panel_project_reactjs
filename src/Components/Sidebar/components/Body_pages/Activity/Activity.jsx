import { Box } from "@mui/material";
import Item_Act from "./Items/item";
import Profit_item from "./Items/child_items/Profit_item";
import Points_item from "./Items/child_items/Points_item";
import Total_item from "./Items/child_items/Total_item";
import { style_Activity_p1 } from "./style";

export default function Activity() {
    return(
        <>
            <Box sx={style_Activity_p1}>
                <Item_Act CHcomponent={<Points_item/>} title={<Box fontSize="25px">Your points</Box>} color="background.item_green"/>
                <Item_Act CHcomponent={<Profit_item/>} title={<Box fontSize="25px">Overall profit</Box>} color="background.item_blue" />
                <Item_Act CHcomponent={<Total_item/>} title={<Box fontSize="25px">Total loss</Box>} color="background.item_red"/>
            </Box>
        </>
    )
}