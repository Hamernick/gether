import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconImage from './images/new-icon-05.png'
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import parks from "./db.json"


const mapContainerStyle = {
  height: "400px",
  width: "400px",
  margin: 40,
  border_radius: 50
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

export default function MapPage() {

  const [selected, setSelected] = useState(null);
  let navigate = useNavigate();

    return (

     <div id="fake-map">
       <LoadScript
        googleMapsApiKey="AIzaSyAzrQRwjAnB1gVFARsnceWdivpsUfxltGE">
       <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={center} options={options} >
       

      {parks.locations.map(park => (
        <Marker    
          key={park.id}
          icon={{
            url: image,
            scaledSize: {width: 30, height: 37}
            }}

            position={{ 
              lat: park.lat, 
              lng: park.lng 
            }}
            
            onClick={() => {
              setSelected(park)
            }}
        />
      ))}

{selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
            <div class="max-w-sm mx-auto bg-white rounded-md shadow-lg flex items-center space-x-4">
            <div class="shrink-0">
            <img class="h-12 w-12" src="https://coursereport-production.imgix.net/uploads/school/logo/8/original/flatironschool.png?w=200&h=200" alt="flatiron Logo"></img>
            </div>
            <div>
           <div class="text-xl font-medium text-black">Flatiron School</div>
         <p class="text-slate-500">There are 6 people currently networking here</p>
         <button onClick={() => navigate("/locationpage")}>View Location</button>
        </div>
          </div>
            </div>
          </InfoWindow>
        ) : null}

       </GoogleMap>
       </LoadScript>
       </div>
  )
  }



  // id="fake-map"