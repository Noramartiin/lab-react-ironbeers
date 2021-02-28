import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

 class RandomBeer extends Component {
   state = {
     beers: [],
   };

   componentDidMount() {
     const beerId = this.props.match.params;
     axios
       .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
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
     return (
       <div>
         <Link to={'/'}>Home</Link>
         <h1>Random Beer</h1>
         <h2>{beers.name}</h2>
         <hr></hr>
         <div>Tagline: {beers.tagline}</div>
         <div>First Brewed: {beers.first_brewed}</div>
         <div>Attenuation Level: {beers.attenuation_level}</div>
         <div>Description: {beers.description}</div>
         <div>Contributed By: {beers.contributed_by}</div>
         <img src={beers.image_url} />
       </div>
     );
   }
 }
export default RandomBeer