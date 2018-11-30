const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Joaquin',
        anio: new Date().getFullYear()
    })
})

app.get('/data', (req, res) => {

    res.send("Hola Data")
})

app.listen(8080, () => {
    console.log('Escuchando peticiones en el puerto 8080');
})