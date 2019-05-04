import React from 'react';
import ReactDOM from 'react-dom';
import {Input, Button, TextField } from "@material-ui/core";
class PostList extends React.Component{
  constructor(props) {
    super(props);
    this.state = { weather: '', zipCode: 37377, countryCode: 'us' };
    }
    AddZipToState=(e)=>{
        this.setState({zipCode : e.target.value})
        console.log(e.target.value)
    }
    apiKey="f6a6fec7e553937429cc047053a9c580"
    cityID=2172797;


    grabWeather =()=>{
    //   fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},${this.state.countryCode}}&appid=${this.apiKey}`)
    fetch('api.openweathermap.org/data/2.5/weather?id={'+this.state.zipCode+'},{'+this.state.countryCode+'}id=f6a6fec7e553937429cc047053a9c580')
    .then((response)=> {
    console.log(response);
    })
    }
    returnState=()=>{
        console.log(this.state)
    }

    weatherBalloon=(type) =>{
        fetch('https://api.openweathermap.org/data/2.5/forecast?zip=' + this.state.zipCode + ',' + this.state.countryCode + '&appid=' + this.apiKey)  
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
      weatherValue =()=>{
          if (this.state.weather!==''){
            //   return <TextField value={this.state.weather[0].main}/>
            return <div>
                <div>today</div>
                <TextField value={this.state.weather[0].weather[0].main}/>
                <TextField value={this.state.weather[0].main.temp}/>
                <TextField value={this.state.weather[0].main.temp_min}/>
                <TextField value={this.state.weather[0].main.temp_max}/>
               <div>five day</div>
               <TextField value={this.state.weather[9].weather[0].main}/>
               <TextField value={this.state.weather[17].weather[0].main}/>
               <TextField value={this.state.weather[25].weather[0].main}/>
               <TextField value={this.state.weather[33].weather[0].main}/>

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
        </div>
    )
    };
};
export default PostList;