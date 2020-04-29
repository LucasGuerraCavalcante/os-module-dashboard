import React from 'react'; 
import './style.css'

import axios from 'axios';

export default class Network extends React.Component {

  state = {
    apiData: []
  }

  componentDidMount() {
    try {
      axios.get('http://localhost:3333')
      .then(res => {
        const apiData = res.data.network;
        // console.log(apiData)
        this.setState({ apiData });
      })
    } catch(err) {
      console.log(err)
    }

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
