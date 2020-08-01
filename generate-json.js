const fs = require('fs')

const testFolder = './public/avatars/'

fs.readdir(testFolder, (err, files) => {
  fs.writeFile('./public/avatars.json', JSON.stringify(files), 'utf8', () => {})
})
