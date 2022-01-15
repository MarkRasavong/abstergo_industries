const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT
};

// alternative 
//const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.DATABASE}`


const proConfig = {
    //alternative w/o connectionString key
    connectionString: process.env.DATABASE_URL //heroku addon
}

const pool = new Pool(
    //alternative add connection string in front of env file
    process.env.NODE_ENV === 'production' ? proConfig : devConfig
);

module.exports = pool;