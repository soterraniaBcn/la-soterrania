import React from 'react';
import Register from './pages/Register'
import Footer from './components/Footer'
import Login from './pages/Login';
import PerfilAdmin from './pages/PerfilAdmin';
import './App.css';
import DetailArtista from './pages/DetailArtista'
import DetailSpace from './pages/DetailSpace'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Login/>
    <Register/>
    <DetailArtista/>
    <DetailSpace/>
    <Footer/>
    </>
  );
}

export default App;

{/* <BrowserRouter>
   <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/artist/detail" element={<DetailArtista />} />
     <Route path="/space/detail" element={<DetailSpace />} />
     <Route path="/register" element={<Register />} />
     <Route path="/perfiladmi" element={<PerfilAdmin />} />
   </Routes>
</BrowserRouter> */}