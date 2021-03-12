import React, { useState } from "react";
import {withRouter} from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import API from "../utils/API";

const NewUserComponent = ({history}) => {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.Register({
        username: formObject.username,
        password: formObject.password,
    })
      .then((user) => {
        alert(`Greetings ${formObject.username}`);
        console.log('data==>>', user)
        sessionStorage.setItem('userId', user.data._id)
        history.push("/userpage");
      })
      .catch((err) => console.log(err));

    // document.getElementById('nausea').value = '';
    // document.getElementById('username').value = '';
    // document.getElementById('password').value = '';
    //window.location.pathname = "/userpage";
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" id="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>

        <Form.Group >
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            placeholder="Username"
            onChange={handleInputChange}
            name="username"
            required
          />

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleInputChange}
              name="password"
              required
            />
          </Form.Group>
        </Form.Group>
      </Form.Group>
      <Button type="submit" variant="dark">Submit</Button>
    </Form>
  );
};

export default withRouter(NewUserComponent);
