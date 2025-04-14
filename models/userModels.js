import db from "./database/db.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";


const { Schema } = mongoose; // deconstructing assignment

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
},{timestamps:true});

UserSchema.pre('save', async function(){
    var user = this;
    if(!user.isModified('password')){
        return 
    }
    try{
         const salt = await bcrypt.genSaltSync(10);
         const hash = await bcrypt.hashSync(user.password, salt);

         user.password = hash;
    }
    catch(err){
        console.log(err);
    }
});

UserSchema.methods.comparePassword = async function(password) {
    try{
        console.log("Password: ",password);
        const isValid = await bcrypt.compareSync(password,this.password);
        return isValid;
    }
    catch(err){
        console.log(err);
    }
}
const UserModel = db.model('User',UserSchema);

export default UserModel;