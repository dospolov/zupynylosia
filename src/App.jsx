import React, { useRef, useState, useEffect } from 'react'
import Patron from 'cmp/Patron'

import './App.css'

const patrons = [
  'bill gates junior the second',
  'elon',
  'd420gsdjg2020jg2gj',
  'sam.jones@outlook.com',
  'ross geller'
]

const App = () => {
  const [fontSize, setFontSize] = useState(10)
  const [visibility, setVisibility] = useState('hidden')
  const patronPanelEl = useRef(null)
  const patronPanelContentEl = useRef(null)

  useEffect(() => {
    const parentHeight = patronPanelEl.current.offsetHeight
    const contentHeight = patronPanelContentEl.current.offsetHeight
    if (parentHeight < contentHeight) {
      setFontSize(prevFontSize => prevFontSize - 0.3)
    } else {
      setVisibility('visible')
    }
  })

  return (
    <div
      className="patron-panel"
      ref={patronPanelEl}
      style={{ padding: `${fontSize / 4}rem` }}
    >
      <div
        className="patron-panel-content"
        ref={patronPanelContentEl}
        style={{ visibility }}
      >
        {patrons.map((patron, i) => (
          <Patron key={i} {...{ patron, fontSize, visibility }} />
        ))}
      </div>
    </div>
  )
}

export default App
