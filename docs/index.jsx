/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import Fork from 'react-ghfork';
import { Catalog, CodeSpecimen, ReactSpecimen } from 'catalog';

import 'purecss/build/pure.css';
import 'react-ghfork/gh-fork-ribbon.ie.css';
import 'react-ghfork/gh-fork-ribbon.css';
import './main.css';
import '../style.css';

// Add your documentation imports here. These are available to
// React specimen.
const documentationImports = {
  React,
  ReactDOM
};
const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
const project = `${USER}/${NAME}`; // eslint-disable-line no-undef
const pages = [{
    path: '/',
    title: 'Introduction',
    imports: documentationImports,
    component: require('../README.md')
  }, {
    path: '/bar-chart',
    title: 'BarChart',
    imports: {
      BarChart: require('../src/BarChart')
    },
    component: require('./BarChart.md')
  }, {
    path: '/scatter-chart',
    title: 'ScatterChart',
    imports: {
      ScatterChart: require('../src/ScatterChart')
    },
    component: require('./ScatterChart.md')
  }
];

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <Fork
      className="right"
      project={project}
      style={{
        backgroundColor: '#000'
      }}
    />
    <Catalog
      pages={pages}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript" />,
        js: props => <CodeSpecimen {...props} lang="javascript" />,
        jsx: props => <ReactSpecimen {...props} />
      }}
      title={title}
      logoSrc="docs/logo.png"
    />
  </div>,
  document.getElementById('app')
);
