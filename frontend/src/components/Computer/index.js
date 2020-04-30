import React from 'react'; 
import './style.css'

import axios from 'axios';

export default class Computer extends React.Component {

  state = { arch: '', platform: '', hostname: '', release: '', type: '' }

  componentDidMount() {
    try {
      axios.get('http://localhost:3333')
        .then(res => {
          const arch = res.data.computer.arch;
          const platform = res.data.computer.platform;
          const hostname = res.data.computer.hostname;
          const release = res.data.computer.release;
          const type = res.data.computer.type;
          // console.log(apiData)
          this.setState({ arch, platform, hostname, release, type});
      })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="Computer">
        <h1>Hello Comp</h1>
        <p>{this.state.type} - {this.state.release} - {this.state.platform} - {this.state.arch}</p>
        <p>Hostname: {this.state.hostname}</p>
      </div>
    )
  }

}
