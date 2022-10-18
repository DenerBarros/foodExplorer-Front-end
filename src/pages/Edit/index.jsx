import { useState, useEffect } from 'react';

import { Container, TagWrapper, InputWrapper } from './styles';

import { FaAngleLeft } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { IngredientItem } from '../../components/IngredientItem';
import { TextArea } from '../../components/TextArea';
import { Input } from '../../components/Input';


export function Edit(){

  const [ title, setTitle ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ price, setPrice ] = useState(""); 
  const [ description, setDescription ] = useState("");
  const [ imgFile, setImgFile ] = useState(null);

  const [ ingredients, setIngredients ] = useState([]);
  const [ newIngredient, setNewIngredient ] = useState("");

  const params = useParams();

  const navigation = useNavigate();

  function handleBack(){
    navigation(-1)
  }

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));

  }

  async function handleNewDish(){

    if(!imgFile){
      return alert("Adicione uma imagem do prato!")
    }

    if(!title){
      return alert("Adicione o nome do prato!")
    }

    if(!category){
      return alert("Adicione a categoria do prato!")
    }

    if(ingredients.length < 1){
      return alert("Adicione os ingredientes do prato!")
    }


    if(!price){
      return alert("Adicione o valor do prato!")
    }

    if(!description){
      return alert("Adicione a descrição do prato!")
    }

   
    if (newIngredient){
      return alert("Você deixou um ingrediente no campo, mas não o adicionou, adicione ele ou deixe o campo vazio!")
    }


    const formData = new FormData();
    formData.append("img", imgFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map(ingredient => (
      formData.append("ingredients", ingredient)
    ))

    await api
    .put(`/dishes/${params.id}`, formData)
    .then(alert("Prato editado com sucesso!"), navigation("/"))
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao editar o prato");
      }
    });

  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)

      const { title, description, category, price, ingredients} = response.data;
      setTitle(title);
      setDescription(description);
      setCategory(category);
      setPrice(price);
      setIngredients(ingredients.map(ingredient => ingredient.name));
    }

    fetchDish();
  }, [])


  return (
    <Container>
      <Header/>
      <main>
        <button onClick={handleBack}><FaAngleLeft/> Voltar</button>

        <h1>Editar prato</h1>

        <form>
          <InputWrapper>
            <div>
              <label id="file" htmlFor="image">
                Imagem do prato
              <div className='input-file-wrapper'>
                <FiUpload size={24}/>
                <span>Selecione a imagem</span>
                <input
                  id="image"
                  type="file"
                  onChange={e => setImgFile(e.target.files[0])}  
                />
              </div>
              </label>
            </div>
              <Input 
                onChange={ e => setTitle(e.target.value)}
                label="name" 
                title="Nome do prato" 
                type="text" 
                placeholder={title}
              />

              <Input
                onChange={ e => setCategory(e.target.value)}
                label="category"
                title="Categoria"
                type="text"
                placeholder={category}
              />
            </InputWrapper>

            <InputWrapper>
              <div>
                <label htmlFor="dish-ingredient">Ingredientes</label>            
                <TagWrapper>

                  {
                    ingredients.map((ingredient, index) => (
                      <IngredientItem
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))
                  }
                  
                  <IngredientItem
                    isNew
                    placeholder="Adicionar"
                    value={newIngredient}
                    onChange={e => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                   />
                  
                </TagWrapper>
              </div>
              

              <Input 
                onChange={ e => setPrice(e.target.value)}
                label="price"
                title="Preço"
                type="text"
                placeholder={price}
              />
            </InputWrapper>
          
            

            

          <div>
            <label htmlFor="dish-description">Descrição</label>
            <TextArea 
              onChange={ e => setDescription(e.target.value)}
              placeholder={description}
            />
          </div>

          <div className='submit-btn-wrapper'>
            <button
              type='button' 
              onClick={handleNewDish}
              className='submit-btn'
            >
                Adicionar prato
            </button>
          </div>
          
        </form>

      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  )
}