import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID =  '499edc48';
  const APP_KEY = '15591e2d90e50170e8d244e593cc73c4';
  const [recipies,setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('lemon')

  useEffect( () => {
    getRecipes(); 
  },[query])

  const getRecipes = async() => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

   return (
    <div className="App">
      <form onSubmit={getSearch} className = "search-form">
        <input className = "search-bar" type = "test" value = {search} onChange = {updateSearch}/>
        <button className = "search-button" type = "submit">
          Search</button>
      </form>
      <div className = "recipe">
     {recipies.map(recipe => (
       <Recipe 
        key = {recipe.recipe.calories}
        title = {recipe.recipe.label} 
        calories = {recipe.recipe.calories} 
       image = {recipe.recipe.image} />
     ))}
     </div>
    </div>
  );
}

export default App;
