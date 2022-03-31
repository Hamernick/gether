import React from "react";
import { useNavigate } from "react-router-dom";

function MapPage() {

  let navigate = useNavigate();
    
    return (
     <div id="map-page">
       <img id="fake-big-map" onClick={() => navigate("/locationpage")}src="https://images1.apartmenthomeliving.com/m2/cqbbGG_vKjy3x3zedfJsrYmvPnb4QehqRdGmbY8a__A/H270W360/map.jpg"></img>
     </div>
    );
  }
  
  export default MapPage;
  