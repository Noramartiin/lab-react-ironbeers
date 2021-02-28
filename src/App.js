import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter, Link } from 'react-router-dom';

import Home from './components/Home.js';
import Beers from './components/Beers.js';
import BeersDetails from './components/BeersDetails.js';
import RandomBeer from './components/RandomBeer.js';
import NewBeer from './components/NewBeer.js';
import axios from 'axios';

class App extends Component {
  handleSubmit(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let tagline = event.target.tagline.value;
    let description = event.target.description.value;
    let first_brewed = event.target.first_brewed.value;
    // let brewers_tips = event.brewers_tips.value;
    let attenuation_level = Number(event.target.attenuation_level.value);
    // let contributed_by = event.contributed_by.value;

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: first_brewed,
        // brewers_tips: brewers_tips,
        attenuation_level: attenuation_level,
        // contributed_by: contributed_by,
      })
      .then((response) => {
        this.setState(
          {
            beers: [response.data, ...this.state.beers],
          },
          () => {
            this.props.history.push('/beers');
          }
        );
      })
      .catch(() => {
        console.log('error');
      });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:beersId" component={BeersDetails} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route
            exact
            path="/new-beer"
            render={() => {
              return <NewBeer onAdd={this.handleSubmit} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
