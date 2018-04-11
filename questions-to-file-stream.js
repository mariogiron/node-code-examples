var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var persona = {
    nombre: '',
    frases: []
}

rl.question("¿Cual es tu nombre?", (answer) => {
    persona.nombre = answer
    let stream = fs.createWriteStream(`${persona.nombre}.md`)
    stream.write(`${persona.nombre}\n====================\n`)
    rl.setPrompt(`${persona.nombre} dime una frase (exit para salir)`)
    rl.prompt()

    rl.on('line', (answer) => {
        if(answer.toLowerCase() === 'exit'){
            stream.close()
            rl.close()
        }else{
            persona.frases.push(answer)
            stream.write(`* ${answer.trim()}\n`)
            rl.setPrompt(`${persona.nombre} dime una frase (exit para salir)`)
            rl.prompt()
        }
    })
})  

rl.on('close', () => {
    process.exit()
})