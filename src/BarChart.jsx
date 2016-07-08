import React, { Component } from 'react';
import d3 from 'd3';

export default class BarChart extends Component {
  constructor() {
    super();
    this.state = {
      data: [50, 43, 120, 87, 99, 167, 142]
    };
  }

  sortItems() {
    this.setState({
      data: this.state.data.sort(d3.ascending)
    });
  }

  addItem() {
    this.state.data.push(Math.floor(Math.random() * 100));
    this.forceUpdate();
  }

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
    const rectData = this.state.data.map((item, index) => ({
      fill: 'steelblue',
      x: padding.left + index * rectStep,
      y: height - padding.bottom - item,
      width: rectWidth,
      height: item
    }));
    const textData = this.state.data.map((item, index) => ({
      fill: 'white',
      fontSize: '14px',
      textAnchor: 'middle',
      x: padding.left + index * rectStep,
      y: height - padding.bottom - item,
      dx: rectWidth / 2,
      dy: '1em',
      value: item
    }));

    return (
      <div>
        <svg height={height} width={width}>
        {
          rectData.map((item, index) => <rect key={index} {...item} />)
        }
        {
          textData.map((item, index) => <text key={index} {...item}>{item.value}</text>)
        }
        </svg>
        <button onClick={this.sortItems.bind(this)}>Sort</button>
        <button onClick={this.addItem.bind(this)}>Add</button>
      </div>
    );
  }
}
