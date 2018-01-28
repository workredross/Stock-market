import React, { Component } from 'react';

class Display extends Component {
    handleInput(e){
        e.preventDefault();
        var inputValue = this.refs.input.value;
        this.props.handleInput(inputValue);
    }
    handleDrop(e){
        e.preventDefault();
        var dropValue = this.refs.drop.value 
        this.props.handleDrop(dropValue);
    }
    handleOHLC(e){
        e.preventDefault();
        var OHLCValue = this.refs.OHLC.value 
        this.props.handleOHLC(OHLCValue);
    }
    render() {
        return (
            <div className = "row">
                <select className="col-md-2" name="school" ref = 'drop' onChange = {this.handleDrop.bind(this)}>
                    <option value="function=TIME_SERIES_INTRADAY&interval=1min" selected>1min</option>
                    <option value="function=TIME_SERIES_INTRADAY&interval=5min">5min</option>
                    <option value="function=TIME_SERIES_INTRADAY&interval=15min">15min</option>
                    <option  value="function=TIME_SERIES_DAILY" >Daily</option>
                    <option value="function=TIME_SERIES_WEEKLY">Weakly</option>
                    <option value="function=TIME_SERIES_MONTHLY">Monthly</option>   
                </select>
                <select className="col-md-2" name="school" ref = 'OHLC' onChange = {this.handleOHLC.bind(this)}>
                <option value="openData" selected>OPEN</option>
                <option value="highData">HIGH</option>
                <option value="lowData">LOW</option>
                <option  value="closeData" >CLOSE</option>
                <option value="volumeData">VOLUME</option>   
            </select>
                <form className="col-md-6" onSubmit={this.handleInput.bind(this)}>
                    <input type="text" ref='input' placeholder="stock symbol (aapl,googl)"/>
                    <button type="submit">ENTER</button>              
                </form>
            </div>

        );
    }
}

export default Display;