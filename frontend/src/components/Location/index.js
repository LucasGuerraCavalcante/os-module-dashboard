import React from 'react'; 
import './style.css'

import axios from 'axios';
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup } from "react-simple-maps";

export default class Location extends React.Component {

  state = { countryCode: '', country: '', regionCode: '', region: '', city: '',
            continent: '', currency: '', currencyCode: '', map: []}

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
          const currency = res.data.location.currency;
          const currencyCode = res.data.location.currencyCode;
          const map = [res.data.location.longitude, res.data.location.latitude];
          console.log(map)

          this.setState({ countryCode, country, regionCode, region, city,
                          continent, currency, currencyCode, map});
      })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="containerLocation">
        {/* <h1>Hello Location</h1> */}
        <div className="map">
          <ComposableMap width={200} height={100}>
          <ZoomableGroup zoom={0.5} center={this.state.map}>
              <Geographies
                geography={"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"}
                fill="#7159C1"
                stroke="#FFFFFF"
                strokeWidth={0.5}
              >
                {({ geographies }) =>
                  geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                }
              </Geographies>
              <Annotation
                subject={this.state.map}
                dx={-90}
                dy={-30}
                connectorProps={{
                  stroke: "#FF5533",
                  strokeWidth: 3,
                  strokeLinecap: "round"
                }}
                >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                  {this.state.city}
                </text>
              </Annotation>
          </ZoomableGroup>
          </ComposableMap>
        </div>
        <div className="info">
          <p>{this.state.city}, {this.state.regionCode} - {this.state.region}, {this.state.country} {this.state.countryCode}</p>
          <p>{this.state.continent}</p>
        </div>
        <div className="currency">
          <p>Currency: {this.state.currencyCode} {this.state.currency}</p>
        </div>
      </div>
    )
  }

}
