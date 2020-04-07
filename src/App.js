import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';
import ChooseUs from './components/ChooseUS/ChooseUs';
import Footer from './components/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Error from './components/Error/Error';
import SingleFood from './components/SingleFood/SingleFood';
import Login from './components/Login/Login';
import { useState } from 'react';

function App() {
  





  return (
    <div className="App">
     
     <Router>
       <Switch>
         <Route exact path="/">
          <Header></Header>
          <Banner></Banner>
          <Content></Content>
          <ChooseUs></ChooseUs>
          <Footer></Footer>
         </Route>
         <Route path="/login">
            <Login></Login>
         </Route>
         <Route path="/food/:id">
            <Header></Header>
            <SingleFood></SingleFood>
            <Footer></Footer>
         </Route>
         <Route path="*">
            <Header></Header>
            <Banner></Banner>
            <Error></Error>
         </Route>
       </Switch>
     </Router>
      
    </div>
  );
}

export default App;
