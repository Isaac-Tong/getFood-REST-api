const express = require('express')
const app = express()
require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;

const url = process.env.DB_STRING
const dbName = 'Food-List'

const client = new MongoClient(url);

// MongoClient.connect(url, { useUnifiedTopology: true },  function(error, client) {
//   if(error){
//     return console.log('Failed to connect to databse')
//   }
//   const db = client.db(dbName)
//   db.collection('foods').insertOne({
//     name: 'apple',
//     type: 'fruit'
//   },
//   (error, result) => {
//     if(error){
//       console.log('Cannot insert');
//     }
//     console.log(result.ops);
//   });
//
// });



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json()
})


app.listen(3000);
