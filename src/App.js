import React, { Component } from 'react';
import DisplayCount from "./components/DisplayCount"
import axios from "axios";

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

  componentWillMount = () => {
    this.getDailyData();
  }



  getDailyData = () => {

    for (let i = 1; i <= 31; i++) {

      const proxy = `https://cors-anywhere.herokuapp.com/`;
      const apiURL = `https://api.darksky.net/forecast/8b01861d3b06ab86ba285ef08d52c88d/45.5898,-122.5951,2018-05-${[i] < 10 ? "0" + [i] : [i]}T00:00:00`;

      axios(proxy + apiURL)
        .then(response => {
          return response.data.hourly.data;
        })
        .then(res => {
          console.log(res);
          res.forEach(id => {

          if (id.temperature > 75) {
            this.setState(prevState =>({
                acData: prevState.acData.concat(id),
                airConditioningCount: prevState.airConditioningCount + 1
            }))
          } else if (id.temperature < 62){
            this.setState(prevState =>({
              heatingCount: prevState.heatingCount + 1
            }))
            }
          })
        })
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">HVAC Report</h1>
        <h3 className="subtitle">(Month of May)</h3>
        <div className="display-container">
          <DisplayCount
            countTitle={"Total AC Count"}
            countTotal={this.state.airConditioningCount} />
          <DisplayCount
            countTitle={"Total Heating Count"}
            countTotal={this.state.heatingCount} />
        </div>
      </div>
    );
  }
}

export default App;
