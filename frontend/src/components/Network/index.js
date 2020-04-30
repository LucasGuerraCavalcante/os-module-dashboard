import React from 'react'; 
import './style.css'

import axios from 'axios';

export default class Network extends React.Component {

  state = { ipaddress: '' }

  componentDidMount() {
    try {
      axios.get('http://localhost:3333')
        .then(res => {
          const ipaddress = res.data.network.ipaddress;
          // console.log(apiData)
          this.setState({ ipaddress });
      })
    } catch(err) {
      console.log(err)
    }

  }

  render() {
    return (
      <div className="containerNetwork">
        <div className="ip">
          <h1>IP Address</h1>
          <p>{this.state.ipaddress}</p>
        </div>
      </div>
    )
  }

}
