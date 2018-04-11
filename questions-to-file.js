var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var persona = {
    nombre: '',
    frases: []
}

rl.question("¿Cual es tu nombre?", (answer) => {
    persona.nombre = answer
    fs.writeFileSync(`${persona.nombre}.md`, `${persona.nombre}\n====================\n`)
    rl.setPrompt(`${persona.nombre} dime una frase (exit para salir)`)
    rl.prompt()

    rl.on('line', (answer) => {
        if(answer.toLowerCase() === 'exit'){
            rl.close()
        }else{
            persona.frases.push(answer)
            fs.appendFile(`${persona.nombre}.md`, `*${answer.trim()}\n`, (err) => {
                if(err) console.log(err.message)
            })
            rl.setPrompt(`${persona.nombre} dime una frase (exit para salir)`)
            rl.prompt()
        }
    })
})  

rl.on('close', () => {
    process.exit()
})