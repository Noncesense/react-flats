import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const lat = this.props.selectedFlat.lat;
    const lng = this.props.selectedFlat.lng;
    return (
      <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{
            lat: lat,
            lng: lng
          }}
          center={{
            lat: lat,
            lng: lng
          }}>
        <Marker
          title={this.props.selectedFlat.name}
          name={this.props.selectedFlat.name}
          position={{lat: lat, lng: lng}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAoxCn9f5TeQKiRIXvS38iUpUkj7gRkArc")
})(MapContainer)
