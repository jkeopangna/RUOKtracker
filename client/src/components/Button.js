import React from 'react';
import './Button.css';
import {Button} from 'react-bootstrap';


export const ButtonComponent = () => {
 

    return (
        <Button className="signin" variant="secondary" size="lg" onClick={() => window.location.pathname="/login"}>
            Sign-In
      </Button>
    )

};
