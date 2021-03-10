import React, { useState } from 'react';
import {Form, Button } from 'react-bootstrap';
import API from "../utils/API";


const NewUserComponent = () => {

    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
      event.preventDefault();
      API.newUser({
        user: {
          name: formObject.username,
          password: formObject.password
        },
        symptoms: [{
          date: new Date(Date.now())
        }]

      })
      .then(console.log('New User Added'))
      .then((response) => response.json())
      .then(alert(`Greetings ${formObject.username}`))
      .catch(err => console.log(err));

      // document.getElementById('nausea').value = '';
      // document.getElementById('username').value = '';
      // document.getElementById('password').value = '';
      window.location.pathname = '/userpage';
    }


    return(

        <Form>
        
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" id="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          
          <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" id="username" placeholder="Username" onChange={handleInputChange} name="username"/>
          
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" id="password" placeholder="Password" onChange={handleInputChange} name="password"/>
          
          </Form.Group>
        </Form.Group>
      </Form.Group>
        

        <Button variant="dark" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>
      
    )
}

export default NewUserComponent;
