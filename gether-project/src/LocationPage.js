import React, {useState, useEffect} from "react";
import Form from "./Form";
import CardList from "./CardList";
import Card from "./Card";



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
//className=" gap-8 columns-4 ..."
    return (
     <div id="location-page" className="container">
       <div className="row">
          <div className="col">
            <Form addNewCard={addNewCard} handleIsSignedIn={handleIsSignedIn}/>
            <div id="fake-map">
              <img src="https://images1.apartmenthomeliving.com/m2/cqbbGG_vKjy3x3zedfJsrYmvPnb4QehqRdGmbY8a__A/H270W360/map.jpg"></img>
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
        
        
        
        
  // addNewCard={addNewCard}
  //filteredCards={filteredCards}
  export default LocationPage;
  
