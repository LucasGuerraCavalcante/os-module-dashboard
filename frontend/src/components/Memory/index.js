import React from 'react'; 
import './style.css'

import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import { Chart, BarSeries, Title, ArgumentAxis, ValueAxis, PieSeries, Legend, } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

export default class Memory extends React.Component {

  state = { free: 0, usage: 0, total: 0, percents: 0, 
            dataBar: [{lable: 'usage', memory: 0},{lable: 'free', memory: 0}],
            dataPie: [{lable: 'usage', memory: 0},{lable: 'free', memory: 0}],}

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
            const dataPie = [{usage: 'Usage', memory: total},{free: 'Free', memory: free}]
             
            this.setState({ free, usage, total, percents, dataBar, dataPie });
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
                  <ValueAxis />
                  <BarSeries
                      name={`${this.state.usage} MB`}
                      valueField="memory"
                      argumentField="usage"
                      color="#FF5533"
                    />
                    <BarSeries
                      name={`${this.state.total} MB`}
                      valueField="memory"
                      argumentField="total"
                      color="#7159C1"
                    />
                <Title text="Memory Usage" />
                <Legend />
              <Animation />
            </Chart>
          </Paper>
      </div>
      <div className="pie">
        <Paper>
          <Chart
            data={this.state.dataPie}
          >
            <PieSeries
              valueField="memory"
              argumentField="usage"
            />
            <Title
              text="Free Memory"
            />
            <Animation />
          </Chart>
        </Paper>
      </div>
      </div>
    )
  }

}
