import Left_nav_bar from "./components/Left_nav_bar"
import Sous_container from "./components/Sous_container"
import Top_nav_bar from "./components/Top_nav_bar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Arduino from "./components/Arduino";
import React from "react";
import API from "./components/API";
import Parametre from "./components/Parametre";
import Messenger from "./components/Messagerie";

class App extends React.Component{

  constructor(props){
    super(props);
   }

  render(){

    return(
      <>
      <div id="container">
      <BrowserRouter>
      <Left_nav_bar/>
      <Top_nav_bar/>
      <div id="sous_container1">
      <Routes>
        <Route path="/" element={<Sous_container composant={<Home/>} />}></Route>
        <Route path="/workspace" element={ <Arduino/>}></Route>
        <Route path="/API" element={<API/>}></Route>
        <Route path="/Parametre" element={<Parametre/>}></Route>
        <Route path="/Messagerie" element={<Messenger/>}></Route>
      </Routes>
      </div>
      </BrowserRouter>
      </div>
      </>
    )
  }
  
}

export default App