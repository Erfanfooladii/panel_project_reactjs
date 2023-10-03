import { Box } from "@mui/material";
import Chart_tr from "./Chart/Chart";
import { style_bx1_p1, style_bx1_p2 , style_bx1_p3 ,style_bx1_p4, style_bx1_p5 } from "./style";
export default function Box_1() {
  
  return(
        <>
            <Box sx={style_bx1_p1}>
              <Box>
                Website traffic
              </Box>
              <Box sx={{height:'135px'}}>
                <Chart_tr/>
              </Box>
              <Box>
                  <Box sx={style_bx1_p2}>
                    <Box sx={style_bx1_p3}></Box>
                    <p>Social media</p>
                  </Box>
                  <Box sx={style_bx1_p4}>
                    <Box sx={style_bx1_p5}></Box>
                    <p>Organic search</p>
                  </Box>
                </Box>
            </Box>
        </>
    )
}