const express = require('express')
const app = express()
require('dotenv').config()


const MongoClient = require('mongodb').MongoClient;

const url = process.env.DB_STRING
const dbName = 'World-Food-List'

const client = new MongoClient(url);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/api/random_food', (req, res) => {
  try {
    MongoClient.connect(url, { useUnifiedTopology: true }, function(error, client) {
      if(error){
        return console.log('Failed to connect to databse')
      }
      const db = client.db(dbName)

      random_index = Math.floor(Math.random() * 318);
      db.collection('foods').findOne({index_value: random_index}, (error, result) => {
        var returnJSON = {
          food_name: result.food_name,
          index_value: result.index_value,
          type: result.type,
        }
        console.log(Math.random());
        return res.json(returnJSON);
      })
    });
  }catch (e){
    res.sendStatus(400)
  }
})
app.listen(process.env.PORT || '3000');
