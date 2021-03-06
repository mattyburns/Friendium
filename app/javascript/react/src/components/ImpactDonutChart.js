import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

const ImpactDonutChart = props =>{
  return(
    <div>
      <Chart
        chartType="PieChart"
        data={props.data}
        options={{pieHole:0.4, title: "Interactions by type:" }}
        graphId="PieChart"
        width="100%"
        height="400px"
      />
    </div>
  );
}

export default ImpactDonutChart;
