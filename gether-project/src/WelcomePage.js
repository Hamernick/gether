import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
    
    let navigate = useNavigate();
    return (
    <div id="welcome-div">
      <h2 id="welcome-h2">welcome to gether.</h2>
      <button id="welcome-button" className="button" onClick={() => navigate("/mappage")}>let's get started</button>
    </div>
     
    );
  }
  
  export default WelcomePage;
  