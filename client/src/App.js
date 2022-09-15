<<<<<<< HEAD
import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PerfilAdmin from "./pages/PerfilAdmin";
import "./App.css";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";
=======
import React from 'react';
import Register from './pages/Register'
import Footer from './components/Footer'
import Login from './pages/Login';
import PerfilAdmin from './pages/PerfilAdmin';
import './App.css';
import DetailArtista from './pages/DetailArtista'
import DetailSpace from './pages/DetailSpace'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import HomePage from './components/HomePage'
>>>>>>> 4e1b0364db9fccf21e3793cc178e7bc2b215c28d


function App() {
  return (
    <>
<<<<<<< HEAD
      <Login />
      <Register />
      <PerfilAdmin />
      <Detail />
      <Footer/>
    

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
=======
    <Login/>
    <Register/>
    <Home/>
    <HomePage/>
    <DetailArtista/>
    <DetailSpace/>
    <Footer/>
>>>>>>> 4e1b0364db9fccf21e3793cc178e7bc2b215c28d
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