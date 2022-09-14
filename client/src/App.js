import React from 'react';
import Register from './pages/Register'
import Footer from './components/Footer'
import Login from './pages/Login';
import PerfilAdmin from './pages/PerfilAdmin';
import './App.css';
import DetailArtista from './pages/DetailArtista'
import DetailSpace from './pages/DetailSpace'
import Home from './components/Home'
import HomePage from './components/HomePage'


function App() {
  return (
    <>
    <Home/>
    <HomePage/>
    <DetailArtista/>
    <DetailSpace/>
   {/* <Login/>
   <Register/>
   <Footer/>
   <PerfilAdmin/> */}
    </>
  );
}

export default App;
