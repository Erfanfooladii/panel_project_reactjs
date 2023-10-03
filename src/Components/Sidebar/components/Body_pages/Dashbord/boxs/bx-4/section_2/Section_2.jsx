import { Box } from '@mui/material';
import { Chart , Bars } from 'rumble-charts';

export default function Section_2() {

    return(
        <>
            <Box sx={{width:'100%'}}>
              <Chart height={48} width={180}>
                <Bars
                  series={[
                    {
                      data: [
                        1,
                        2,
                        6
                      ]
                    },
                    {
                      data: [
                        5,
                        7,
                        11
                      ]
                    }
                  ]}
                />
              </Chart>
            </Box>
        </>
    )
}