# Food Randomizer API

## Access the API:
https://getfood-rest-api.herokuapp.com/api/random_food

## Currently supported cuisines
* Chinese
* Korean
* German
* _More to be added soon!_

## About The Project
Wrote a backend API server to be used with the [Food Learning Randomizer app](https://github.com/Isaac-Tong/food-learning-randomizer) to generate random foods and its associated cuisine. A database of different kinds of foods and cuisines are hosted on a mongoDB ATLAS database.

## What the API returns
### Returns a JSON with the following data:
* food_name
* index_value
* type

## Files
* endpoint.js contains the expressJS server
* food_parser.js intended to use to upload more foods and cuisines given a text file
* webscrape.js intended to scrape off HTML tags or classes from website to parse to a text file so that food_parser.js can use to increase the database size. 


