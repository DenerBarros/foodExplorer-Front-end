import { useState } from 'react';

import { Container, Form } from './styles';

import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn(){
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const { signIn } = useAuth();


  function handleSignIn(){
    signIn({email, password});
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
          <h1>Faça login</h1>
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
            title="Entrar"
            onClick={handleSignIn}
          />

          <Link to="/register">Criar uma conta</Link>

        </Form>

    </Container>
  )
}