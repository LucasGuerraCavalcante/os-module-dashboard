import React from 'react'; 
import './style.css'

import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import { Chart, BarSeries, Title, ArgumentAxis, ValueAxis, Legend } from '@devexpress/dx-react-chart-material-ui';
import { Animation, Stack } from '@devexpress/dx-react-chart';

export default class Memory extends React.Component {

  state = { free: 0, usage: 0, total: 0, percents: 0, 
            dataBar: [{usage: 'usage', memory: 0},{total: 'free', memory: 0}],
            dataArea: [{ memory: 'total', usage: 0, free: 0}]}

  componentDidMount() {
    try {
      setInterval(async () => {
        axios.get('http://localhost:3333')
          .then(res => {
            const free = res.data.memory.free;
            const usage = res.data.memory.usage;
            const total = res.data.memory.total;
            const percents = res.data.memory.percents;
            const dataBar = [{usage: 'Usage', memory: usage},{total: 'Total', memory: total}];
            const dataArea = [{ memory: `Total (${total} MB)`, usage: usage, free: free}]
             
            this.setState({ free, usage, total, percents, dataBar, dataArea });
        })
      }, 1000)
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="containerMemory">
        <div className="header">
          <h1>Hello Memory</h1>
        </div>

        {/* <div className="memoryInfo">
          <p>{this.state.free}</p>
          <p>{this.state.usage}</p>
          <p>{this.state.total}</p>
          <p>{this.state.percents}</p>
        </div> */}
        <div className="bar">
          <Paper>
            <Chart
              data={this.state.dataBar}
              >
                <ArgumentAxis />
                  {/* <ValueAxis /> */}
                  <BarSeries
                      name={`Usage (${this.state.usage} MB)`}
                      valueField="memory"
                      argumentField="usage"
                      color="#7159C1"
                    />
                    <BarSeries
                      name={`Total (${this.state.total} MB)`}
                      valueField="memory"
                      argumentField="total"
                      color="#FF5533"
                    />
                <Title text="Memory Usage (MB)" />
                <Legend position="right" />
              <Animation />
            </Chart>
          </Paper>
      </div>
      <div className="pie">
      <Paper>
        <Chart
          data={this.state.dataArea}
        >
            <ArgumentAxis />
            {/* <ValueAxis
              tickFormat={scale => scale.tickFormat(null, '%')}
            /> */}
              <BarSeries
                name={`Usage (${100 - this.state.percents}%)`}
                valueField="usage"
                argumentField="memory"
                color="#7159C1"
              />
              <BarSeries
                name={`Free (${this.state.percents}%)`}
                valueField="free"
                argumentField="memory"
                color="#00FF00"
              />
            <Animation />
            <Legend position="right" />
            <Title text="Memory Usage (%)" />
            <Stack
              stacks={[
                { series: [`Usage (${100 - this.state.percents}%)`, `Free (${this.state.percents}%)`] },
              ]}
            />
        </Chart>
      </Paper>
      </div>
    </div>
    )
  }

}
