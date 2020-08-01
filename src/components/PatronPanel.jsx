import React, { useRef, useState, useEffect } from 'react'
import Patron from './Patron'

const PatronPanel = ({ folder, avatars }) => {
  const [fontSize, setFontSize] = useState(10)
  const [visibility, setVisibility] = useState('hidden')
  const patronPanelEl = useRef(null)
  const patronPanelContentEl = useRef(null)

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
      <h2 className="p-4 text-6xl">{folder}</h2>
      <div className="patron-panel" ref={patronPanelEl}>
        <div
          className="patron-panel-content"
          ref={patronPanelContentEl}
          style={{ visibility }}
        >
          {avatars.map((patron, i) => (
            <Patron key={i} {...{ folder, patron, fontSize, visibility }} />
          ))}
        </div>
      </div>
    </>
  )
}

export default PatronPanel
