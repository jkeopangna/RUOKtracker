import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import API from "../utils/API";
import jwtDecode from "jwt-decode";

const LogInComponent = ({ history }) => {
  const [formValues, setformValues] = useState({ username: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { token },
      } = await API.logIn(formValues);
      const { id } = jwtDecode(token);
      sessionStorage.setItem("userId", id);
      history.push("/userpage");
    } catch (err) {
      console.log("an err occured==>.", err);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setformValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const { username, password } = formValues;

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="username"
          value={username}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter username"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          value={password}
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button type="submit" variant="dark">
        Submit
      </Button>
    </Form>
  );
};

export default withRouter(LogInComponent);
