const express = require('express');
const connection = require('./connection/db_connection')
const PORT  = process.env.PORT || 8900;
const routes = require('./routes/Router')
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/',routes)


app.listen(PORT, ()=>{
    console.log(`server is running sucessfully ${PORT}`);
})
