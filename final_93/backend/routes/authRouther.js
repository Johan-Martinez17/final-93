import express from 'express'
import { userRegister } from '../Controllers/authController.js'
import { login } from '../Controllers/loginController.js'



const authRouther = express.Router()

authRouther.post('/register', userRegister )

authRouther.post('/login', login )



export default authRouther