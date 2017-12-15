import React, { Component } from 'react';
import './App.css';

import RaisedButton from 'material-ui/RaisedButton';

import List from '../components/List.js';
import Restaraunt from '../components/Restaraunt.js';

class App extends Component {

  state = {
    restaraunt: null,
    restarauntList: [],

  }

  constructor(props) {
    super(props);
    restarauntList: []
  }


  addName() {
    console.log('wtf');
  }


  render() {

    const style = {
      margin: 5,
      minWidth: 140,
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MUZZAFUPPA RESTARAUNTS</h1>
        </header>
        <div className="App-intro">
          <RaisedButton className="buttons" label="Name" default={true} onClick={this.addName} style={style} />
          <RaisedButton className="buttons" label="Rating" default={true} onClick={this.addName} style={style} />
          <RaisedButton className="buttons" label="Date created" default={true} onClick={this.addName} style={style} />
        </div>
        <List propsy={this.state.rest} />
      </div>
    );
  }
}

export default App;
