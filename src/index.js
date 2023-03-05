import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as serviceWorker from "./serviceWorker";
import {DataLayer} from "./DataLayer";
import reducer from './reducer';
import { initialState } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer} >
      <App />
    </DataLayer>
  </React.StrictMode>
);

// serviceWorker.unregister();