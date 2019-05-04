import React from 'react';
import {Input, Button, TextField, Modal, Typography } from "@material-ui/core";
import FiveDayForecast from './FiveDayForecast';
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


    grabWeather =()=>{
    //   fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},${this.state.countryCode}}&appid=${this.apiKey}`)
    fetch('api.openweathermap.org/data/2.5/weather?id={'+this.state.zipCode+'},{'+this.state.countryCode+'}id=f6a6fec7e553937429cc047053a9c580&units=imperial')
    .then((response)=> {
    console.log(response);
    })
    }
    returnState=()=>{
        console.log(this.state)
    }
    switchModal = ()=>{
        this.setState({open: !this.state.open})
    }
    weatherBalloon=(type) =>{
        if (this.state.zipCode.toString().length !==5){
            this.switchModal()
        } else {
            fetch('https://api.openweathermap.org/data/2.5/forecast?zip=' + this.state.zipCode + ',' + this.state.countryCode + '&appid=' + this.apiKey + '&units=imperial')  
            .then((resp)=> { return resp.json() }) // Convert data to json
            .then((data) =>{
                console.log(data.list)
              this.setState({weather:data.list })
              console.log(this.state.weather[0])
    
            })
            .catch(function() {
              // catch any errors
            });
        }
   
      }
      fiveDayForecast = () =>{
        
      }



      weatherValue =()=>{
          if (this.state.weather!==''){
            //   return <TextField value={this.state.weather[0].main}/>
            return <div>
                <div>today</div>
                <TextField value={this.state.weather[0].weather[0].main}/>
                <TextField value={this.state.weather[0].main.temp}/>
                <TextField value={this.state.weather[0].main.temp_min}/>
                <TextField value={this.state.weather[0].main.temp_max}/>
             
       

            </div>
            }else {
          return null
        }
      }
    render (){
    return(
        <div>
            <Input value={this.state.zipCode} onChange={this.AddZipToState}/>
            <Button onClick={this.weatherBalloon}>search</Button>
            <Button onClick={this.returnState}>check stuff</Button>
            <this.weatherValue />
            <FiveDayForecast weather={this.state.weather} />
            <Modal
          
          open={this.state.open}
        >
<Typography>zipcode must be 5 digits<Button onClick={this.switchModal}>Ok</Button></Typography>

        </Modal>
        </div>
    )
    };
};
export default PostList;