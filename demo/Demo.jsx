import React from 'react';
import {
  BarChart,
  ScatterChart
} from '../src';

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <BarChart />
        <ScatterChart />
      </div>
    );
  }
}
