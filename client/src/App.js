import React from 'react';
import Register from './pages/Register'
import Footer from './components/Footer'
import Login from './pages/Login';
import PerfilAdmin from './pages/PerfilAdmin';
import './App.css';
import Detail from './pages/Detail'

function App() {
  return (
    <>
   <Login/>
   <Register/>
   <Detail/>
   <Footer/>
   <PerfilAdmin/>
    </>
  );
}

export default App;
