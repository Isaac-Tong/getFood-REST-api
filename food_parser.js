const fs = require('fs');
const lineReader = require('line-reader');
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const url = process.env.DB_STRING
const dbName = 'World-Food-List'
const client = new MongoClient(url);

//CHANGE ARRAY, RANDOM COUNTER, AND TYPE FIELD

var array = ['cuisine_text_files/japanese.txt']

addDB(array);

//Expects an array of file locations and corresponding cuisine
function addDB(fileStringArray){

  //Calculate how many files there are so function knows how many times to loop


  var numberofFiles = fileStringArray.length;


  MongoClient.connect(url, { useUnifiedTopology: true },  function(error, client) {
    if(error){
      return console.log('Failed to connect to databse')
    }
    const db = client.db(dbName)


    var randomCounter = 301;
    for(i = 0; i < numberofFiles; i++){

      lineReader.eachLine(fileStringArray[i], function(line, last) {

        var chineseObject = {
          food_name: '',
          index_value: '',
          type: '',
        };

        chineseObject.food_name = line;
        chineseObject.index_value = randomCounter;
        chineseObject.type = 'japanese'
        randomCounter++;
        db.collection('foods').insertOne(
        chineseObject,
        (error, result) => {
          if(error){
            console.log('Cannot insert');
          }
          console.log(result.ops);
        });

        if(last) {
          return false; // stop reading
        }
      });
    }
  });
}
