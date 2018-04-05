let fs = require('fs')

let content = fs.readFileSync('./frases.md', 'UTF-8')
console.log(content)

fs.readFile('./frases.md', 'UTF-8', (err, content) => {
    if (err) console.log(err.message)
    console.log(content)
})