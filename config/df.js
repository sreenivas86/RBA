const mongoose =require ('mongoose');

const dbConfig=()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log('mongodb connected sucsessfully')
    }).catch((err)=>{
        console.log("error is: ",err)
    })
    
}

module.exports=dbConfig;