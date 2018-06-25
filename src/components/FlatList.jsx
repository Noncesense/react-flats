import React, { Component } from 'react';
import Flat from './Flat.jsx';

class FlatList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='flat-list'>
        {this.props.flats.map((flat)=>
          <Flat flat={flat} selectFlat={this.props.selectFlat}/>
        )}
      </div>
      )
  }
}

export default FlatList;
