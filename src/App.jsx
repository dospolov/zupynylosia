import React, { useRef, useState, useEffect } from 'react'
import { Button } from 'antd'
import PatronPanel from 'cmp/PatronPanel'
import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'

import './App.css'

const fetchData = async setPatrons => {
  const response = await fetch('avatars.json')
  const data = await response.json()
  const patrons = data.reduce((acc, path) => {
    const [, folder, filename] = path.match(/avatars\/(.+)\/(.+)$/)
    return {
      ...acc,
      [folder]: acc[folder]?.length ? [...acc[folder], filename] : [filename]
    }
  }, {})
  setPatrons(patrons)
}

const App = () => {
  const [patrons, setPatrons] = useState({})

  useEffect(() => {
    fetchData(setPatrons)
  }, [])

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
        {Object.keys(patrons).map(folder => (
          <PatronPanel {...{ folder, avatars: patrons[folder] }} />
        ))}
      </div>
    </>
  )
}

export default App
