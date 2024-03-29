import React, { useEffect, useState } from "react";
import "./App.css";
import "./Home.css";
import "./Status.css";
//router
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
// Pages
import Home from "./Page/Home";
import Reserve from "./Page/Reserve";
import Status from "./Page/Status";

import Input from "./Input";



let id = 1;

function App() {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  function AddUsername(title) {
    const newUsername = { id, title };
    setPassword([newUsername, ...username]);
    id += 1;

  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/status" element={<Status />} />
        <Route path="/Input" element={<Input />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
