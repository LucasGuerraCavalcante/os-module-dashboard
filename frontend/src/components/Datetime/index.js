import React from 'react'; 
import './style.css'

import axios from 'axios';

export default class Datetime extends React.Component {

  state = { weekDay: '', day: '', month: '', year: '', hour: '', minutes: '' }

  componentDidMount() {
    try {
      setInterval(async () => {
        axios.get('http://localhost:3333')
          .then(res => {
            const weekDay = res.data.datetime.weekDay;
            const day = res.data.datetime.day;
            const month = res.data.datetime.month;
            const year = res.data.datetime.year;
            const hour = res.data.datetime.hour;
            const minutes = res.data.datetime.minutes;
            console.log(res.data.datetime.weekDay)
            this.setState({ weekDay, day, month, year, hour, minutes });
        })
      }, 2000)
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="Datetime">
        <h1>Hello Datetime</h1>
        <p>{this.state.weekDay} - {this.state.month}/{this.state.day}/{this.state.year} - {this.state.hour}:{this.state.minutes}</p>
      </div>
    )
  }

}
