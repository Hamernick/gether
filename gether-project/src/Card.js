import React from "react";


function Card({card}) {
    
  const {name, title, image, linkedIn, website, status} = card;

    return (
    
     <div>
       <img src={image}></img>
       <h3>{name}</h3>
       <h4>{title}</h4>
       <p>{status}</p>
       <a href={linkedIn}>LinkedIn</a>
       <a href={website}>Website</a>
       <button>Connect</button>
     </div>
     
    );
  }
  
  export default Card;
  