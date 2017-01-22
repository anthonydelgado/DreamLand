import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const Map = React.createClass({

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  render() {
    let coords = this.props.coords
    let name = this.props.name
    return (
      <Gmaps
        width={'200px'}
        height={'200px'}
        lat={coords.latitude}
        lng={coords.longitude}
        zoom={12}
        loadingMessage={"I'm loading!"}
        params={{v: '3.exp', key: 'AIzaSyCJWX30ipWXQOogmHhvuMd-0HJq2PIwvJU'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.latitude}
          lng={coords.longitude}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.latitude}
          lng={coords.longitude}
          content={name}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.latitude}
          lng={coords.longitude}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

});



export default Map;