import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
    
    let navigate = useNavigate();
    return (
     <>
     <h2>Welcome to Gether, lets get started</h2>
     <button onClick={() => navigate("/locationpage")}>This button will route you to the next page🚀</button>
      
     </>
     
    );
  }
  
  export default WelcomePage;
  