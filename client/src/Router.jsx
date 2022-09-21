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


export default function Router() {
  return (
    <div>
      
          <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
<<<<<<< HEAD
        <Route exact path="/espera" element={<WaitingRoom/>} />
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/artistes/detall" element={<DetailArtista />} />
        <Route exact path="/espais/detall" element={<DetailSpace />} />
        <Route exact path="/perfiladmin" element={<PerfilAdmin />} />
        <Route exact path="/sobrenosaltres" element={<About />} />
        <Route exact path="/events" element={<DetailEvent />} />
        <Route exact path="/newpost" element={<NewPost />} />
        <Route exact path="/avíslegal" element={<LegalWarning />} />
        <Route exact path="/admin/editarartistes" element={<EditArtist />} />
        <Route exact path="/admin/editarespais" element={<EditSpaces />} />
        <Route exact path="/admin/editaresdeveniments" element={<EditEvents />} />

      </Routes>

=======
        <Route exact path="/homepage" elemen
        t={<HomePage />} />
        <Route exact path="/artist/detail" element={<DetailArtista />} />
        <Route exact path="/space/detail" element={<DetailSpace />} />
        <Route exact path="/perfiladmin" element={<PerfilAdmin />} />
        <Route exact path="/events" element={<DetailEvent />} />
      </Routes>
>>>>>>> login
    </div>
  )
}
