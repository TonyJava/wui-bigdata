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

  componentDidMount() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  componentDidUpdate() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
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
    const xAxisWidth = 300;
    const yAxisWidth = 300;
    const xScale = d3.scale.ordinal()
                     .domain(d3.range(this.state.data.length))
                     .rangeRoundBands([0, xAxisWidth], 0.2);
    const yScale = d3.scale.linear()
                     .domain([0, d3.max(this.state.data)])
                     .range([0, yAxisWidth]);
    const rectData = this.state.data.map((item, index) => ({
      fill: 'steelblue',
      x: padding.left + xScale(index),
      y: height - padding.bottom - yScale(item),
      width: xScale.rangeBand(),
      height: yScale(item)
    }));
    const textData = this.state.data.map((item, index) => ({
      fill: 'white',
      fontSize: '14px',
      textAnchor: 'middle',
      x: padding.left + xScale(index),
      y: height - padding.bottom - yScale(item),
      dx: xScale.rangeBand() / 2,
      dy: '1em',
      value: item
    }));
    this.xAxis = d3.svg.axis()
                   .scale(xScale)
                   .orient('bottom');
    yScale.range([yAxisWidth, 0]);
    this.yAxis = d3.svg.axis()
                   .scale(yScale)
                   .orient('left');

    return (
      <div>
        <svg height={height} width={width}>
        {
          rectData.map((item, index) => <rect key={index} {...item} />)
        }
        {
          textData.map((item, index) => <text key={index} {...item}>{item.value}</text>)
        }
          <g ref="xAxis"
             className="axis"
             transform={`translate(${padding.left},${height - padding.bottom})`}>
          </g>
          <g ref="yAxis"
             className="axis"
             transform={`translate(${padding.left},${height - padding.top - yAxisWidth})`}>
          </g>
        </svg>
        <button onClick={this.sortItems.bind(this)}>Sort</button>
        <button onClick={this.addItem.bind(this)}>Add</button>
      </div>
    );
  }
}
