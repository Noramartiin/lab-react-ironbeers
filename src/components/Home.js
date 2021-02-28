import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/beers'}>All Beers</Link>
        <Link to={'/random-beer'}>Random Beer</Link>
        <Link to={'/new-beer'}>New Beer</Link>
      </div>
    );
  }
}
export default Home;
