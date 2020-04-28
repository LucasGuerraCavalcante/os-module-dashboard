import React from 'react'

import Computer from './components/Computer'
import Datetime from './components/Datetime'
import Location from './components/Location'
import Memory from './components/Memory'
import Network from './components/Network'

import './App.css'

import { getData } from './services/api'

function App() {

  const data = getData() 

  console.log({ data }) 

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Computer />
      <Datetime />
      <Location />
      <Memory />
      <Network />
    </div>
  )
}

export default App
