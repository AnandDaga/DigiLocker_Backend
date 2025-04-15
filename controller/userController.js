import UserServices from "../services/userServices.js";

export const register = async (req,res) => {
    try{
        console.log("Request Body: ",req.body);
        const {email, password} = req.body;
        const duplicateUser = await UserServices.getUserByEmail(email);

        if(duplicateUser){
            return res.status(400).json({message: "User already exists"});
        }
        const user = await UserServices.registerUser(email,password);

        res.json({status :"success", message: "User registered successfully",data : user});
    }
    catch(err){
        console.log(err);
        next(err); // It passes error to the error handler middleware 
    }
}

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        
        if(!email || !password){
            return res.status(400).json({message: "Email and Password are required"});
        }

        let user = await UserServices.checkUser(email);

        if(!user){
            return res.status(400).json({message: "User does not exist"});
        }

        // const  isPasswordMatch = await user.comparePassword(password);

        // if(!isPasswordMatch){
        //     return res.status(400).json({message: "Invalid Password"});
        // }

        // Generate jwt token 
        let tokenData ={
            id: user.id,
            email:user.email,
        }
        const token = await UserServices.generateToken(tokenData, process.env.JWT_SECRET_key, "1h");
        res.status(200).json({status : "Success", message:"User logged in successfully"});
    }
    catch(err){
        console.log(err);        
    }
}
