let https = require('https')
let fs = require('fs')

let options = {
    hostname: 'es.wikipedia.org',
    port: 443,
    path: '/wiki/George_Washington',
    method: 'GET'
}

let req = https.request(options, (res) => {
    let responseBody = ""

    console.log('Empieza la respuesta del servidor')
    console.log(`Server Status: ${res.statusCode}`);
    console.log("Response Headers: %j", res.headers);

    res.setEncoding("UTF-8");

    res.once("data", function(chunk){
        console.log(chunk);
    });

    res.on('data', (chunk) => {
        responseBody += chunk
    })

    res.on('end', () => {
        fs.writeFile('GeorgeWashington.html', responseBody, (err) => {
            if(err){
                console.log(err.message)
            }else{
                console.log("Se ha descargado correctamente")
            }
        })
    })
})

req.on('error', (err) => {
    console.log(`Error en la petición ${err.message}`)
})

req.end()