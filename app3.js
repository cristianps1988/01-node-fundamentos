const fs = require('fs')

const content = fs.readFileSync('README.MD', 'utf-8')
let reactCount = 0

content.split(' ').map(word => {
    if (word.toLocaleLowerCase().includes('react')) {
        reactCount++
    }
    return reactCount;
})

const reactCount2 = content.match(/react/gi ?? []).length



console.log(`El archivo tiene ${reactCount} la palabra "react"`)
console.log(`El archivo tiene ${reactCount2} la palabra "react"`)