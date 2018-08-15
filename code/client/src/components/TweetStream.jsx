import React from 'react';
import Tweet from './Tweet.jsx';

class TweetStream extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {this.props.tweets.map(tweet => {
       return <Tweet 
              tweet={tweet}
              key={tweet.id} />
      })}
    </div>
    )
  }
}

export default TweetStream;


