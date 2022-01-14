const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres4404",
    host: "localhost",
    port: 5432,
    database: "abstergo_industries"
});

module.exports = pool;