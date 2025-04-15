import UserModel from "../models/userModels.js";
import jwt from "jsonwebtoken";

class UserServices{
    static async registerUser(email, password) {
        try{
            console.log("Email: ",email," Password: ",password);
            const creatuser = new UserModel({email,password});
            return await creatuser.save();
        }
        catch(err){
            console.log(err);
        }
    }

    static async getUserByEmail(email){
        try{
            return await UserModel.findOne({email});
        }
        catch(err){
            console.log(err);
        }
    }
    static async checkUser(email){
        try{
            return await UserModel.findOne({email});
        }
        catch(err){
            console.log(err);
        }
    } 
    static async generateToken(tokenData, JWTSecret_key,expiryTime){
        try{
            return jwt.sign(tokenData,JWTSecret_key,{expiresIn:expiryTime});
        }
        catch(err){
            console.log(err);
        }
    }
}
export default UserServices;