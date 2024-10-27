const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '998449598',
  port: 5000,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});