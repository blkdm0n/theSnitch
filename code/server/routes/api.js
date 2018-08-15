'use strict';
const express = require('express');
const router = express.Router();
const Twitter = require('twitter');
const TwitterAuth = require('../../config/config.js');
const { Client } = require('pg');
const Promise = require('bluebird');
const moment = require('moment');


//inserts tweets into our database (helper file)
const insertTweet = (data) => { 
  let query = `INSERT INTO tweets(created_at, text, username, user_url, user_avatar) VALUES(
  $1, $2, $3, $4, $5);`
  db.query(query, data, (err, res) => {
  });
}

//query database for tweet (helper file)
const retrieveTweets = (cb) => {
  let query = `SELECT * FROM tweets ORDER BY id DESC LIMIT 1000;`
  db.query(query, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
     cb(results.rows);   
  });
}

//query filtered tweets (helper file)
const filteredTweets = (search, date, cb) => {
  let dateFilter = moment().subtract(date, 'hours');
  let filteredQuery = `SELECT * FROM tweets WHERE text LIKE '%${search}%' LIMIT 100;`
  console.log(filteredQuery);
  db.query(filteredQuery, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    cb(results.rows);
  });
}

//connect to Twitter's streaming API
const client = new Twitter({
  consumer_key: TwitterAuth.consumer_key,
  consumer_secret: TwitterAuth.consumer_secret,
  access_token_key: TwitterAuth.access_token_key,
  access_token_secret: TwitterAuth.access_token_secret
});

// client.stream('statuses/filter', {track: 'Twitter'}, (stream) => {
//   stream.on('data', (tweet) => {
//     //add a helper function to do this work
//     let data = [];
    
//     if (tweet.created_at === null || tweet.created_at === undefined) {
//       tweet.created_at = 'no date available';
//       data.push(tweet.created_at);
//     } else {
//       data.push(tweet.created_at.toString());
//     }

//     if (tweet.text === null || tweet.text === undefined) {
//       tweet.text = 'no text entered';
//       data.push(tweet.text);
//     } else {
//       data.push(tweet.text.toString());
//     }

//     if (tweet.user.name === null || tweet.user.name === undefined) {
//       tweet.user.name = 'no user name entered';
//       data.push(tweet.user.name);
//     } else {
//       data.push(tweet.user.name.toString());
//     }
    
//     if (tweet.user.url === null || tweet.user.url === undefined) {
//       tweet.user.url = 'no url provided';
//       data.push(tweet.user.url);
//     } else {
//       data.push(tweet.user.url.toString());
//     }

//     if (tweet.user.profile_image_url === null || tweet.user.profile_image_url === undefined) {
//       //set a default image for later rendering
//       tweet.user.profile_image_url = 'no image provided';
//       data.push(tweet.user.profile_image_url);
//     } else {
//       data.push(tweet.user.profile_image_url.toString());
//     }
//     //saves tweets to database
//     insertTweet(data);
//   });
//   stream.on('error', (error) => {
//     console.log('error', error);
//   });
// });


//move database stuff to helper files as well
const db = new Client({
  database: 'thesis_devel'
});


db.connect((err, done) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Successful connnection to DB');
  }
});


router.route('/')
  .get((req, res) => {
    res.status(200).send('in the get route');
  })
  .post((req, res) => {
    console.log('in the correct route');
    res.status(201).send({ data: 'Posted!' });
  });

module.exports =  {
  router,
  retrieveTweets,
  filteredTweets
};
