const http = require('http');



http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'alejandro',
            edad: 24,
            url: req.url
        }
        res.write(JSON.stringify(salida))
            //  res.write('Hola a todos');
        res.end();

    })
    .listen(8080);

console.log('escuchando el puerto 8080');