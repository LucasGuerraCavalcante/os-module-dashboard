import React from 'react'; 
import './style.css'

import axios from 'axios';

export default class Datetime extends React.Component {

  state = {
    apiData: []
  }

  componentDidMount() {
    axios.get('http://localhost:3333')
      .then(res => {
        const apiData = res.data.datetime;
        console.log(apiData)
      })
  }

  render() {
    return (
      <div className="Datetime">
        <h1>Hello Datetime</h1>
        {/* <p>{this.state.apiData.}</p> */}

      </div>
    )
  }

}