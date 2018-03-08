import React, { Component } from 'react';
import Card from './components/Card'
import ObjectivesStatusTabs from './components/ObjectivesStatusTabs'
import Header from './components/Header'
import Routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ObjectivesStatusTabs />
        <Card />
        <Routes />
      </div>
      
    );
  }
}

export default App;
