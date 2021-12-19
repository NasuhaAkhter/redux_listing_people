import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import './css/bootstrap.min.css';
import './css/responsive.css';
import './css/style.css';
import PeopleListing from './containers/PeopleListing';

function App() {
  return (
    <PeopleListing />
      );
}

export default App;
