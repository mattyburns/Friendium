import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

import ImpactDonutChart from '../components/ImpactDonutChart'


const ChartsContainer = props =>{
  return(
    <div className="chart-container">
      <div>
        <ImpactDonutChart
          data={props.data}
        />
      </div>
      <h4># of days since last interaction: {props.daysSinceLastInteraction}</h4>
    </div>
  );
}


export default ChartsContainer;
