const User=require('../models/User')
const bcrypt= require('bcrypt')
const jwt=require('jsonwebtoken')

const register=async (req,res)=>{
    try {
        let user;
        const {username,password,role}=req.body;
        if (!username || !password || !role){
            res.status(400).json({message:"all fields mandatory"});
        }
        //check 
        user=await User.findOne({username:username});
        if(user)
            return res.status(400).json({message:'USER IS ALREADY EXIT TRY TO LOGIN'})

        // hashed password
        const hashedPassword= await bcrypt.hash(password,14);
        // save data into database
         user = await User.create({
            username:username,
            password:hashedPassword,
            role:role,
        }) 
        console.log(user)
        return res.status(201).json(user)

        
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:error.message})
    }
}
const login=async (req,res)=>{
    const {username,password}=req.body;
    try {
        let user=await User.findOne({username:username})
        if(user && await bcrypt.compare(password,user.password)){
            const accesTocken = await jwt.sign(
                {
                    username:user.username,
                    role:user.role,
                    id:user.id,
                },
                process.env.JWT_KEY,{expiresIn:"15m"}
            )
            return res.status(200).json({token:accesTocken})
        }
        else
            return res.status(400).json({message:"invalid credential"})
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:error.message})
    }
}

module.exports={register,login}
