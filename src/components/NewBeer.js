import React, { Component } from 'react'

 class NewBeer extends Component {

    render() {
        return (
          <div>
            <h1>Add New Beer</h1>
            <form onSubmit={this.props.onAdd}>
              <input
                name="name"
                type="text"
                placeholder="Enter the name"
              ></input>
              <input name="tagline" type="text" placeholder="tagline"></input>
              <input
                name="description"
                type="text"
                placeholder="description"
              ></input>
              <input
                name="first_brewed"
                type="text"
                placeholder="firstBrewed"
              ></input>
              <input
                name="brewers_tips"
                type="text"
                placeholder="brewersTips"
              ></input>
              <input
                name="attenuation_level"
                type="number"
                placeholder="attenuationLevel"
              ></input>
              {/* <input
                name="contributed_by"
                type="text"
                placeholder="contributedBy"
              ></input> */}
              <button type="submit">Add</button>
            </form>
          </div>
        );
    }
}
export default NewBeer