import { FiHeart, FiEdit3, FiTrash  } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { useNavigate } from 'react-router-dom';

import { Button } from '../Button'

export function Card({ data }){
  const imgURL = `${api.defaults.baseURL}/files/${data.img}`

  const  { user } = useAuth();
  const navigate = useNavigate();

  function handleDetails(id){
    navigate(`/details/${id}`);
  }

  function handleEditDish(id){
    navigate(`/edit/${id}`);
  }

  async function handleRemoveDish(){
    const confirm = window.confirm("Você deseja excluir esse prato do menu ?")

    if(confirm){
      await api.delete(`/dishes/${data.id}`)
      location.reload()
    }
  }

  return (
    <Container>
        <img src={imgURL} alt={data.title} />
        
        <button onClick={() => handleDetails(data.id)}>
          <h2>{data.title} <FaAngleRight/></h2>
        </button>
        
        <p>{data.description}</p>

        <span>R$ {data.price}</span>

        <div>
          <span> - </span>
          <span> 01 </span>
          <span> + </span>

          <Button title="Incluir"/>
        </div>

        { user.is_admin ?

          <button onClick={handleRemoveDish} className='favorite-btn'>
            <FiTrash/>
          </button>

              :

          <button className='favorite-btn'>
            <FiHeart/>
          </button> 
        }

        <button  onClick={() => handleEditDish(data.id)} className={user.is_admin ? "edit-btn" : "remove"}>
          <FiEdit3/>
        </button>
    </Container>
  )
}