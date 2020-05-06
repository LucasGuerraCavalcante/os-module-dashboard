import React from 'react'; 
import './style.css'

import axios from 'axios';

export default class Datetime extends React.Component {

  state = { weekDay: '', day: '00', month: '00', year: '0000', hour: '00', minutes: '00' }

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
            this.setState({ weekDay, day, month, year, hour, minutes });
        })
      }, 2000)
    } catch(err) {
      console.log(err)
    }
  }

  render() {

    const defaultStyle = { color: "#666", background: "#CCC", margin: "0.5rem" }
    const currentDayStyle = { color: "#FF5533", fontSize: "30px" }

    let sunday = defaultStyle
    let monday = defaultStyle 
    let tuesday = defaultStyle
    let wednesday = defaultStyle
    let thursday = defaultStyle
    let friday = defaultStyle
    let saturday = defaultStyle

    if (this.state.weekDay === "Monday") { monday = currentDayStyle }
    else if (this.state.weekDay === "Tuesday") { tuesday = currentDayStyle }
    else if (this.state.weekDay === "Wednesday") { wednesday = currentDayStyle }
    else if (this.state.weekDay === "Thursday") { thursday = currentDayStyle }
    else if (this.state.weekDay === "Friday") { friday = currentDayStyle }
    else if (this.state.weekDay === "Saturday") { saturday = currentDayStyle }
    else if (this.state.weekDay === "Sunday") { sunday = currentDayStyle }

    return (
      <div className="container">
        <div className="clock">
          <p>{this.state.hour}:{this.state.minutes}</p>
        </div>
        <div className="date">
        {this.state.month}/{this.state.day}/{this.state.year}
        </div>
        <div className="week">
          {this.state.weekDay}
        </div>
        <div className="weekDayBoxes">
          <div className="dayBox" style={sunday}>Sun</div>
          <div className="dayBox" style={monday}>Mon</div>
          <div className="dayBox" style={tuesday}>Tues</div>
          <div className="dayBox" style={wednesday}>Wed</div>
          <div className="dayBox" style={thursday}>Thurs</div>
          <div className="dayBox" style={friday}>Fri</div>
          <div className="dayBox" style={saturday}>Sat</div>
        </div>
      </div>
    )
  }

}
