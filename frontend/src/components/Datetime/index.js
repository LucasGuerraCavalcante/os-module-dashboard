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

    const currentDay = { color: "#FF5533", fontSize: "30px" }

    let monday = { color: "#666", background: "#CCC", margin: "0.5rem" }
    let tuesday = { color: "#666", background: "#CCC", margin: "0.5rem" }
    let wednesday = { color: "#666", background: "#CCC", margin: "0.5rem" }
    let thursday = { color: "#666", background: "#CCC", margin: "0.5rem" }
    let friday = { color: "#666", background: "#CCC", margin: "0.5rem" }
    let saturday = { color: "#666", background: "#CCC", margin: "0.5rem" }
    let sunday = { color: "#666", background: "#CCC", margin: "0.5rem" }

    if (this.state.weekDay === "Monday") { monday = { color: "#FF5533", fontSize: "30px" } }
    else if (this.state.weekDay === "Tuesday") { tuesday = { color: "#FF5533", fontSize: "30px" }  }
    else if (this.state.weekDay === "Wednesday") { wednesday = { color: "#FF5533", fontSize: "30px" }  }
    else if (this.state.weekDay === "Thursday") { thursday = { color: "#FF5533", fontSize: "30px" }  }
    else if (this.state.weekDay === "Friday") { friday = { color: "#FF5533", fontSize: "30px" }  }
    else if (this.state.weekDay === "Saturday") { saturday = { color: "#FF5533", fontSize: "30px" }  }
    else if (this.state.weekDay === "Sunday") { sunday = { color: "#FF5533", fontSize: "30px" }  }

    return (
      <div className="container">
        {/* <h1>Hello Datetime</h1> */}
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
          <div className="dayBox" style={monday}>Mon</div>
          <div className="dayBox" style={tuesday}>Tues</div>
          <div className="dayBox" style={wednesday}>Wed</div>
          <div className="dayBox" style={thursday}>Thurs</div>
          <div className="dayBox" style={friday}>Fri</div>
          <div className="dayBox" style={saturday}>Sat</div>
          <div className="dayBox" style={sunday}>Sun</div>
        </div>
      </div>
    )
  }

}
