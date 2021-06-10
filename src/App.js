import logo from './healthy-eating.svg';
import { useState } from 'react';
import './App.css';
import Axios from 'axios';
import RecipeTile from './RecipeTile';

function App() {

  const [ingredient, setIngredient]=useState('');
    const [upperCal, setUpperCal] = useState(722);
  const [lowerCal, setLowerCal]= useState(0);
  const[recipes, setrecipes]=useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan")
  
  const YOUR_APP_ID ="8c79b19a";
const YOUR_APP_KEY ="f384179badbb612136fc4ba5108e96d8";
  var url=`https://api.edamam.com/search?q=${ingredient}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&calories=${lowerCal}-${upperCal}&health=${healthLabel}`;
  
  async function getRecipes(){
    var result=await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  

  const onChangeIngredient=(event)=>{
      setIngredient(event.target.value);
  };

  const onChangeUpperCal=(event)=>{
    setUpperCal(event.target.value);
  };

  const onChangeLowerCal=(event)=>{
    setLowerCal(event.target.value);
  };

  const onSubmit=(e)=>{
    e.preventDefault();
    getRecipes();
  }
  
  return (
    <div className="App">
      <div className="header">
      <h1 onClick={getRecipes}>Food Recipe Plaza
      <img id="logo" src={logo} alt=""/></h1>
      </div>
      <div>
          <form className="app_form" onSubmit={onSubmit}>
          <input type="text" className="ingredient" name="ingredient" placeholder="Ingredient" value={ingredient} onChange={onChangeIngredient}></input>&nbsp;&nbsp;
          <label>Calories
              </label><input type="text" className="upperCal" name="upperCal" placeholder="From" value={upperCal} onChange={onChangeUpperCal}></input>&nbsp;
              <input type="text" className="lowerCal" name="lowerCal" placeholder="To" value={lowerCal} onChange={onChangeLowerCal}></input>
            
              &nbsp;<button type="submit" className="searchButton" value="search">Search <i className="fa fa-search"></i></button>
              &nbsp;<select className="apphealth">
                <option value="Vegan" onClick={()=>sethealthLabel("Vegan")}>Vegan</option>
                <option value="Vegetarian" onClick={()=>sethealthLabel("Vegetarian")}>Vegetarian</option>
                <option value="Paleo" onClick={()=>sethealthLabel("Paleo")}>Paleo</option>
                <option value="High-Fiber" onClick={()=>sethealthLabel("High-Fiber")}>High-Fiber</option>
                <option value="High-Protein" onClick={()=>sethealthLabel("High-Protein")}>High-Protein</option>
                <option value="Low-Carb" onClick={()=>sethealthLabel("Low-Carb")}>Low-Carb</option>
                <option value="Low-Fat" onClick={()=>sethealthLabel("Low-Fat")}>Low-Fat</option>
                <option value="Low-Sodium" onClick={()=>sethealthLabel("Low-Sodium")}>Low-Sodium</option>
                <option value="Low-Sugar" onClick={()=>sethealthLabel("Low-Sugar")}>Low-Sugar</option>
                <option value="Alcohol-Free" onClick={()=>sethealthLabel("Alcohol-Free")}>Alcohol-Free</option>
                <option value="Balanced" onClick={()=>sethealthLabel("Balanced")}>Balanced</option>
                <option value="Immunity" onClick={()=>sethealthLabel("Immunity")}>Immunity</option>
                <option value="Gluten-Free" onClick={()=>sethealthLabel("Gluten-Free")}>Gluten-Free</option>
              </select>
              </form>
      </div>
      <div className="app_recipes">
        {recipes.map(recipe=>{
          return <RecipeTile recipe={recipe}/>
        })}
      </div>
    </div>
  );
}

export default App;
