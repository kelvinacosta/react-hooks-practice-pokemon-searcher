import React,{useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
  
  //Initialize state with formData
  const [formData,setFormData] = useState({
    name:"",
    hp:"",
    sprites:{
      front:"",
      back:""
    }
  });
 
  const handleSubmit = (e) => {
    e.preventDefault()
    // Create a new Form 
    const newFormData = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.sprites.front,
        back: formData.sprites.back
      }
    }
    fetch("http://localhost:3001/pokemon",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newFormData)
    })
    .then(response=>response.json())
    .then(data=>{
      addPokemon(data)
      setFormData({
        name:"",
        hp:"",
        sprites:{
          front:"",
          back:""
        }
        })
    })
    .catch(err=>console.error("Error Posting Pokemon Card",err))
  }
  //Creates states to hold and change values for back and front url
  const [frontImageUrl, setFrontImageUrl] = useState("");
  const [backImageUrl, setBackImageUrl] = useState("");
  
  const handleChange = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target; //Destructure target with its value and name
    
     if (name === "frontUrl") { //Statement to check if name is == to control value formData
      setFrontImageUrl(value);
      setFormData({
        ...formData,
        sprites: {
          ...formData.sprites,
          front: value,
        },
      })
      }else if (name === "backUrl"){
        setBackImageUrl(value)
        setFormData({
          ...formData,sprites: {
            ...formData.sprites,
            back: value,
          }
        })
      }else {
      setFormData({ ...formData, [name]: value });
    }
  }
  
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange} value={formData.name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange} value={formData.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={formData.sprites.front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={formData.sprites.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
