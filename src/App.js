import React from "react";
import { Route, Switch } from 'react-router-dom';

import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import noMatch from "./components/nomatch/noMatch";


function App() {
  return (
    <div className="App">

      <Navigation/>
      
      
      <Switch>
      <Route 
      exact path="/" 
      render={(props) => <Welcome {...props} name='Chaxx' />}
      />
      <Route 
      exact path="/welcome/:name" 
      render={(props) => <Welcome {...props} name={props.match.params.name}/>}
      />
      <Route exact path="/clock" component={Clock} />
      <Route exact path="/contact" component={Contact} />
       <Route path="*" component={noMatch}/>
      </Switch>

    </div>
  );
}

export default App;
