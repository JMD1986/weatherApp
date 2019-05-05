import React from "react";
import {
  Button,
  ListItem,
  List,
  ListItemText,
  Avatar,
  Typography,
  Paper
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import moment from "moment";
class FiveDayForecast extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      weather: this.props.weather.filter(
        day => this.props.weather.indexOf(day) % 8 === 0
      ),
      zipCode: 37377,
      countryCode: "us",
      open: false
    };
    this.daysToMap = [];
  }
  returnState = () => {
    console.log("data" + this.state.weather);
    console.log(
      "day " + moment.unix(this.props.weather[9].dt).format("MM/DD/YYYY h:mm A")
    );
  };

  extractFiveDay = () => {
    if (this.props.weather[0]) {
      return this.props.weather.map(day => {
        if (this.props.weather.indexOf(day) % 8 === 0) {
          console.log(day);
          return (
            <ListItem key={day.dt}>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <ListItemText
                primary={`${day.main.temp}°`}
                secondary={moment
                  .unix(day.dt)
                  .format("dddd, MMMM Do YYYY, h:mm A")}
              />
            </ListItem>
          );
        } else {
          return null;
        }
      });
    }
  };

  render() {
    if (this.props.weather[0]) {
      return (
        <div>
          <Paper>
            <Typography component="h2" variant="h4" gutterBottom>
              Five Day Forecast
            </Typography>
          </Paper>
          {this.extractFiveDay()}
          <Button onClick={this.returnState}>check</Button>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default FiveDayForecast;
