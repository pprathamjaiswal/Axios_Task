const config = require('../config');
const mysql2 = require('mysql2');



const knex = require('knex')({
    client:"mysql2",
    connection:{
        port:config.port,
        user:config.mysql.user,
        password:config.mysql.password,
        host:config.mysql.host,
        database:config.mysql.database
    }
});

knex.raw(`use ${config.mysql.database} `).then(()=> console.log(`database connected succesfully.`));

module.exports  = knex;