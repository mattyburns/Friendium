import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

const ImpactDonutChart = props =>{
  return(
    <div>
      <h2>Donut Chart</h2>
      <Chart
        chartType="PieChart"
        data={props.data}
        options={{pieHole:0.4}}
        graphId="PieChart"
        width="100%"
        height="400px"
      />
    </div>
  );
}

export default ImpactDonutChart;
