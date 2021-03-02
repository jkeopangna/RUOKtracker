import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';


export const ButtonComponent = () => {
 

    return (
        <Button variant="secondary" size="lg" onClick={() => window.location.pathname="/login"}>
            Sign-In
      </Button>
    )

};
