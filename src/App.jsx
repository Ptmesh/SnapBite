import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Recipe from "./components/Recipe";

function App() {
 
  const APP_ID = import.meta.env.VITE_REACT_APP_API_ID;
  const APP_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  

const [recipes,setRecipes]=useState([]);
const [search,setSearch]=useState("");
const[req,setReq]=useState("");

  useEffect( ()=>{
    getRecipies();
  },[req])

  const getRecipies= async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${req}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const getReq=(e)=>{
    e.preventDefault();
    setReq(search);
    setSearch("");
  }
  
  return (
    <div className='app'>
      <Header/>
      <form 
      onSubmit={getReq}
      className="search-form">
        <input type="text" value={search} 
         onChange={(e)=>{
          setSearch(e.target.value);
        }} 
        className="search-bar"
        placeholder='Let the hunt begin...'
        />
        
        <button  type="submit"  className="search-button"><SearchIcon/></button>
      </form>

      <div className='recipebox'>
      {recipes.map(item=>(
        <Recipe
        key={item.recipe.label}
        title={item.recipe.label}
        image={item.recipe.image}
        cal={Math.floor(item.recipe.calories)}
        ingredients={item.recipe.ingredients}

        />
      ))}
      </div>
    </div>
  )
}

export default App
