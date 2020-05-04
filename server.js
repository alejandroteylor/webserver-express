// hbs es una libreria que permite coger pantillas y duplicarlas sin necesidad de copiar codigo y pegarlo varias veces en diferentes archivos
const express = require('express')
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//views/parciales
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Alejandro'
    });
});
app.get('/about', (req, res) => {

    res.render('about', {});
})

//app.get('/data', (req, res) => {
//  res.send('Hola data')
//})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})