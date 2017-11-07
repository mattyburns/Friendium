import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

import ImpactDonutChart from '../components/ImpactDonutChart'


const ChartsContainer = props =>{
  return(
    <div className="chart-container">
      <h1>GOOGLE CHARTS EXAMPLES</h1>
      <div>
        <ImpactDonutChart
          data={props.data}
        />
      </div>
    </div>
  );
}


export default ChartsContainer;
