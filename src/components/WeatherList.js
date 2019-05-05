import React from 'react';
import {Input, Button, TextField, Modal, Typography, AppBar, Card, ListItem, List, ListItemText, Avatar } from "@material-ui/core";
import FiveDayForecast from './FiveDayForecast';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import SimpleAppBar from './appBar';
class WeatherList extends React.Component{
  constructor(props) {
    super(props);
    this.state = { weather: '', zipCode: 37377, countryCode: 'us', open: false };
    }
    AddZipToState = (e) => {
        this.setState({zipCode : e.target.value})
    }
    weatherSearch = () => {
        if (this.state.zipCode.toString().length!==5){
            this.switchModal()
        } else {
            this.props.fetchWeather(this.state.zipCode)
        }
    }

    returnState=()=>{
        console.log(this.props.weather)
    }
    switchModal = ()=>{
        this.setState({open: !this.state.open})
    }
    
      weatherValue = ( ) => {
          if (this.props.weather[0]){
            return <div>
                <div>today</div>
             
                <List >
                    <ListItem>
                        <Avatar>
                        <ImageIcon />
                        </Avatar>
                        <ListItemText primary={this.props.weather[0].weather[0].main} secondary="Weather" />
                    </ListItem>
                    <ListItem>
                        <Avatar>
                        <WorkIcon />
                        </Avatar>
                        <ListItemText primary={this.props.weather[0].main.temp} secondary="current Temperature" />
                    </ListItem>
                    <ListItem>
                        <Avatar>
                        <BeachAccessIcon />
                        </Avatar>
                        <ListItemText primary={this.props.weather[0].main.temp_max} secondary="Todays High" />
                    </ListItem>
                    <ListItem>
                        <Avatar>
                        <BeachAccessIcon />
                        </Avatar>
                        <ListItemText primary={this.props.weather[0].main.temp_min} secondary="Todays Low" />
                    </ListItem>
                    </List>        
            </div>
            }else {
          return null
        }
      }
  
    render (){
    return(
        <div>
            <AppBar >WeatherFinder</AppBar>
            <div style={{marginTop :20}}> 
            <Card> 
            <Input value={this.state.zipCode} onChange={this.AddZipToState}/>
            <Button onClick={this.weatherSearch}>search</Button>
            <Button onClick={this.returnState}>check stuff</Button>

            </Card>
            <this.weatherValue />
            <FiveDayForecast weather={this.props.weather} />
            </div>
            <Modal
          
          open={this.state.open}
        >
<Typography>zipcode must be 5 digits<Button onClick={this.switchModal}>Ok</Button></Typography>

        </Modal>
        </div>
    )
    };
};

const mapStateToProps = (state) => {
 return { weather : state.weather}
}

export default connect(mapStateToProps, {fetchWeather})(WeatherList);