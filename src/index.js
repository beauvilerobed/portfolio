import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Projects from './Projects';

ReactDOM.render(
  <React.StrictMode>
    <Projects />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
