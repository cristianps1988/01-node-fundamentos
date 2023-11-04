const fs = require('fs')

const data = fs.readFileSync('README.MD', 'utf-8')

const newData = data.replace(/React/ig, 'Anglar')

fs.writeFileSync('README2.md', newData)