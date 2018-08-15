'use strict';
const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const routes = require('./routes');
const app = express();
const retrieveTweets = routes.retrieveTweets;
const filteredTweets = routes.filteredTweets;
const tweets = require('../sampleData.js');
const Promise = require('bluebird');

app.use(middleware.morgan('dev'));
app.use(middleware.cookieParser());
app.use(middleware.bodyParser.urlencoded({extended: false}));
app.use(middleware.bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(middleware.auth.session);
app.use(middleware.passport.initialize());
app.use(middleware.passport.session());
app.use(middleware.flash());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes.auth);
app.use('/api', routes.api);
app.use('/api/profiles', routes.profiles);

app.get('/initial', (req, res) => {
  return retrieveTweets((data) => {
    res.send(data)
  });
});

app.post('/filtered', (req, res) => {
  let search = req.body.searchTerm;
  let date = req.body.dateRange;
  
  //why is filtered tweets NOT a function??????
   return filteredTweets(search, date, (data) => {
     res.send(data);
   });
});



module.exports = app;
