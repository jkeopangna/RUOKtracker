import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import UserPage from './components/pages/UserPage';
import Clinics from './components/pages/Clinics';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
       <Route path="/" exact component ={Home} />
       <Route path="/userpage" exact component ={UserPage} />
       <Route path="/clinics" exact component ={Clinics} />
     </Switch>
    </Router>
    </>
  );
}


export default App;
