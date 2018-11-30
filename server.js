const express = require('express')
const app = express()

app.get('/', (req, res) => {

    let salida = {
        nombre: 'Joaquin',
        apellido: 'Mayer',
        url: req.url
    }

    res.send(salida)
})

app.get('/data', (req, res) => {

    res.send("Hola Data")
})

app.listen(8080, () => {
    console.log('Escuchando peticiones en el puerto 8080');
})