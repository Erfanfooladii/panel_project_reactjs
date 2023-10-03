import { Box } from "@mui/material";
import Chart_section from "./section/Chart_section";
import { style_bx6_p1 } from "./style";

export default function Box_6() {
    return(
        <>
            <Box sx={style_bx6_p1}>
                <p>Customer churn rate</p>
                <Chart_section/>
            </Box>
        </>
    )
}