const {Pool} = require('pg')
const pg = require('pg')
const dotenv = require('dotenv')
dotenv.config()

const connectionString = ({
  user:"postgres",
  password:"postgres",
  host:"localhost",
  port:5432,
  database:"booklib"

})


const pool = new pg.Pool(connectionString);


pool.connect()
.then(() =>console.log("Connected to booklib db Successfully"))

// const createTable

const query = pool.query(
  `CREATE TABLE IF NOT EXISTS users
                      (   id SERIAL PRIMARY KEY    NOT NULL,
                      firstName   VARCHAR(255)     NOT NULL,
                      lastName    VARCHAR(255)     NOT NULL,
                      address     VARCHAR(255)     NOT NULL,
                      email       VARCHAR(255)     NOT NULL,
                      password    VARCHAR(255)     NOT NULL,
                      status VARCHAR(100)  DEFAULT 'unverified',
                      isAdmin     BOOLEAN    NOT NULL           
                                )`

)


.then(() => pool.query("insert into users values($1,$2,$3,$4,$5,$6,$7,$8)",[6,'Ritah','Namaara','mbarara','ritah@gmail.com','hello','unverified',true]))
.then(() => pool.query('select * from users'))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => pool.end())


pool.on('remove', () => {
  process.exit(0);
});





module.export = pool

require('make-runnable');


// // // .then(() => client.query("insert into users values($1,$2)",[1,'Racheal']))
// // // // .then(() => client.query( "select * from users where name =$1",["Racheal"]))
// // // // .then(results => console.table(results.rows))
// // .catch(e => console.log(e))
// // .finally(() => client.end())




