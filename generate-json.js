const fs = require('fs')
const glob = require('glob')

const rootFolder = './public/avatars'

let avatars = {}

glob(
  '/**/*?(.png|.jpg|.jpeg)',
  {
    root: rootFolder,
    nodir: true
  },
  function (er, files) {
    const clearFiles = files.map(filename => filename.replace(/.+avatars/gi, 'avatars'))
    fs.writeFile('./public/avatars.json', JSON.stringify(clearFiles), 'utf8', () => {})
  }
)
