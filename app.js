const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('Server  peticion recibida')
    res.send('<h1>Hola Harol Díaz Meléndez ya en GITHUB desde node cero</h1>')
})
    
app.listen(4000, () => {
    console.log('Server escuchando 4000')
})