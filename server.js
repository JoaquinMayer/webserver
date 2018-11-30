const express = require('express')
const hbs = require('hbs');

const app = express()

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Joaquin',
        anio: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    })
})

app.get('/data', (req, res) => {

    res.send("Hola Data")
})

app.listen(8080, () => {
    console.log('Escuchando peticiones en el puerto 8080');
})