import { useState } from 'react';
import { Container, Form } from './styles';


import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp(){
  const [name, setName ] = useState("");
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");

  const navigate = useNavigate();


  function handleSubmit(){
    if( !name || !email || !password){
      return alert("Preencha todos os campos!")
    }

    if( password.length < 6){
      return alert("Senha precisa de no mínimo 6 caracteres!")
    }

    api.post('/users', { name, email, password })
    .then(() => {
    alert("Conta criada com sucesso!")
  })
    .catch(error => {
      if (error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível criar a conta no momento!")
      }
    })
    
    navigate("/");
  }


  return (
    <Container>
      <div>
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
        </svg>
        <h1>food explorer</h1>
      </div>

        <Form>
          <h1>Crie sua conta</h1>

          <Input 
            type="text"
            title="Nome"
            label="name"
            placeholder="Exemplo: Rafael Bento"
            onChange={e => setName(e.target.value)}
          />


          <Input
            type="email"
            title="Email"
            label="email"
            placeholder="exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            type="password"
            title="Senha"
            label="password"
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />

          <Button 
            title="Criar sua conta"
            onClick={handleSubmit}
          />

          <Link to="/">Já tenho uma conta</Link>

        </Form>

    </Container>
  )
  }