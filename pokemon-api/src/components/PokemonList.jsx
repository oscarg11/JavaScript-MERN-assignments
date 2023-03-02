import React,{useState, useEffect} from 'react'

const PokemonList = () => {
    // array of pokemon objects
    const[pokemon, SetPokemon] = useState([]);
    // this will run immediately after the JSX is rendered
    useEffect(() => {
        console.log("Hello")
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                // this will return the data from the response object
                //    in a json format
                return response.json()
            })
            .then(response => {
                // store the json converted data in state so it can be displayed
                SetPokemon(response.results)
            })
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