import React from 'react';
<<<<<<< HEAD
import Register from './pages/Register'
import Footer from './components/Footer'
import Login from './pages/Login';
import PerfilAdmin from './pages/PerfilAdmin';
import './App.css';
import Detail from './pages/Detail'
=======
import Register from './pages/Register';
import Artistas from './pages/Artistas';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import HeaderSearch from './components/HeaderSearch'
import './App.css';
import PerfilAdmin from './pages/PerfilAdmin';
import Login from './pages/Login'
>>>>>>> perfiladmin/Sara

function App() {
  return (
    <>
<<<<<<< HEAD
   <Login/>
   <Register/>
   <Detail/>
   <Footer/>
   <PerfilAdmin/>
=======
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
>>>>>>> perfiladmin/Sara
    </>
  );
}

export default App;
