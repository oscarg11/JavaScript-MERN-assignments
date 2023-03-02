import React,{useState, useEffect} from 'react'
// install axios
import axios from 'axios';

const PokemonList = () => {
    // array of pokemon objects
    const[pokemon, SetPokemon] = useState([]);
    // this will run immediately after the JSX is rendered
    useEffect(() => {
        console.log("Hello")
        // switched fetch to axios.get()
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                // store the converted data in state so it can be displayed
                SetPokemon(response.data.results)})
            .catch((err)=>{
                console.log(err);
            })
    // The empty array as the second parameter makes it so that useEffect 
  //    does NOT run more than once
    }, []);
// display
  return (
    <div style={{display: "table",margin: "0 auto", textAlign: "left"}}>
        <h1>Pokemon List</h1>
        <ul>
        {
        pokemon.map((pokemon, index)=>{
        
            return (<li key={index}>{pokemon.name}</li>)
        })
            
    }
        </ul>
    </div>
  );
}

export default PokemonList