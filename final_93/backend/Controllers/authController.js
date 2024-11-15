import mongoose from "mongoose"
import User from "../entities/user.entitie.js"
import bcrypt from 'bcrypt'


export const userRegister = async (req, res) => {
    //desestructurar el body

    const {firstName,
        lastName,
        email,
        password,
        isAdmin} = req.body 
   
        const vUser= await User.findOne({email: req.body.email})
     if (vUser) {
         res.status(400).json({"message": "Ya existe el usuario"})
     }else{
 
         const salt = await bcrypt .genSalt(10)
         const bcPassword = await bcrypt.hash(password, salt)
 
         const newUser = await User.create({firstName, lastName, email, bcPassword, isAdmin})
       
     
     }
 
   
}
