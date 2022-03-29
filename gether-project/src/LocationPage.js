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

  useEffect(() => {

    fetch('http://localhost:3000/gether-users')
    .then((r) => r.json())
    .then(cardData => {
      setDisplayCard(cardData)})
  }, [])

///////////

const [displayCard, setDisplayCard] = useState([]);

const allDisplayCards = displayCard.map((card) => {
  return <Card key={card.id} card={card}/>
})
    

//////////
    
    function addNewCard(newCard) {
    setDisplayCard([...displayCard, newCard])
  }
    
/////////
    return (
     <>
     <Form addNewCard={addNewCard}/>
     <CardList /> 
     {allDisplayCards}
     </>
    );
  }
  // addNewCard={addNewCard}
  //filteredCards={filteredCards}
  export default LocationPage;
  
