import React from "react";
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar_Comp from "./components/Navbar_Comp";
import Slide_Comp from "./components/Slide_Comp";
import Home from "./components/Home";
import Picture from "./components/Picture";
import Login from "./components/Login";
import Register from "./components/Register";
import UpcomingMovies from "./components/UpcomingMovies";
import UpPictures from "./components/UpPictures";
import Tamil from "./components/Tamil";
import English from "./components/English";
import Hindi from "./components/Hindi";
import Telugu from "./components/Telugu";
import Malayalam from "./components/Malayalam";
import Conjurin from "./components/Conjurin";
import FightClub from "./components/FightClub";
import Aalambana from "./components/Aalambana";
import Animal from "./components/Animal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar_Comp />
              <Slide_Comp />
              <Home />
              <Picture />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
        path="/explore" 
        element=
        {
          <div>
        
        <UpcomingMovies />
        <UpPictures />
        </div>
        }/>
        <Route path="/tamil" element={<Tamil />}></Route>
        <Route path="/english" element={<English />}></Route>
        <Route path="/hindi" element={<Hindi />}></Route>
        <Route path="/telugu" element={<Telugu />}></Route>
        <Route path="/malayalam" element={<Malayalam />}></Route>
        <Route path="/kanada" element={<Malayalam />}></Route>
        <Route path="/conjurin" element={<Conjurin/>}></Route>
        <Route path="/fight" element={<FightClub/>}></Route>
        <Route path="/al" element={<Aalambana/>}></Route>
        <Route path="/animal" element={<Animal/>}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
