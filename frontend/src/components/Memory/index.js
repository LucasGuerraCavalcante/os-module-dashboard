import React from 'react'; 
import './style.css'

import axios from 'axios';

export default class Memory extends React.Component {

  state = {
    apiData: []
  }

  componentDidMount() {
    axios.get('http://localhost:3333')
      .then(res => {
        const apiData = res.data.memory;
        console.log(apiData)
      })
  }

  render() {
    return (
      <div className="Memory">
        <h1>Hello Memory</h1>
        {/* <p>{this.state.apiData.}</p> */}

      </div>
    )
  }

}
