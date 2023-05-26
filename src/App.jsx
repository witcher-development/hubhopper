import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'

var username;
var password;


function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='/' exact element={<></>}/>
        </Routes>
        <Routes>
          <Route path='/a/' exact element={<></>}/>
        </Routes>
        <Routes>
          <Route path='/b/' element={<></>}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App
