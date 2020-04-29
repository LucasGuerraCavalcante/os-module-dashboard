import React from 'react'; 
import './style.css'

import axios from 'axios';

export default class Memory extends React.Component {

  state = {
    apiData: []
  }

  componentDidMount() {
    try {
      setInterval(async () => {
        axios.get('http://localhost:3333')
          .then(res => {
            const apiData = res.data.memory;
            // console.log(apiData)
            this.setState({ apiData });
        })
      }, 1000)
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="Memory">
        <h1>Hello Memory</h1>
        <p>{this.state.apiData.free}</p>
        <p>{this.state.apiData.usage}</p>
        <p>{this.state.apiData.total}</p>
      </div>
    )
  }

}
