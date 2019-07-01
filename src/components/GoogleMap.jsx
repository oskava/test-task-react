import React from 'react';
import '../styles/Map.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = (props) => {
   return (
      <div>
      <Map google={this.props.google} zoom={14}>

         <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

         <InfoWindow onClose={this.onInfoWindowClose}>
            
         </InfoWindow>
      </Map>
      </div>
   );
}

export default GoogleApiWrapper({
   apiKey: ('AIzaSyAewsQ0LQHq9QemzGF1J61rvug0twGv7qA')
 })(GoogleMap);