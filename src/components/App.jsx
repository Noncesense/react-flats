import React, { Component } from 'react';
import FlatList from './FlatList.jsx';
import MapContainer from './MapContainer.jsx';
var sourceFile = require('../data/flats.js');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flats: sourceFile.default,
      selectedFlat: {
        name: "Charm at the Steps of the Sacre Coeur/Montmartre",
        imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
        price: 164,
        priceCurrency: "EUR",
        lat: 48.884211,
        lng: 2.34689
      }
    }
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    });
    console.log(this.state.selectedFlat)
  }



  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat}/>
        <MapContainer className='map-container' selectedFlat={this.state.selectedFlat}/>
      </div>

      )
  }
}

export default App;
