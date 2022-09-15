import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PerfilAdmin from "./pages/PerfilAdmin";
import "./App.css";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";


function App() {
  return (
    <>
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
    </>
  );
}

export default App;
