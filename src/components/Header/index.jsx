import { FiLogOut, FiSearch } from 'react-icons/fi';
import { FaReceipt } from 'react-icons/fa'

import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import { Button } from '../../components/Button';

export function Header({ search}){

  const { signOut, user } = useAuth();

  function handleSignOut(){
    signOut();
  }

  
  return (
    <Container>
      <div>
        <Link to="/">
          <svg width="29" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
          </svg>
          <h2>
            food explorer
          </h2>
        </Link>
      </div>

      <nav>
        
        {user.is_admin ? <a href="/new">Novo Prato</a> : <a href="#">Meus favoritos</a> }
        
        <div className="search">
          <FiSearch size={20}/>
          <input
            onChange={e => search(e.target.value)} 
            type="text" 
            placeholder="Busque pelas opções de pratos"
          />
        </div>

        <Button icon={FaReceipt} title="Meu pedido (0)"/>
      
        <Link to="/" onClick={handleSignOut} className="logout">
          <FiLogOut/>
        </Link>

      </nav>
      
      
      
        
     

      
   
      
  
 
    </Container>
  )
}