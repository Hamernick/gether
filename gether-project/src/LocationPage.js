import React, {useState, useEffect} from "react";
import Form from "./Form";
import CardList from "./CardList";
import Card from "./Card";
import MapPage from "./MapPage";



//We'll need to handle a few things here.
// Display initial cards in database
//  1. useState
//  2. useEffect
// Display Form
// Filter (Stretch Goal)

function LocationPage() {

  const [isSignedIn, setIsSignedIn] = useState(false)

  function handleIsSignedIn() {
    setIsSignedIn(true);
  }

  useEffect(() => {

    fetch('http://localhost:3000/gether-users')
    .then((r) => r.json())
    .then(cardData => {
      setDisplayCard(cardData)})
  }, [])

///////////

const [displayCard, setDisplayCard] = useState([]);

const allDisplayCards = displayCard.map((card) => {
  return <Card key={card.id} card={card} isSignedIn={isSignedIn}/>
})
    

//////////
    
    function addNewCard(newCard) {
    setDisplayCard([...displayCard, newCard])
  }
    
/////////
    return (
     <div id="location-page" className="container">
       <div className="row">
          <div className="col">
            <Form addNewCard={addNewCard} handleIsSignedIn={handleIsSignedIn}/>
            <div>
             <MapPage />
            </div>
          </div>
          <div id="cardlist" className="col-6">
            <CardList /> 
            {allDisplayCards}
          </div>
        </div>
     </div>
    );
  }
        
        
  export default LocationPage;
  
