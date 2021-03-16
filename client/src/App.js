import React from 'react';
import "./App.css";
import NavbarComponent from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import UserPage from './components/pages/UserPage';
import Clinics from './components/pages/Clinics';
import LogIn from './components/pages/LogIn';
import Signup from './components/pages/Signup'
import Resources from './components/pages/Resources';
import Chart from './components/Chart';


function App() {

  return (
    <>
    <Router>
     <NavbarComponent />
     <Switch>
       <Route path="/" exact component={Home} />
       {/* <Route exact path="/"><Home updateUser={updateUser}/></Route> */}
       <Route path="/userpage" exact component ={UserPage} />
       <Route path="/clinics" exact component ={Clinics} />
       <Route path="/login" exact component={LogIn} />
       <Route path="/signup" exact component={Signup} />
       <Route path="/viewcharts" exact component={Chart} />
       <Route path="/resources" exact component={Resources} />
     </Switch>
    </Router>
    </>
  );
}


export default App;
