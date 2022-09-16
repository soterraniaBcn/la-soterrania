import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './components/Home'
import HomePage from './components/HomePage'
import DetailArtista from './pages/DetailArtista'
import DetailSpace from './pages/DetailSpace'
import PerfilAdmin from './pages/PerfilAdmin'
import Header from './components/Header';


export default function Router() {
  return (
    <div>
      
          <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/artistes/detall" element={<DetailArtista />} />
        <Route exact path="/espais/detall" element={<DetailSpace />} />
        <Route exact path="/perfiladmin" element={<PerfilAdmin />} />
        </Routes>
    
    </div>
  )
}
