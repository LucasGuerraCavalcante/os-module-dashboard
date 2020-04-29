import React from 'react'; 
import './style.css'

import axios from 'axios';

export default class Network extends React.Component {

  state = {
    apiData: []
  }

  componentDidMount() {
    axios.get('http://localhost:3333')
      .then(res => {
        const apiData = res.data.network;
        // console.log(apiData)
        this.setState({ apiData });
      })
  }

  render() {
    return (
      <div className="Network">
        <h1>Hello Network</h1>
        <p>{this.state.apiData.remoteip}</p>
        <p>{this.state.apiData.ipaddress}</p>
      </div>
    )
  }

}
