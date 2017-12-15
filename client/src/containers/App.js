import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import List from '../components/List.js';
import Restaraunt from '../components/Restaraunt.js';

class App extends Component {

  constructor(props) {
    super(props);
     this.textInput = null;
  }

  addRestaraunt(name, rating, url) {
    fetch('http://localhost:3050/restaurants', {
      method:'POST',
      body: JSON.stringify({
        name: name.input.value,
        rating: rating.input.value,
        url: url.input.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  render() {
    
    const style = {
      margin: 5,
      minWidth: 140,
    };
    const hintStyle = {
      color: "#fff",
      marginright: 5,
    };
    const inputStyle = {
      color: "white",
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
        <List />
        <div className="App-bottom">
          <TextField hintText="Name" hintStyle={hintStyle} inputStyle={inputStyle} style={style} ref={(input) => { this.textInput = input; }} />
          <TextField hintText="Rating" hintStyle={hintStyle} inputStyle={inputStyle} style={style} ref={(input) => { this.ratingInput = input; }} />
          <TextField hintText="Image URL" hintStyle={hintStyle} inputStyle={inputStyle} style={style} ref={(input) => { this.urlInput = input; }} />
          <RaisedButton className="buttons" label="Add new Restaraunt" default={true} onClick={() => this.addRestaraunt(this.textInput, this.ratingInput, this.urlInput)} style={style} />
        </div>
      </div>
    );
  }
}

export default App;
