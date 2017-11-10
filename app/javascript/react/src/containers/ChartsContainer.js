import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

import ImpactDonutChart from '../components/ImpactDonutChart'


const ChartsContainer = props =>{
  return(
    <div className="chart-container">
      <ImpactDonutChart
        data={props.data}
      />
    </div>
  );
}


export default ChartsContainer;
