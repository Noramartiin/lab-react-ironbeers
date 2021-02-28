import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log('data fetched');
        this.setState({
          beers: response.data,
        });
      })
      .catch(() => {
        console.log('error');
      });
  }
  render() {
    const { beers } = this.state;
    // console.log(beers)
    return (
      <div>
        <Link to={'/'}>Home</Link>
        <h1>All Beers</h1>
        {beers.map((beers) => {
          return (
            <div key={beers._id}>
              <img src={beers.image_url} />
              <div>
                <Link to={`/beers/${beers._id}`}>{beers.name}</Link>
              </div>
              <div>Tagline: {beers.tagline}</div>
              <div>Contributed By: {beers.contributed_by}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Beers