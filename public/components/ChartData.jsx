import React, { Component } from 'react';
var temp = 1;
class ChartData extends Component {     
    constructor(props) {
        super(props);
        console.log('run Constructor');
        this.state = {
            openData:[],
            highData:[],
            lowData:[],
            closeData:[],
            VolumeData:[],
            timeData:[],
            dateData:[],
        }
 
    }
    handleData(openData){
        this.props.handleData(openData)
    }
    componentDidUpdate(){
        var {data} = this.props;
         
        function isEmpty(obj) {
            for(var key in obj) {
              if(obj.hasOwnProperty(key))
              return false;
            }
            return true;
        }
         if(!isEmpty(data) && temp==1) {
            var openDataTemp = [];
            var highDataTemp = [];
            var lowDataTemp = [];
            var closeDataTemp = [];
            var volumeDataTemp = [];
            var timeTemp = [];
            for(var i=0;i<100;i++){
                openDataTemp[99-i] = Object.values(Object.values(Object.values(data)[1])[i])[0];
                highDataTemp[i] = Object.values(Object.values(Object.values(data)[1])[i])[1];
                lowDataTemp[i] = Object.values(Object.values(Object.values(data)[1])[i])[2];
                closeDataTemp[i] = Object.values(Object.values(Object.values(data)[1])[i])[3];
                volumeDataTemp[i] = Object.values(Object.values(Object.values(data)[1])[i])[4];
                timeTemp[99-i] =Object.keys(Object.values(data)[1])[i].substring(Object.keys(Object.values(data)[1])[i].indexOf(" ") + 1);
            }
            this.setState({
                openData:openDataTemp,
                highData:highDataTemp,
                lowData:lowDataTemp,
                closeData:closeDataTemp,
                volumeData:volumeDataTemp,
                time:timeTemp
            })
            temp = 2;
            console.log(this.state.openData);
            

        } 
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default ChartData;