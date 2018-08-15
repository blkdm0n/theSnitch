import React from 'react';
import { appleStock } from '@vx/mock-data';
import { scaleTime, scaleLinear } from '@vx/scale';
import { extent, max } from 'd3-array';
import { AreaClosed } from '@vx/shape';
import { Group } from '@vx/group';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { LinearGradient, GradientDarkGreenGreen } from '@vx/gradient';
import sentiment from 'node-sentiment';
import moment from 'moment';
//import data from '../../../sampleData.js'

const data = appleStock;

const width = 750;
const height = 500;

const margin = {
  top: 50,
  bottom: 60,
  left: 15,
  right: 60
};

const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

const x = d => new Date(d.date);  //the date of the stock price
const y = d => d.close; //the closing price  

const xScale = scaleTime({
  range: [0, xMax],
  domain: extent(data, x)
});

const yScale = scaleLinear({
  range: [yMax, 0],
  domain: [0, max(data, y)]
});

const divStyle = {
  float:'left',
  padding: 20
}


//pass data from sentiment analysis to graph and down to area closed as data

const Graph1 = (props) => {
    return (
      <svg width={width} height={height} style={divStyle}>
        <LinearGradient
          from='#DADBE2'
          to='#031130'
          id='gradient'
        />
        <Group top={margin.top} left={margin.left}>
          <AreaClosed
              data={data}
              xScale={xScale}
              yScale={yScale}
              x={x}
              y={y}
              fill={'blue'}
              stroke={''}
            />
          <AxisBottom
            scale={xScale}
            top={yMax}
            label={'Years'}
            stroke={'#1b1a1e'}
            tickTextFill={'#1b1a1e'}
          />
          <AxisLeft
            scale={yScale}
            top={0}
            left={0}
            label={'Close Price($)'}
            stroke={'#1b1a1e'}
            tickTextFill={'#1b1a1e'}
          />
        
        </Group>
      </svg>
   )
};


export default Graph1;