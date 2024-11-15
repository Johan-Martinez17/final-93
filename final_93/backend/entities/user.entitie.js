import mongoose from "mongoose";


const { Schema } =  mongoose;

const UserSchema = new Schema({
    firstName:{
        require: [true, "Nombre requerido"],
        type: String
    }, 
    lastName:{
        require: [true, "Apellido requerido"],
        type: String
    },
    email: {
        type: String,
        require: [true, "Nombre de usuario requerido"],
        unique: [true, "Este correo ya está en uso"],
        
    }, 
    password:{
        require: [true, "Contraseña es requerida"],
        type: String
    },
    isAdmin: {
        type: Boolean,
        require: [true, "isAdmin es requerido"],
        default: false,
    },

},
{timestamps: true}
)


const User = mongoose.model("User" , UserSchema)
export default User
