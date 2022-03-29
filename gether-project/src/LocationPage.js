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

///////////

    useEffect(() => {
        fetch('TBD')
        .then((r) => r.json())
        .then(cardData => {
          setDisplayCard(cardData)})
      }, [])
    

//////////
    
    function addNewCard(newCard) {
    setDisplayCards([...displayCards, newCard])
  }
    
/////////
    return (
     <>
     <Form addNewCard={addNewCard}/>
     <CardList filteredCards={filteredCards}/> 
     <Card />
     </>
    );
  }
  
  export default LocationPage;
  
