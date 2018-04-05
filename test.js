var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var persona = {
  name: '',
  palabras: []
};

rl.question("¿Cuál es el nombre de una persona real? ", function(answer){
  persona.name = answer;
  rl.setPrompt(`¿Qué dice ${persona.name}? `);
  rl.prompt();
  rl.on('line', function(saying){
    if (saying.toLowerCase().trim() === 'exit'){
      rl.close();
    }else{
      persona.palabras.push(saying.trim());
      rl.setPrompt(`¿Qué más dice ${persona.name}? ('exit' para salir) `);
      rl.prompt();
    }
  });
});

rl.on('close', function(){
  console.log("%s es una persona real que dice %j", persona.name, persona.palabras);
  process.exit();
});