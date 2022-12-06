import React from 'react';
import "./App.css";

import { useState } from 'react';



const App = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(name, email, password);

  };


  return (

    <div className="container">
      <form className='form' onSubmit={handleSubmit} >
        <h1>Formulário de Cadastro</h1>
        <input
          type="text"
          placeholder='Nome completo'
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />


        <input
          type="email"
          placeholder='Email'
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />


        <input
          type="password"
          placeholder='Senha'
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}

        />

        <button type="submit">Enviar</button>

      </form>


    </div >
  );
};

export default App;