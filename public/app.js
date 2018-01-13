import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AlphaAPI from 'AlphaAPI';
import Input from 'Input';
import DisplayGraph from 'DisplayGraph';
import ChartData from 'ChartData';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      inputValue:'',
      data:[],
      dataType:'function=TIME_SERIES_DAILY',
      OHLC:'openData'
    }
  }
  handleOHLC(OHLC){
    this.setState({
      OHLC:OHLC,
    })
  }
  handleDrop(dataType){
    var {inputValue} = this.state;
    var that = this;
    AlphaAPI.getStock(inputValue,dataType).then(function (data) {
      that.setState({
          dataType:dataType,
          data:data
        });
    },
    function (errorMessage) {
      alert(errorMessage);
    })
  }
  handleInput(inputValue){
    var {dataType} = this.state;
    var that = this;
    AlphaAPI.getStock(inputValue,dataType).then(function (data) {
      that.setState({
          inputValue:inputValue,
          data:data
        });
    },
    function (errorMessage) {
      alert(errorMessage);
    }) 
  }
  render() {
    console.log(this.state.OHLC);
    
    return (
      <div>
        <Input handleInput = {this.handleInput.bind(this)} handleOHLC = {this.handleOHLC.bind(this)} handleDrop = {this.handleDrop.bind(this)} />
        <DisplayGraph data = {this.state.data} name = {this.state.inputValue} OHLC={this.state.OHLC}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);