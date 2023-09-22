import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  
  const {id,name,sprites,hp} = pokemon
  const [image,setImage] = useState(true);
  

  const handlPokeCard = () => {
    setImage(!image)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handlPokeCard} >
          {image ? <img src={sprites.front} alt="oh no!" /> : <img src={sprites.back} alt="oh no!"/>}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
           {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
