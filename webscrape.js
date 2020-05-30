const htmlMiner = require('html-miner');
const request = require('postman-request');
const fs = require('fs');



request('https://johnlehndorff.wordpress.com/2019/01/12/the-top-100-most-american-foods/', function (error, response, body) {
  var html = String(body);


  var output = htmlMiner(html, 'p');

  var outputLength = output.length;

  for(i = 0; i < outputLength; i++){
    output[i] = output[i].replace(/\d+/g, '');
    output[i] = output[i].replace('.', '');
    output[i] = output[i].replace(' ', '');

  }

  for(i = 0; i < outputLength; i++){
    console.log(output[i]);
    fs.appendFile('cuisine_text_files/american.txt', output[i] + '\n', () => {
    });
  }



});
