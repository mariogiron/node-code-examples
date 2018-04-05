var fs = require('fs')

fs.readdir('.', (err, files) => {
    if (err) throw err
    files.forEach(file => {        
        if(file.endsWith('.md')){            
            fs.readFile(`./${file}`, 'UTF-8', (err, content) => {
                if(err) throw err
                console.log(`\nContenido del fichero: ${file}`)
                console.log(content)
            })
        }
    });
})