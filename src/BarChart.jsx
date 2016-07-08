import React, { Component } from 'react';

export default class BarChart extends Component {
  render() {
    const width = 400;
    const height = 400;
    const padding = {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20
    };
    const rectStep = 35;
    const rectWidth = 30;
    let data = [50, 43, 120, 87, 99, 167, 142];

    data = data.map((item, index) => ({
      fill: 'steelblue',
      x: padding.left + index * rectStep,
      y: height - padding.bottom - item,
      width: rectWidth,
      height: item
    }));

    return (
      <svg height={height} width={width}>
      {
        data.map(item => <rect {...item} />)
      }
      </svg>
    );
  }
}
