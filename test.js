let fs = require('fs')

fs.appendFile('testFile.txt', 'Contenido para el fichero', (err) => {
    if (err) throw err
    console.log("Se han agregado datos al fichero")
})  