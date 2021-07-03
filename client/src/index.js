import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ProjectContextP} from "./context/ProjectContext"

ReactDOM.render(
  <React.StrictMode>
    <ProjectContextP>
        <App />
    </ProjectContextP>
  </React.StrictMode>,
  document.getElementById('root')
);

