import React from 'react'; 
import './style.css'

import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import { Chart, BarSeries, Title, ArgumentAxis, ValueAxis,} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

export default class Memory extends React.Component {

  state = { free: 0, usage: 0, total: 0, data: [{lable: 'usage', memory: 0},{lable: 'free', memory: 0}]}

  componentDidMount() {
    try {
      setInterval(async () => {
        axios.get('http://localhost:3333')
          .then(res => {
            const free = res.data.memory.free;
            const usage = res.data.memory.usage;
            const total = res.data.memory.total;
            const data = [{lable: 'Usage', memory: usage},{lable: 'Free', memory: free}]
             
            this.setState({ free, usage, total, data });
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
        <div>
          <Paper>
            <Chart
              data={this.state.data}
              >
                <ArgumentAxis />
                  <ValueAxis max={2} />

                  <BarSeries
                    valueField="memory"
                    argumentField="lable"
                  />
                <Title text="Memory Usage" />
              <Animation />
            </Chart>
          </Paper>
        </div>
      </div>
    )
  }

}
