import React from 'react';
import Register from './pages/Register';
import Artistas from './pages/Artistas';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import HeaderSearch from './components/HeaderSearch'
import './App.css';
import PerfilAdmin from './pages/PerfilAdmin';
import Login from './pages/Login'

function App() {
  return (
    <>
    {/*<BrowserRouter> 
    <Router>
      <Switch>
        <Route exact path="/register">
          <Register/>
        </Route> 
        <Route exact path="/artistas">
          <Artistas/>
        </Route>
      </Switch>
   </Router>
  </BrowserRouter>*/}
  <Login/>
  <PerfilAdmin/>
    </>
  );
}

export default App;
