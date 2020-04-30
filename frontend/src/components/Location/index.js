import React from 'react'; 
import './style.css'

import axios from 'axios';

export default class Location extends React.Component {

  state = { countryCode: '', country: '', regionCode: '', region: '', city: '',
            continent: '', latitude: '', longitude: '', currency: '', currencyCode: ''}

  componentDidMount() {
    try {
      axios.get('http://localhost:3333')
        .then(res => {
          const countryCode = res.data.location.countryCode;
          const country = res.data.location.country;
          const regionCode = res.data.location.regionCode;
          const region = res.data.location.region;
          const city = res.data.location.city;
          const continent = res.data.location.continent;
          const latitude = res.data.location.latitude;
          const longitude = res.data.location.longitude;
          const currency = res.data.location.currency;
          const currencyCode = res.data.location.currencyCode;

          this.setState({ countryCode, country, regionCode, region, city,
                          continent, latitude, longitude, currency, currencyCode});
      })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="Location">
        <h1>Hello Location</h1>
        <p>{this.state.city}, {this.state.regionCode} - {this.state.region}, {this.state.country} {this.state.countryCode}</p>
        <p>{this.state.continent}, Latitude: {this.state.latitude}, Longitude: {this.state.longitude}</p>
        <p>Currency: {this.state.currencyCode} {this.state.currency}</p>
      </div>
    )
  }

}
