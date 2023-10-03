import { Chart,Transform,Pies } from "rumble-charts";
import { data_chart } from "./data";

export default function Chart_tr() {
    return(
        <Chart
          height={150}
          minY={0}
          series={data_chart}
          width={200}
        >
          <Transform
            method={[
              'transpose',
              'stack'
            ]}
          >
            <Pies
              combined
              innerPadding="3%"
              innerRadius="20%"
            />
          </Transform>
        </Chart>
             
    )
}