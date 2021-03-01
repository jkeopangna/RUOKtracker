import React from 'react';
import "./App.css";
import NavbarComponent from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import UserPage from './components/pages/UserPage';
import Clinics from './components/pages/Clinics';
import LogIn from './components/pages/LogIn';

function App() {
  return (
    <>
    <Router>
     <NavbarComponent />
     <Switch>
       <Route path="/" exact component ={Home} />
       <Route path="/userpage" exact component ={UserPage} />
       <Route path="/clinics" exact component ={Clinics} />
       <Route path="/login" exact component={LogIn} />
     </Switch>
    </Router>
    </>
  );
}


export default App;
