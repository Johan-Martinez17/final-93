import mongoose from "mongoose";
import colors from 'colors'
import express from "express";



const connectDB = async () => {
    try {
        const conn= await  mongoose.connect(process.env.MONGOURL)
        console.log(`conexion exitosa a mongo: ${conn.connection.host}`.bgCyan.red.bold )
    } catch (error) {
        console.log(`Error al conectar a mongo: ${error}`)
        process.exit(1)
    }

}


export default connectDB