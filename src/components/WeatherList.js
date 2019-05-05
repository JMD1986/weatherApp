import React from 'react';
import {Input, Button, TextField, Modal, Typography } from "@material-ui/core";
import FiveDayForecast from './FiveDayForecast';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class PostList extends React.Component{
  constructor(props) {
    super(props);
    this.state = { weather: '', zipCode: 37377, countryCode: 'us', open: false };
    }
    AddZipToState=(e)=>{
        this.setState({zipCode : e.target.value})
    }
    apiKey="f6a6fec7e553937429cc047053a9c580"
    cityID=2172797;

    returnState=()=>{
        console.log(this.props.weather)
    }
    switchModal = ()=>{
        this.setState({open: !this.state.open})
    }
    weatherBalloon=() =>{
        if (this.state.zipCode.toString().length !==5){
            this.switchModal()
        } else {
            fetch('https://api.openweathermap.org/data/2.5/forecast?zip=' + this.state.zipCode + ',' + this.state.countryCode + '&appid=' + this.apiKey + '&units=imperial')  
            .then((resp)=> { return resp.json() }) // Convert data to json
            .then((data) =>{
                console.log(data.list)
              this.setState({weather:data.list })
    
            })
            .catch(function() {
              // catch any errors
            });
        }
   
      }
      fiveDayForecast = () =>{
        
      }



      weatherValue = ( ) => {
          if (this.props.weather[0]){
            //   return <TextField value={this.state.weather[0].main}/>
            return <div>
                <div>today</div>
                <TextField value={this.props.weather[0].weather[0].main}/>
                <TextField value={this.props.weather[0].main.temp}/>
                <TextField value={this.props.weather[0].main.temp_min}/>
                <TextField value={this.props.weather[0].main.temp_max}/>             
            </div>
            }else {
          return null
        }
      }
    //   componentDidMount(){
    //       this.props.fetchWeather();
    //   }
    render (){
        console.log(this.props.weather[0])
    return(
        <div>
            <Input value={this.state.zipCode} onChange={this.AddZipToState}/>
            <Button onClick={()=>this.props.fetchWeather(37377)}>search</Button>
            <Button onClick={this.returnState}>check stuff</Button>
            <this.weatherValue />
            <FiveDayForecast weather={this.props.weather} />
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

export default connect(mapStateToProps, {fetchWeather})(PostList);