import React, {Component} from 'react';
import DisplayCount from "./components/DisplayCount"
import DailyReport from "./components/DailyReport"
import axios from "axios"; // axios is an npm package for fetching data.

const month = {}; // Empty initial object for storing daily AC and heating data.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heatingData: [],
      acData: [],
      airConditioningCount: 0,
      heatingCount: 0
    }
  }

  componentDidMount = () => {
    this.getHourlyData();
  }

  getDailyData = (wholeDay) => {
    const day = new Date(parseInt(`${wholeDay[0].time}000`, 10)).getDate(); // This variable converts UNIX timestamp passed in from wholeDay argument to a day in each month.

    // This check adds heating and AC properties to "month" object.
    if (month[day] === undefined) {
      month[day] = {
        heating: 0,
        AC: 0
      }
    } else {
      month[day] = null;
    }
    // This loops iterates through every hour of each day and increments up
    // AC and heating by 1 into the "month" object.
    wholeDay.forEach(hour => {
      if (hour.temperature > 75) {
        month[day].AC = month[day].AC + 1;
      } else if (hour.temperature < 62) {
        month[day].heating = month[day].heating + 1;
      }
    });
  };

  getHourlyData = () => {
    // This method loops through 30 days worth of weather data for the month of // April.
    for (let i = 1; i <= 30; i++) {

      const proxy = `https://cors-anywhere.herokuapp.com/`;
      const apiURL = `https://api.darksky.net/forecast/8b01861d3b06ab86ba285ef08d52c88d/45.5898,-122.5951,2018-04-${[i] < 10 ? "0" + [i] : [i]}T17:00:00`;

      axios(proxy + apiURL)
        .then(response => {
          this.getDailyData(response.data.hourly.data); // This method is called and accepts daily data as an argument.
          return response.data.hourly.data;
        })
        .then(res => {

          // All the hourly data of each day is pushed into the AC and heating data arrays.
          this.setState(prevState => ({
            acData: [...prevState.acData, res],
            heatingData: [...prevState.heatingData, res]
          }))

          // This iterates through every single hour of the month and increments
          // whenever the temperature passes the AC or heating threshold.
          res.forEach(id => {
            if (id.temperature > 75) {
              this.setState(prevState => ({
                airConditioningCount: prevState.airConditioningCount + 1
              }))
            } else if (id.temperature < 62) {
              this.setState(prevState => ({
                heatingCount: prevState.heatingCount + 1
              }))
            }
          })
        })
    }
  }

  render() {
    return (<div className="App" >
      <h1 className="title">HVAC Report </h1>
      <h3 className="subtitle">(Month of April 2018)</h3>
      <div className="display-total-container">
        <DisplayCount
          countTitle={"Total AC Count"}
          countTotal={this.state.airConditioningCount} />
        <DisplayCount
          countTitle={"Total Heating Count"}
          countTotal={this.state.heatingCount} />
      </div>
      {/* "month" object is iterated and renders "DailyReport" component with total AC and heating count for each day. */}
      <div className="daily-count-container">{Object.keys(month).map((item, i) => (
        <DailyReport
          key={i}
          day={i + 1}
          dailyAC={month[item].AC}
          dailyHeating={month[item].heating} />
      ))}
      </div>
    </div>
    );
  }
}

export default App;
