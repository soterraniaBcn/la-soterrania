import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './components/Home'
import HomePage from './components/HomePage'
import DetailArtista from './pages/DetailArtista'
import DetailSpace from './pages/DetailSpace'
import PerfilAdmin from './pages/PerfilAdmin'
import About from './pages/About'
import DetailEvent from './pages/DetailEvent'
import WaitingRoom from './pages/WaitingRoom'
import LegalWarning from './pages/LegalWarning'
import NewPost from './pages/NewPost'
import EditArtist from './pages/EditArtist'
import EditSpaces from './pages/EditSpaces'
import EditEvents from './pages/EditEvent'
import ElMeuPerfilArtista from './pages/ElMeuPerfilArtista'
import ElMeuPerfilEspai from './pages/ElMeuPerfilEspai'
import Artistas from './pages/Artistas'


export default function Router() {
  return (
    <div>
      
          <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/espera" element={<WaitingRoom/>} />
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/artistes/detall" element={<DetailArtista />} />
        <Route exact path="/espais/detall" element={<DetailSpace />} />
        <Route exact path="/admin/perfiladmin" element={<PerfilAdmin />} />
        <Route exact path="/sobrenosaltres" element={<About />} />
        <Route exact path="/events" element={<DetailEvent />} />
        <Route exact path="/newpost" element={<NewPost />} />
        <Route exact path="/avislegal" element={<LegalWarning />} />
        <Route exact path="/elmeuperfilartista" element={<ElMeuPerfilArtista />} />
        <Route exact path="/elmeuperfilespai" element={<ElMeuPerfilEspai />} />
        <Route exact path="/admin/editarartistes" element={<EditArtist />} />
        <Route exact path="/admin/editarespais" element={<EditSpaces />} />
        <Route exact path="/admin/editaresdeveniments" element={<EditEvents />} />
        <Route exact path="/artistes" element={<Artistas />} />


      </Routes>

    </div>
  )
}
