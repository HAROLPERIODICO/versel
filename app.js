require('dotenv').config()


const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('Server  peticion recibida')
    res.send('<h1>Hola Harol Díaz Meléndez ya en GITHUB desde node cero</h1>')
})
 
const PORT = process.env.PORT || 4000
app.set('port', PORT)

app.listen(PORT, () => {
    console.log('Server escuchando 4000')
})