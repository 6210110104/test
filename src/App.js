import React, { useEffect, useState } from 'react';
import './App.css';

import FirstPage from './FirstPage';
import Input from './Input';

let id = 1;

function App() {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  function AddUsername(title) {
    const newUsername = {id, title};
    setPassword([newUsername, ...username]);
    id += 1;
  }
return (
<div className="App">
  <FirstPage />
  <Input setUsername={setUsername} setPassword={setPassword}/>
</div>);

}

export default App;
