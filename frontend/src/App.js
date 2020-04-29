import React from 'react'

import Computer from './components/Computer'
import Datetime from './components/Datetime'
import Location from './components/Location'
import Memory from './components/Memory'
import Network from './components/Network'

import './App.css'

function App() {

  return (
    <div className="App">
      <div className="header">
        <h1>Hello World</h1>
      </div>
      <div className="datetime">
        <Datetime />
      </div>
      <div className="location">
        <Location />
      </div>
      <div className="computer">
        <Computer />
      </div>
      <div className="network">
        <Network />
      </div>
      <div className="memory">
        <Memory />
      </div>
    </div>
  )
}

export default App
