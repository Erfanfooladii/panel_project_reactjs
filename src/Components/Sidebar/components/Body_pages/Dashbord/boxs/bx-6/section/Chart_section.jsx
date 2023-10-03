import React from 'react';
import { Chart , Lines } from 'rumble-charts';
import { date } from './data';


export default function Chart_section (){
  return(
    <Chart
        height={140}
        minY={0}
        scaleX={{paddingEnd: 0,paddingStart: 0}}
        scaleY={{paddingTop: 10}}
        series={date}
        width={200}
      >
        <Lines />
      </Chart>
  )
}

