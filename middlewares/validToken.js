const jwt=require('jsonwebtoken')

const validToken=(req,res,next)=>{
    let token;
    let authHeader=req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith('Bearer')){
        token=authHeader.split(" ")[1];
        if(!token){
            return res.status(401).json({message:"NO token, authorization denied "})
        }

        try {
            const decode=jwt.verify(token,process.env.JWT_KEY);
            req.user=decode;
            console.log(req.user)
            next();
        } catch (error) {
            res.status(400).json({message:'Token is not valid'})
            
        }
    }else{
        res.status(400).json({message:'No Token authorizaton denied'})
    }
}


module.exports=validToken