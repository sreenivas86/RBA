const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum:['admin','manager','user']
    },
})


module.exports=mongoose.model("User",userSchema);