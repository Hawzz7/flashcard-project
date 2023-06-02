import React from "react";
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import CreateFlashcard from "./AppPages/CreateFlashcard"
import MyFlashcard from "./AppPages/MyFlashcard";
import DetailsFlashcard from "./AppPages/DetailsFlashcard";

function App () {
  return (
  <div className="w-screen min-h-screen antialiased bg-stone-300">
  <Header/>
  <Navbar/>
  
  <Routes>
    <Route 
    path="/createflashcard" 
    element={<CreateFlashcard/>}
    />

    <Route
    path="/myflashcard"
    element={<MyFlashcard/>}
    />

    <Route
    path="/detailsflashcard/:groupId"
    element={<DetailsFlashcard/>}
    />
    
  </Routes>

  </div>);
}

export default App;
