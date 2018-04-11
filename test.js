let fs = require('fs')
let stream = fs.createReadStream('./chat.log', 'UTF-8')
let data = ""

stream.once('data', () => {
    console.log('Empieza a leer el fichero')
})

stream.on('data', (chunk) => {
    data += chunk
})

stream.on('end', () => {
    console.log(`Termina de leer el fichero ${data.length}`)
})