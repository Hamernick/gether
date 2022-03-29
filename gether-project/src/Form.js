import React, { useState } from "react";

function Form({addNewCard}) {
    
    const [formState, setFormState] = useState({
        name: "",
        image: "",
        title: "",
        status: "Networking",
        linkedin: "",
        link: ""
      })
    
      const {name, image, title, status, linkedin, link} = formState
    
      function handleChange(e) {
        const newFormState = {...formState, [e.target.name]: e.target.value}
        setFormState(newFormState)
      }
    
      function handleFormSubmit(e){
        e.preventDefault();
        fetch("HANDLE", {
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
          <h2>New Card</h2>
          <form onSubmit={handleFormSubmit}>
            <input type="text" name="image" placeholder="Profile Picture" onChange={handleChange} value={image}/>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} value={name} />
            <input type="text" name="title" placeholder="title" onChange={handleChange} value={title} />
            <input type="text" name="status" placeholder="status" onChange={handleChange} value={status} />
            <input type="text" name="linkedin" placeholder="LinkedIn" onChange={handleChange} value={linkedin} />
            <input type="text" name="link" placeholder="link" onChange={handleChange} value={link} />
            <button type="submit">Add Card</button>
          </form>
        </div>
      );
  }
  
  export default Form;
  
///////////////

