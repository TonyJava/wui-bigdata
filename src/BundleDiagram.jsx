import React, { Component } from 'react';
import d3 from 'd3';

export default class BundleDiagram extends Component {
  render() {
    const width = 600;
    const height = 600;
    const cluster = d3.layout.cluster()
                      .size([360, width / 2 - 50])
                      .seperation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);
    const bundle = d3.layout.bundle();
    const nodes = cluster.nodes(cities);

    function map(nodes, links) {
      let hash = [];

      for (let i = 0; i < nodes.length; i++) {
        hash[nodes[i].name] = nodes[i];
      }

      const resultLinks = [];

      for (let i = 0; i < links.length; i++) {
        resultLinks.push({
          source: hash[links[i].source],
          target: hash[links[i].target]
        });
      }

      return resultLinks;
    }

    const oLinks = map(nodes, railway);
    const links = bundle(oLinks);

    return (
      <svg width={width} height={height}>
      {
        links.map(link => <div>{link.name}</div>)
      }
      </svg>
    );
  }
}

const cities = {
  name: '',
  children:[
    {name: '北京'},{name: '上海'},{name: '杭州'},
    {name: '广州'},{name: '桂林'},{name: '昆明'},
    {name: '成都'},{name: '西安'},{name: '太原'}
  ]
};

const railway = [
  {source: '北京', target: '上海'},
  {source: '北京', target: '广州'},
  {source: '北京', target: '杭州'},
  {source: '北京', target: '西安'},
  {source: '北京', target: '成都'},
  {source: '北京', target: '太原'},
  {source: '北京', target: '桂林'},
  {source: '北京', target: '昆明'},
  {source: '北京', target: '成都'},
  {source: '上海', target: '杭州'},
  {source: '昆明', target: '成都'},
  {source: '西安', target: '太原'}
];
