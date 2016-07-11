import React from 'react';
import {
  BarChart,
  ScatterChart,
  LineChart,
  PieChart,
  ForceDirectedGraph,
  ChordDiagram,
  TreeDiagram,
  ClusterDiagram,
  BundleDiagram
} from '../src';

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <BarChart />
        <ScatterChart />
        <LineChart />
        <PieChart />
        <ForceDirectedGraph />
        <ChordDiagram />
        <TreeDiagram />
        <ClusterDiagram />
        <BundleDiagram />
      </div>
    );
  }
}
