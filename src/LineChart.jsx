import React, { Component } from 'react';
import d3 from 'd3';

export default class LineChart extends Component {
  componentDidMount() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  render() {
    const dataset = [{
      country: 'china',
      gdp: [[2000, 11920], [2001, 13170], [2002, 14550],
            [2003, 16500], [2004, 19440], [2005, 22870],
            [2006, 27930], [2007, 35040], [2008, 45470],
            [2009, 51050], [2010, 59490], [2011, 73140],
            [2012, 83860], [2013, 103550]]
    }, {
      country: 'japan',
      gdp: [[2000, 47310], [2001, 41590], [2002, 39800],
            [2003, 43020], [2004, 46500], [2005, 45710],
            [2006, 43560], [2007, 43560], [2008, 48490],
            [2009, 50350], [2010, 54950], [2011, 59050],
            [2012, 59370], [2013, 48980]]
    }];
    const width = 400;
    const height = 400;
    const padding = {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50
    };
    let gdpmax = 0;

    for (let i = 0; i < dataset.length; i++) {
      let currGdp = d3.max(dataset[i].gdp, d => d[1]);

      if (currGdp > gdpmax) {
        gdpmax = currGdp;
      }
    }
    const xScale = d3.scale.linear()
                     .domain([2000, 2013])
                     .range([0, width - padding.left - padding.right]);
    const yScale = d3.scale.linear()
                     .domain([0, gdpmax * 1.1])
                     .range([height - padding.top - padding.bottom, 0]);

    const linePath = d3.svg.line()
                       .x(d => xScale(d[0]))
                       .y(d => yScale(d[1]));
    const colors = [d3.rgb(0, 0, 255), d3.rgb(0, 255, 0)];

    this.xAxis = d3.svg.axis()
                    .scale(xScale)
                    .ticks(5)
                    .tickFormat(d3.format('d'))
                    .orient('bottom');
    this.yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient('left');

    return (
      <svg width={width} height={height}>
      {
        dataset.map((data, index) => (
          <path key={index}
                transform={`translate(${padding.left}, ${padding.top})`}
                d={linePath(data.gdp)}
                fill="none"
                strokeWidth={3}
                stroke={colors[index]} />
        ))
      }
        <g ref="xAxis"
           className="axis"
           transform={`translate(${padding.left},${height - padding.bottom})`}>
        </g>
        <g ref="yAxis"
           className="axis"
           transform={`translate(${padding.left},${padding.top})`}>
        </g>
      </svg>
    );
  }
}
