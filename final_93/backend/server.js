import colors from 'colors' 
import express from 'express'
import dotenv from 'dotenv'
import pruebaRouter from './routes/pruebaroutes.js'
import authRouther from './routes/authRouther.js'
import connectDB from './config/db.js'

//leer del .env los datos
dotenv.config()

connectDB()

//crear el objeto
//aplicacion de expresion
const app = express()
app.use(express.json())
const PORT = process.env.PORT

app.use(`/api/pruebas`, pruebaRouter)
app.use(`/api/auth`, authRouther)


//crear servidor express
app.listen (PORT, () => {
    console.log(`servidor ejecutando en puerto ${PORT}`.bgGreen.red.bold)
})


//configurar express para aceptar
//bodys en json
