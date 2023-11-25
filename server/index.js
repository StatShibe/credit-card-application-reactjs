const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : '',
    database : 'trial'
  }
});

knex('tableName')
  .where('colName', 'something')
  .then(res => console.log(res));