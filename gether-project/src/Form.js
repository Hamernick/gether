import React, { useState } from "react";

function Form({addNewCard, handleIsSignedIn}) {
    
    const [formState, setFormState] = useState({
        name: "",
        image: "",
        title: "",
        status: "",
        linkedIn: "",
        website: ""
      })
    
      const {name, image, title, status, linkedIn, website} = formState
    
      function handleChange(e) {
        const newFormState = {...formState, [e.target.name]: e.target.value}
        setFormState(newFormState)
      }
    
      function handleFormSubmit(e){
        e.preventDefault();
        fetch("http://localhost:3000/gether-users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        })
        .then(res => res.json())
        .then(data => addNewCard(data))
        .then(setFormState(
          {name: "",
          image: "",
          title: "",
          status: "",
          linkedIn: "",
          website: ""}
        ))
      }

        
    
      return (
        <div className="new-card-form">
          <h2 className="cardlist-heading">sign up to interact on gether!</h2>
          <form id="signup-form" onSubmit={handleFormSubmit}>
            <input className="form-inputs" type="text" name="image" placeholder="Profile Picture" onChange={handleChange} value={image}/>
            <input className="form-inputs" type="text" name="name" placeholder="Name" onChange={handleChange} value={name} />
            <input className="form-inputs" type="text" name="title" placeholder="Title" onChange={handleChange} value={title} />
            <input className="form-inputs" type="text" name="status" placeholder="Status" onChange={handleChange} value={status} />
            <input className="form-inputs" type="text" name="linkedIn" placeholder="LinkedIn" onChange={handleChange} value={linkedIn} />
            <input className="form-inputs" type="text" name="website" placeholder="Website" onChange={handleChange} value={website} />
            <button onClick={handleIsSignedIn} id="form-btn" type="submit">join</button>
          </form>
        </div>
      );
  }
  
  export default Form;
  
///////////////

