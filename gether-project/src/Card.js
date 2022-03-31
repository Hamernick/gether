import React from "react";


function Card({card, isSignedIn}) {
    
  const {name, title, image, linkedIn, website, status} = card;

  const emoji = function(status) {
    if (status === "Networking") {
      return <p id="card-status">{status}✅</p>
    } else if (status === "CEO at Looking for work") {
      return <p id="card-status" style={{color: "brown"}}>{status}💼</p>
    } else if (status === "Looking for work") {
      return <p id="card-status">{status}🤵</p>
    } else if (status === "Recently hired") {
      return <p id="card-status" style={{color: "red"}}>{status}🎉</p>
    } else if (status === "Not looking for work") {
      return <p id="card-status">{status}💰</p>
    } else {
      return <p style={{color: "#48cae4"}} id="card-status">{status}🔵</p>
    }
  }

    isSignedIn ? console.log(true) : console.log(false)

    return (
      <div id="display-card" className="group-hover:text-white font-semibold text-slate-900">
      <img id="card-img" className="inline-block h-16 w-16 rounded-full ring-2 ring-white" src={image}></img>
      <div>
       <p id="card-name">{name}</p>
       <p id="card-title">{title}</p>
       {emoji(status)}
       <a href={linkedIn}>
       <button className="card-btn" href={linkedIn}>LinkedIn</button>
       </a>
       <a href={website}>
       <button className="card-btn" href={website}>Website</button>
       </a>
       <button className="card-btn"  >Connect</button>
      </div>
      </div>
    );
  }
  
  export default Card;
  