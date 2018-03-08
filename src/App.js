import React, { Component } from 'react';
import Card from './components/Card'
import ObjectivesStatusTabs from './components/ObjectivesStatusTabs'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Loop</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ObjectivesStatusTabs />
        <Card />
      </div>
    );
  }
}

export default App;
