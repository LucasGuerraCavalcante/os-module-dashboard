import React from 'react'; 
import './style.css'

import axios from 'axios';

export default class Computer extends React.Component {

  state = {
    apiData: []
  }

  componentDidMount() {
    axios.get('http://localhost:3333')
      .then(res => {
        const apiData = res.data.computer;
        console.log(apiData)
      })
  }

  render() {
    return (
      <div className="Computer">
        <h1>Hello Comp</h1>
        {/* <p>{this.state.apiData.}</p> */}

      </div>
    )
  }

}
