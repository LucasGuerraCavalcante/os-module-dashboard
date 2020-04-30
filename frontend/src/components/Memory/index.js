import React from 'react'; 
import './style.css'

import axios from 'axios';

export default class Memory extends React.Component {

  state = { free: 0, usage: 0, total: 0 }

  componentDidMount() {
    try {
      setInterval(async () => {
        axios.get('http://localhost:3333')
          .then(res => {
            const free = res.data.memory.free;
            const usage = res.data.memory.usage;
            const total = res.data.memory.total;
            this.setState({ free, usage, total });
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
        <p>{this.state.free}</p>
        <p>{this.state.usage}</p>
        <p>{this.state.total}</p>
      </div>
    )
  }

}
