// // // // import React from "react";
// // // // import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// // // // // ...
 
// // // // export class MapContainer extends React.Component {
// // // //  render() {
// // // //     return (
// // // //       <Map google={this.props.google} zoom={14}>
 
// // // //         <Marker onClick={this.onMarkerClick}
// // // //                 name={'Current location'} />
 
// // // //         <InfoWindow onClose={this.onInfoWindowClose}>
// // // //             <div>
// // // //               <h1>{this.state.selectedPlace.name}</h1>
// // // //             </div>
// // // //         </InfoWindow>
// // // //       </Map>
// // // //     );
// // // //   }
// // // // }
 
// // // // export default GoogleApiWrapper({
// // // //   apiKey: ("AIzaSyCvtYAq7mSPFFhcY_YSUJ3hVN-IFGkTlXk")
// // // // })(MapContainer)













// // // import React, { Component } from "react";
// // // import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// // // export class MapContainer extends Component {
// // //   state = {
// // //     selectedPlace: {} // Initialize selectedPlace with an empty object
// // //   };

// // //   onMarkerClick = (props, marker, e) =>
// // //     this.setState({
// // //       selectedPlace: props,
// // //       activeMarker: marker,
// // //       showingInfoWindow: true
// // //     });

// // //   onInfoWindowClose = () =>
// // //     this.setState({
// // //       showingInfoWindow: false,
// // //       activeMarker: null
// // //     });

// // //   render() {
// // //     return (
// // //       <Map google={this.props.google} zoom={14}>
// // //         <Marker
// // //           onClick={this.onMarkerClick}
// // //           name={'Current location'}
// // //         />

// // //         <InfoWindow
// // //           marker={this.state.activeMarker}
// // //           visible={this.state.showingInfoWindow}
// // //           onClose={this.onInfoWindowClose}>
// // //           <div>
// // //             <h1>{this.state.selectedPlace.name}</h1>
// // //           </div>
// // //         </InfoWindow>
// // //       </Map>
// // //     );
// // //   }
// // // }

// // // export default GoogleApiWrapper({
// // //   apiKey: "AIzaSyCvtYAq7mSPFFhcY_YSUJ3hVN-IFGkTlXk"
// // // })(MapContainer);















// // import React from 'react';
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // import 'leaflet/dist/leaflet.css';

// // const position = [51.505, -0.09]; // Replace with your desired coordinates

// // const MapContainerComponent = () => (
// //   <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
// //     <TileLayer
// //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //     />
// //     <Marker position={position}>
// //       <Popup>Current location</Popup>
// //     </Marker>
// //   </MapContainer>
// // );

// // export default MapContainerComponent;





// // import React, { useState } from 'react';
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // import 'leaflet/dist/leaflet.css';

// // const position = [51.505, -0.09]; // Replace with your desired coordinates

// // const MyMapComponent = () => {
// //   const [mapPosition] = useState(position);

// //   return (
// //     <MapContainer center={mapPosition} zoom={13} style={{ height: "100vh", width: "100%" }}>
// //       <TileLayer
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //       />
// //       <Marker position={mapPosition}>
// //         <Popup>Current location</Popup>
// //       </Marker>
// //     </MapContainer>
// //   );
// // };

// // export default MyMapComponent;






// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const position = [51.505, -0.09]; // Replace with your desired coordinates

// const MyMapComponent = () => (
//   <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
//     <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     />
//     <Marker position={position}>
//       <Popup>Current location</Popup>
//     </Marker>
//   </MapContainer>
// );

// export default MyMapComponent;
