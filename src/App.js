import React, { Component } from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js'
import images from './data.js'
import './App.css';
import DropDown from './DropDown.js';

export default class App extends Component {
  state = {
    keyFilter: '',
    hornFilter: ''
  }

  handleChange1 = e => {
    this.setState({
      keyFilter: e.target.value
    });
  }

  handleChange2 = e => {
    this.setState({
      hornFilter: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <DropDown handleChange1={this.handleChange1} handleChange2={this.handleChange2} />
        <ImageList images={images} keyFilter={this.state.keyFilter} hornFilter={this.state.hornFilter} />
      </div>
    );
  }
}

