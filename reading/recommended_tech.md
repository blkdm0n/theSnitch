# Tech Stack recommendations

You don't have to use all of this stuff, but if you are wondering what to use in a given category, here's our recommendation.

## JavaScript stuff

### Version
* ES6 on both server-side and client-side
* Transpile with Babel

### Linting
* ESLinter with the linter config that comes with your repo

## Auth

* Passport for FB + Google + Github OAuth
* See [Passport Setup](passport_setup.md)

## Front-end

### Asset compilation
* Webpack

### Front-End MV* (2 options):
* ReactJS + ReactRouter
* AngularJS + AngularRouter

### Data store
* Redux / ng-redux

## CSS Framework

* Bootstrap (front-end)
* Stylus (back-end)

## Server

### MVC
* ExpressJS

### Templating
* Pug (formerly Jade)

## Database

* MongoDB + Mongoose
* Postgres + Bookshelf + Knex

## Caching and queuing

* Background jobs / work queue: Kue
* Redis: backing session store + work queue

## Testing

### Backend unit testing
* Supertest + Mocha + chai (backend)

### Front-end testing
* Jest for React
* Karma for Angular

### Code coverage
* Coveralls

### End-to-end testing
* Protractor (Angular)
* Casper 

### Cloud testing
* Sauce Labs

## Email
* Mailgun

## Uploading

### Client
* Filepicker.io

### Transcoding
* Zencoder

### Static asset hosting
* AWS S3

### CDN
* AWS Cloudfront


## Deployment

### Containers 
* Docker

### One-click deploy & multiple envs
* Heroku

### Continuous integration
* CircleCI

