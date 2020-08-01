import React, { useRef, useState, useEffect } from 'react'
import { Button } from 'antd'
import Patron from 'cmp/Patron'
import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'

import './App.css'

const fetchData = async setPatrons => {
  const response = await fetch('avatars.json')
  const data = await response.json()
  setPatrons(data)
}

const App = () => {
  const [patrons, setPatrons] = useState([])
  const [fontSize, setFontSize] = useState(10)
  const [visibility, setVisibility] = useState('hidden')
  const patronPanelEl = useRef(null)
  const patronPanelContentEl = useRef(null)

  useEffect(() => {
    fetchData(setPatrons)
  }, [])

  useEffect(() => {
    const parentHeight = patronPanelEl.current.offsetHeight
    const contentHeight = patronPanelContentEl.current.offsetHeight
    if (parentHeight < contentHeight) {
      setFontSize(prevFontSize => prevFontSize - 0.1)
    } else {
      setVisibility('visible')
    }
  })

  return (
    <>
      <Button
        onClick={() => {
          html2canvas(document.querySelector('#canvas')).then(canvas => {
            let imageData = canvas.toDataURL('image/png', 1.0)
            saveAs(imageData, 'poster.png')
          })
        }}
        className="m-4"
      >
        Save
      </Button>
      <div id="canvas">
        <h2 className="p-4 text-6xl">Генерал ЗУПИНИЛОСЯ</h2>
        <div className="patron-panel" ref={patronPanelEl}>
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
      </div>
    </>
  )
}

export default App
