import React, { useState } from "react";

function Form({addNewCard}) {
    
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
      }

        
    
      return (
        <div className="new-card-form">
          <h2>Sign up to interact on gether!</h2>
          <form onSubmit={handleFormSubmit}>
            <input type="text" name="image" placeholder="Profile Picture" onChange={handleChange} value={image}/>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} value={name} />
            <input type="text" name="title" placeholder="Title" onChange={handleChange} value={title} />
            <input type="text" name="status" placeholder="Status" onChange={handleChange} value={status} />
            <input type="text" name="linkedIn" placeholder="LinkedIn" onChange={handleChange} value={linkedIn} />
            <input type="text" name="website" placeholder="Website" onChange={handleChange} value={website} />
            <button type="submit">Add Card</button>
          </form>
        </div>
      );
  }
  
  export default Form;
  
///////////////

