import React from 'react'
import Patron from 'cmp/Patron'

import './App.css'

const patrons = ['bill gates', 'elon musk', 'steve jobs', 'john doe', 'ross geller']

const App = () => (
  <div className="patron-panel">
    {patrons.map(patron => (
      <Patron {...{ patron }} />
    ))}
  </div>
)

export default App
