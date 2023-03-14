const axios = require('axios');
const knex = require('../connection/db_connection')

module.exports = class userController {
    constructor() { }


 async getUsers(req, res) {
    const result =  await knex
        .select("*")
        .from("user_registration")
        // .then((result)=>{
            
            // console.log(data);
           return res.status(200).json({success:true, data:result})


        // }).catch((err)=>{
        //     console.log(err);
        //     res.status(200).json({
        //         success:false,
        //         message:message.err
        //     })
        // })
    }

   async  axiosGetData(req,res){
        const axiosRes = await axios.get('http://localhost:8800/getusers');
        res.status(200).json({data:axiosRes.data});
    }

    async createUser(req,res){
        
            const data = req.body;
            const result = await knex("user_registration").insert(data);
           return res.status(200).json({success:true, data:result});
    };

    async  axioscreateUser(req,res){
        try {
            const data = req.body;
            const axiosRes = await axios.post('http://localhost:8800/createuser', data)
            res.status(200).json({success:true, createduser:data, message:'user created successfully,'})
        } catch (error) {
            console.log(error)
            res.status(500).json({success:false, message:error.message})
            
        }
    };

    
};