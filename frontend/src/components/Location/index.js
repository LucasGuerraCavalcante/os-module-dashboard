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
        // console.log(apiData)
        this.setState({ apiData });
      })
  }

  render() {
    return (
      <div className="Location">
        <h1>Hello Location</h1>
        <p>{this.state.apiData.countryCode}</p>
        <p>{this.state.apiData.country}</p>
        <p>{this.state.apiData.regionCode}</p>
        <p>{this.state.apiData.region}</p>
        <p>{this.state.apiData.city}</p>
        <p>{this.state.apiData.continent}</p>
        <p>{this.state.apiData.latitude}</p>
        <p>{this.state.apiData.longitude}</p>
        <p>{this.state.apiData.currency}</p>
        <p>{this.state.apiData.currencyCode}</p>
      </div>
    )
  }

}
