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
        console.log(apiData)
      })
  }

  render() {
    return (
      <div className="Network">
        <h1>Hello Network</h1>
        {/* <p>{this.state.apiData.}</p> */}

      </div>
    )
  }

}
