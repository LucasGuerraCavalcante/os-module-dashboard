import React from 'react'; 
import './style.css'

import axios from 'axios';
import FlagIconFactory  from 'react-flag-icon-css';
import getSymbolFromCurrency from 'currency-symbol-map';
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup } from "react-simple-maps";

const FlagIcon = FlagIconFactory(React, { useCssModules: false })
export default class Location extends React.Component {

  state = { countryCode: 'af', country: '', regionCode: '', region: '', city: '',
            continent: '', currency: '', currencyCode: '', map: [0,0]}

  componentDidMount() {
    try {
      axios.get('http://localhost:3333')
        .then(res => {
          const countryCode = (res.data.location.countryCode).toLowerCase();
          const country = res.data.location.country;
          const regionCode = res.data.location.regionCode;
          const region = res.data.location.region;
          const city = res.data.location.city;
          const continent = res.data.location.continent;
          const currency = res.data.location.currency;
          const currencyCode = getSymbolFromCurrency(res.data.location.currencyCode);
          const map = [res.data.location.longitude, res.data.location.latitude];

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

          <p> <FlagIcon code={this.state.countryCode} size='1x'/> {this.state.country} - {this.state.city}, {this.state.regionCode} - {this.state.region}</p>
          <p>{this.state.continent}</p>
        </div>
        <div className="currency">
          <p>Currency: {this.state.currencyCode} {this.state.currency}</p>
        </div>
      </div>
    )
  }

}
