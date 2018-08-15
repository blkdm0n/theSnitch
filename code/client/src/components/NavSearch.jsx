import React from 'react';
import axios from 'axios';
import { Navbar, FormGroup, FormControl, Button, DropdownButton, MenuItem, ButtonGroup, Well} from 'react-bootstrap';

const Promise = require('bluebird');

const NavSearch = (props) => {
    //need to update state on search and on date range
    // this.state = {
    //   search: '',
    //   dateRange: 'SELECT DATE RANGE',
    // }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.onSelectAlert = this.onSelectAlert.bind(this);
  
  
  // //change handler works for search input
  // handleChange(event) {
  //   event.preventDefault();
  //   new Promise((resolve, reject) => {
  //     this.setState({
  //       searchTerm: event.target.value,
  //     })
  //     resolve();
  //   });
  // }
  
  // //selects the item from the drop down menu
  // onSelectAlert(eventKey) {
  //   event.preventDefault();
  //   new Promise((resolve, reject) => {
  //     this.setState({
  //       dateRange: eventKey
  //     });
  //   });
  // }

  // //click event is firing
  // handleClick(event) {
  //   event.preventDefault();
  //   axios.post('/filtered', {
  //       searchTerm: this.state.searchTerm,
  //       dateRange: this.state.dateRange
  //     })
  //     .then((data) => {
  //       console.log('getting filtered data', data.data);
  //       this.setState({tweets: data.data});
  //       console.log(this.state)
  //     })
  //     .catch((err) => {
  //       throw err;
  //     })
  // }
    return (
    <div>
      <h1>The Snitch</h1>
      <Navbar>
          <Navbar.Form>
            <FormGroup >
              <FormControl type='text' placeholder='ENTER SEARCH TERM' onChange={props.handleChange} />
            </FormGroup>
            {''}
              <ButtonGroup>
                <DropdownButton title='SELECT DATE RANGE' id={'days'}>
                  <MenuItem eventKey={24} onSelect={props.onSelect}>LAST 24 HOURS</MenuItem>
                  <MenuItem eventKey={48} onSelect={props.onSelect}>LAST 48 HOUR</MenuItem>
                  <MenuItem eventKey={72} onSelect={props.onSelect}>LAST 72 HOUR</MenuItem>
                  <MenuItem eventKey={168} onSelect={props.onSelect}>LAST 7 DAYS</MenuItem>
                  <MenuItem eventKey={336} onSelect={props.onSelect}>LAST 14 DAYS</MenuItem>
                  <MenuItem eventKey={504} onSelect={props.onSelect}>LAST 21 DAYS</MenuItem>
                </DropdownButton>
                <Button onClick={props.handleClick} type='submit'>SUBMIT</Button>
              </ButtonGroup>
          </Navbar.Form>
      </Navbar>
    </div>
    );
  }



export default NavSearch;