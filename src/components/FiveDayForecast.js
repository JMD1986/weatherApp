import React from 'react';
import {Input, Button, TextField, Modal, Typography } from "@material-ui/core";
class FiveDayForecast extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = { weather: '', zipCode: 37377, countryCode: 'us', open: false };
    }
 
returnState = ()=>{
  console.log(this.props.weather)
}
    render (){
      if (this.props.weather!==''){
    return (
      <div>


<div>five day</div>
      <TextField value={this.props.weather[9].weather[0].main}/>
      <TextField value={this.props.weather[17].weather[0].main}/>
      <TextField value={this.props.weather[25].weather[0].main}/>
      <TextField value={this.props.weather[33].weather[0].main}/>
      <Button onClick={this.returnState} >check</Button>

      </div>
    )}else {
      return null;
    }
    };
};
export default FiveDayForecast;