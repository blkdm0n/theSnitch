import React from 'react';
import sentiment from 'node-sentiment';
import moment from 'moment';

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.getSentiment = this.getSentiment.bind(this);
  }
  getSentiment(tweet) {
    sentimentArray = [];
    sentimentScore = [];
    let favorable = sentiment(this.props.tweet.text).score;
    if (favorable > 0) {
      sentimentArray.push(`positive`);
      sentimentScore.push(favorable);
    } else if (favorable < 0) {
      sentimentArray.push(`negative`)
      sentimentScore.push(favorable);
    }  else {
      sentimentArray.push('neutral');
      sentimentScore.push(favorable);
    }
    console.log(sentimentArray, sentimentScore);
  }

  render() {
    return (
        <span key={this.props.tweet.id}>
          <img height={35} width={35} src={this.props.tweet.user_avatar} />
          <br />
          {moment(this.props.tweet.created_at).format("MMMM Do YYYY, hh:mm:ss")}  
          <br />{this.props.tweet.username} said {this.props.tweet.text} <br /> 
          <br />
        </span>
   );
  }
}

export default Tweet;
