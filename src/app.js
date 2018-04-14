import React from 'react';
import ReactDOM from 'react-dom';
import {AVProjectsComponent} from './AVProjects';

const render = (Component) => {
  ReactDOM.render(
    <Component/>,
    document.getElementById('root')
  );
};
render(AVProjectsComponent);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./AVProjects', () => {
    render(AVProjectsComponent);
  });
}