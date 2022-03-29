import React, { useState } from "react";
import iconImage from './images/new-icon-05.png'
import {
  GoogleMap, 
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const mapContainerStyle = {
  height: "400px",
  width: "400px",
};

const center = {
  lat: 40.705280,
  lng: -74.014259,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
}
 
const image = iconImage


function MapPage() {

  const {selected, setSelected} = useState(false)
  
    return (
     <div>
       <LoadScript
        googleMapsApiKey="AIzaSyAzrQRwjAnB1gVFARsnceWdivpsUfxltGE">
       <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={center} options={options} >
       <Marker 
          key="marker_1"  
          icon={{ 
            url: image,
            scaledSize: {width: 30, height: 37}
            }}
            position={{ lat: 40.705280, lng: -74.014259 }}
            
            onClick={() => {
              setSelected(!selected)}}
        />

        {selected ? (
          // <InfoWindow 
          //   position={{ lat: 40.705280, lng: -74.014259 }} 
          //   onCloseClick={() => {
          //     setSelected(null);
          //   }}
          // >
            <div>
              <h2>
                <span>
                  TEST
                </span>
                TEST
              </h2>
            </div>
          // </InfoWindow>
        ) : null}

       </GoogleMap>
       </LoadScript>
     </div>
    );
  }
  
  export default MapPage;
  
