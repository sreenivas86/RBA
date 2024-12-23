
const admin=(req,res)=>{
    res.status(200).json({message:"<h1> this is admin interface </h1>"})
}
const manager=(req,res)=>{
    res.json({message:"<h1> this is manager interface </h1>"})
}
const user=(req,res)=>{
    res.json({message:"<h1> this is end-user interface </h1>"})
}

module.exports={admin,manager,user}