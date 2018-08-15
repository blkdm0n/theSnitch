import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import sentiment from 'node-sentiment';


const fakeData = [-10, -12, -6, -5, 0, 1, 2, 3, 4, 5, 8, 12]

class Speedometer extends React.Component {
  constructor(props) {
    super(props);
    this.getSentiment = this.getSentiment.bind(this);
  }
  
  getSentiment(tweets) {
    let scores = [];
    let averageScore = 0;
    let sum = 0;
    tweets.forEach((tweet) => {
      
      let score = sentiment(tweet.text).score;
      if (score > 0 || score < 0) {
        scores.push(score);
      }
    });
    
    scores.forEach(value => {
      sum += value;
    });

    averageScore = sum / scores.length;
    return averageScore
    
  }
  render() {
    return (
      <ReactSpeedometer
        forceRender={true}
        value={this.getSentiment(this.props.tweets)}
        width={750}
        height={500}
        minValue={-20}
        maxValue={20}
        startColor='red'
        endColor='green'
        segments={20}
      />  
    )
  }
}

export default Speedometer;
