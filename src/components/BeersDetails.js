import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

 class BeersDetails extends Component {
   state = {
     beers: [],
   };

   componentDidMount() {
    const beerId = this.props.match.params.beersId;
     axios
       .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
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
       const {beers} = this.state;
       console.log(beers)
       
     return (
       <div>
         <Link to={'/'}>Home</Link>
         <h1>Beer Details</h1>
         <h3>{beers.name}</h3>
         <div>Tagline:{beers.tagline}</div>
         <div>First Brewed:{beers.first_brewed}</div>
         <div>Attenuation Level:{beers.attenuation_level}</div>
         <div>Description:{beers.description}</div>
         <div>Contributed By:{beers.contributed_by}</div>
         <img src={beers.image_url} />
       </div>
     );
   }
 }
export default BeersDetails