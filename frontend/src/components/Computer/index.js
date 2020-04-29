import React from 'react'; 
import './style.css'

import axios from 'axios';

export default class Computer extends React.Component {

  state = {
    apiData: []
  }

  componentDidMount() {
    try {
      axios.get('http://localhost:3333')
      .then(res => {
        const apiData = res.data.computer;
        // console.log(apiData)
        this.setState({ apiData });
      })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="Computer">
        <h1>Hello Comp</h1>
        <p>{this.state.apiData.arch}</p>
        <p>{this.state.apiData.platform}</p>
        <p>{this.state.apiData.hostname}</p>
        <p>{this.state.apiData.release}</p>
        <p>{this.state.apiData.type}</p>
      </div>
    )
  }

}
