import Left_nav_bar from "./components/Left_nav_bar"
import Sous_container from "./components/Sous_container"
import Top_nav_bar from "./components/Top_nav_bar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Arduino from "./components/Arduino";
import React from "react";

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
      
      <Routes>
        <Route path="/home" element={<Sous_container composant={<Home/>} />}></Route>
        <Route path="/workspace" element={
          <div id="sous_container1">
            {<Arduino/>}
          </div>
        }></Route>
      </Routes>
      </BrowserRouter>
      </div>
      </>
    )
  }
  
}

export default App