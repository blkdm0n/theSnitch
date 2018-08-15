import React from 'react';
import ReactDOM from 'react-dom';
import NavSearch from './components/NavSearch.jsx';
import Graph1 from './components/Graph1.jsx';
import Speedometer from './components/Speedometer.jsx';
import TweetStream from './components/TweetStream.jsx';
import axios from 'axios';

const Promise = require('bluebird');

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      tweets: [],
      searchTerm: '',
      dateRange: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //change handler NOT registering search
  handleChange(event) {
    event.preventDefault();
    new Promise((resolve, reject) => {
      this.setState({
        searchTerm: event.target.value
      });
      resolve();
    })
  }
    
  //selects the item from the drop down menu
  onSelect(eventKey) {
    new Promise((resolve, reject) => {
      this.setState({
        dateRange: eventKey
      });
      resolve();
    });
  }
  //click event is firing
  handleClick() {
    console.log('click');
    axios.post('/filtered', {
        searchTerm: this.state.searchTerm,
        dateRange: this.state.dateRange
      })
      .then((data) => {
        console.log('getting filtered data', data.data);
        this.setState({tweets: data.data});
        
      })
      .catch((err) => {
        throw err;
      })
  }

  componentDidMount() {
    axios.get('/initial')
      .then((data) => {
        console.log('page loaded', data);
        this.setState({tweets: data.data});
      })
      .catch((err) => {
        throw err;
      })
  }
  render() {
   return (
      <div>
       <NavSearch 
         onClick={this.handleClick}
         onSelect={this.onSelect}
         onChange={this.handleChange}
       />
       Sentiment Analyis
       <Speedometer tweets={this.state.tweets} />
       <Graph1 tweets={this.state.tweets}/>
       <TweetStream tweets={this.state.tweets} />
      </div>
   );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

