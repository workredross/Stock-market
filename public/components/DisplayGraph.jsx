import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class DisplayGraph extends Component {
  constructor(props) {
    super(props);
    
    // this.set = {
    //   openData:[],
    //   closeData:[],
    //   highData:[],
    //   lowData:[],
    //   volumeData:[],
    //   closeData:[],
    //   time:[],
    // }
  }
  
  componentWillReceiveProps(){
  }
  render() {
    var {name,data,OHLC} = this.props
  //   console.log('yo2');
     var name = name.toUpperCase();
    
    function isEmpty(obj) {
      for(var key in obj) {
        if(obj.hasOwnProperty(key))
        return false;
      }
      return true;
    }
  
    function getObjectData(object,iterateValue) {
      return Object.values(Object.values(Object.values(object)[1])[iterateValue]);
    };
    
    if(isEmpty(data)){
      return (
        <div className = "col-md-9">
          loading data
        </div>
        );
    }else{
      var i=0;

      var openData =  [];
      var highData = [];
      var lowData = [];
      var closeData = []; 
      var volumeData = [];
      var time = [];
      
      for(i=0;i<100;i++){
        openData[99-i] = getObjectData(data,i)[0];
        highData[99-i] = getObjectData(data,i)[1];
        lowData[99-i] = getObjectData(data,i)[2];
        closeData[99-i] = getObjectData(data,i)[3];
        volumeData[99-i] = getObjectData(data,i)[4];
        time[99-i] =Object.keys(Object.values(data)[1])[i].substring(Object.keys(Object.values(data)[1])[i].indexOf(" ") + 1); 
      }
      if (OHLC=='openData') {
        var chartData = {
          labels: time,
          datasets: [
            {
              label:OHLC.toUpperCase().replace('DATA',''),
              data:openData,
              borderColor:'black'
            }
          ]
        }        
      }else if (OHLC=='highData') {
        var chartData = {
          labels: time,
          datasets: [
            {
              label:OHLC.toUpperCase().replace('DATA',''),
              data:highData,
              borderColor:'black'
            }
          ]
        } 
      }else if (OHLC=='lowData') {
        var chartData = {
          labels: time,
          datasets: [
            {
              label:OHLC.toUpperCase().replace('DATA',''),
              data:lowData,
              borderColor:'black'
            }
          ]
        } 
      }else if (OHLC=='closeData') {
        var chartData = {
          labels: time,
          datasets: [
            {
              label:OHLC.toUpperCase().replace('DATA',''),
              data:closeData,
              borderColor:'black'
            }
          ]
        } 
      }else if (OHLC=='volumeData') {
        var chartData = {
          labels: time,
          datasets: [
            {
              label:OHLC.toUpperCase().replace('DATA',''),
              data:volumeData,
              borderColor:'black'
            }
          ]
        } 
      }
     
      return ( 
        
        <div className = "">
          <Line data={chartData} 
            options={{
              title:{
                display:true,
                text:name + ' stocks',
                fontSize:25
              },
              legend:{
                display:true,
                position:'right'
              },
            }}
          />
        </div>
      )
    }
  }

}

export default DisplayGraph;
