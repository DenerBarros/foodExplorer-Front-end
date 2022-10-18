import { Container } from "./styles";

import almonds from '../../assets/ingredients/almonds.png';
import anise from '../../assets/ingredients/anise.png';
import apple from '../../assets/ingredients/apple.png';
import arugula from '../../assets/ingredients/arugula.png';
import breadNaan from '../../assets/ingredients/bread-naan.png';
import bread from '../../assets/ingredients/bread.png';
import cinnamon from '../../assets/ingredients/cinnamon.png';
import coffee from '../../assets/ingredients/coffee.png';
import cucumber from '../../assets/ingredients/cucumber.png';
import damascus from '../../assets/ingredients/damascus.png';
import egg from '../../assets/ingredients/egg.png';
import flour from '../../assets/ingredients/flour.png';
import ham from '../../assets/ingredients/ham.png';
import lemon from '../../assets/ingredients/lemon.png';
import lettuce from '../../assets/ingredients/lettuce.png';
import passionFruit from '../../assets/ingredients/passion-fruit.png';
import pasta from '../../assets/ingredients/pasta.png';
import peach from '../../assets/ingredients/peach.png';
import pesto from '../../assets/ingredients/pesto.png';
import plum from '../../assets/ingredients/plum.png';
import radish from '../../assets/ingredients/radish.png';
import shrimp from '../../assets/ingredients/shrimp.png';
import tomato from '../../assets/ingredients/tomato.png';
import whiskey from '../../assets/ingredients/whiskey.png';


export function Ingredient({ ingredientName }){

  function renderImgIngredient(name){
    let ingredientName = name.toLowerCase();

    ingredientName = ingredientName.replace(/[ÀÁÂÃÄÅ]/g,"a");
    ingredientName = ingredientName.replace(/[àáâãäå]/g,"a");
    ingredientName = ingredientName.replace(/[ÈÉÊË]/g,"e");
    ingredientName = ingredientName.replace(/[éèêẽ]/g,"e");
    ingredientName = ingredientName.replace(/[ùúûũ]/g,"u");
    ingredientName = ingredientName.replace(/[ÙÚÛŨ]/g,"u");
    

    let result

    if(ingredientName == "amendoas"){
      return result = almonds
    }else if(ingredientName == "aniz"){
      return result = anise
    }else if(ingredientName == "maça"){
      return result = apple
    }
    else if(ingredientName == "rucula"){
      return result = arugula
    }else if(ingredientName == "pao naan"){
      return result = breadNaan
    }else if(ingredientName == "pao"){
      return result = bread
    }else if(ingredientName == "canela"){
      return result = cinnamon
    }else if(ingredientName == "cafe"){
      return result = coffee
    }else if(ingredientName == "pepino"){
      return result = cucumber
    }else if(ingredientName == "damasco"){
      return result = damascus
    }else if(ingredientName == "ovo"){
      return result = egg
    }else if(ingredientName == "farinha"){
      return result = flour
    }else if(ingredientName == "presunto"){
      return result = ham
    }else if(ingredientName == "limao"){
      return result = lemon
    }else if(ingredientName == "alface"){
      return result = lettuce
    }else if(ingredientName == "maracuja"){
      return result = passionFruit
    }else if(ingredientName == "massa"){
      return result = pasta
    }else if(ingredientName == "pessego"){
      return result = peach
    }else if(ingredientName == "pesto"){
      return result = pesto
    }else if(ingredientName == "ameixa"){
      return result = plum
    }else if(ingredientName == "rabanete"){
      return result = radish
    }else if(ingredientName == "camarao"){
      return result = shrimp
    }else if(ingredientName == "tomate"){
      return result = tomato
    }else if(ingredientName == "whiskey"){
      return result = whiskey
    }
  }

  let result = renderImgIngredient(ingredientName);

  return (
    <Container>
      <img src={result} alt="" />
      <p>{ingredientName}</p>
    </Container>
  )
}