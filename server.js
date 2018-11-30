const express = require('express')
const hbs = require('hbs');
require('./hbs/helpers/helpers');

const app = express()

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'JoAqUiN mAyEr',
    })
})

app.get('/about', (req, res) => {

    res.render('about')
})

app.get('/data', (req, res) => {

    res.send("Hola Data")
})

app.listen(8080, () => {
    console.log('Escuchando peticiones en el puerto 8080');
})