import React from 'react';
import {Input, Button, TextField, ListItem, List, ListItemText, Avatar } from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import moment from 'moment';
class FiveDayForecast extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = { weather: '', zipCode: 37377, countryCode: 'us', open: false };
    this.daysToMap=[]

    }
returnState = ()=>{
  console.log("data" + (this.props.weather[9].dt))
  console.log("day " + moment.unix(this.props.weather[9].dt).format("MM/DD/YYYY h:mm A"))
}

extractFiveDay = ()=>{
  let list = this.props.weather;
  this.daysToMap = list.filter(day=> list.indexOf(day)%8===0)
}


    render (){
      if (this.props.weather[0]){
    return (
      <div>


<div>five day</div>
     
      <List >
                    <ListItem>
                        <Avatar>
                        <ImageIcon />
                        </Avatar>
                        <ListItemText primary={this.props.weather[9].main.temp} secondary={moment.unix(this.props.weather[9].dt).format("MM/DD/YYYY h:mm A")} />
                    </ListItem>
                    <ListItem>
                        <Avatar>
                        <WorkIcon />
                        </Avatar>
                        <ListItemText primary={this.props.weather[17].main.temp} secondary={moment.unix(this.props.weather[17].dt).format("MM/DD/YYYY h:mm A")} />
                    </ListItem>
                    <ListItem>
                        <Avatar>
                        <BeachAccessIcon />
                        </Avatar>
                        <ListItemText primary={this.props.weather[25].main.temp} secondary={moment.unix(this.props.weather[25].dt).format("MM/DD/YYYY h:mm A")}/>
                    </ListItem>
                    <ListItem>
                        <Avatar>
                        <BeachAccessIcon />
                        </Avatar>
                        <ListItemText primary={this.props.weather[33].main.temp} secondary={moment.unix(this.props.weather[33].dt).format("MM/DD/YYYY h:mm A")} />
                    </ListItem>
                    </List>  
      <Button onClick={this.returnState} >check</Button>

      </div>
    )}else {
      return null;
    }
    };
};
export default FiveDayForecast;