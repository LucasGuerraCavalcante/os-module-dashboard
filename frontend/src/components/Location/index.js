import React from 'react'; 
import './style.css'

import axios from 'axios';

export default class Location extends React.Component {

  state = {
    apiData: []
  }

  componentDidMount() {
    axios.get('http://localhost:3333')
      .then(res => {
        const apiData = res.data.location;
        console.log(apiData)
      })
  }

  render() {
    return (
      <div className="Location">
        <h1>Hello Location</h1>
        {/* <p>{this.state.apiData.}</p> */}

      </div>
    )
  }

}
