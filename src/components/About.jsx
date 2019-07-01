import React from 'react';
//import '../styles/About.css';
import { GoogleMap, 
   withScriptjs, 
   withGoogleMap 
} from 'react-google-maps';


function Map() {
   return (
      <GoogleMap 
      defaultZoom={18} 
      defaultCenter={{ lat: 46.391665, lng: 30.723117 }} 
      />
   );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const About = (props) => {
   return (
      <div>
         <div>
            <h2>About author</h2>
         </div>
         <div className='text'>Text</div>
         <div style={{width: '600px', height: '400px'}}>
            <WrappedMap
               googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC34G-rzSaqdktpIAsrhzIippSkmS4c9ik&v=3.exp&libraries=geometry,drawing,places`}
               loadingElement={<div style={{ height: `100%` }} />}
               containerElement={<div style={{ height: `100%` }} />}
               mapElement={<div style={{ height: `100%` }} />}
            />
         </div>
      </div>
   );
}

export default About;