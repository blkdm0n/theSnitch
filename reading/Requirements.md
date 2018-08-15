# Front End Thesis Requirements

## Business Question

_As a Twitter Advertiser I want to know what the ratio of positive to negative tweets about my brand over the last 3 month by 5 min increments_

*Server Side Requirements*

1) Use Gnip to get Twitter Streaming Api  [Gnip Powertrack](http://support.gnip.com/apis/powertrack2.0/)
  - Use GNIP NodeJS client to consume stream of Tweets
  - Create server side route to let clients consume Tweet stream via Server Side Events

2) Add routes to filter PowerTrack stream -> check out [Api Reference](http://support.gnip.com/apis/powertrack2.0/api_reference.html)

3) Use the [sentiment package](https://www.npmjs.com/package/sentiment) to get a sentiment score
    
*Client Side Requirements*

1) Accept Server Side Events to capture Tweet stream from client
2) Be able to filter incoming tweet data based
  a. keyword
  b. timeframe
3) Create one or more data visualizations of sentiment analysis (D3 is preferrable)