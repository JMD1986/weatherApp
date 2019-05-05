import React from "react";
import {
  ListItem,
  ListItemText,
  Avatar,
  Typography,
  Paper
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";

import moment from "moment";
class FiveDayForecast extends React.PureComponent {
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
        </div>
      );
    } else {
      return null;
    }
  }
}
export default FiveDayForecast;
