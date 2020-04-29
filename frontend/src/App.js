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
      <h1>Hello World</h1>
      <div>
        <Datetime />
        <Location />
      </div>
      <div>
        <Computer />
        <Network />
      </div>
      <div>
        <Memory />
      </div>
    </div>
  )
}

export default App
