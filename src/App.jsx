import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './header'
import NavBar from './navBar'

function App() {
  
  const [pokemon, setPokemon] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('no existe eso pa');
      }
      const data = await response.json();
      console.log(data)
      setPokemon(data);
      setError('');
      
    } catch (error) {
      console.error(error);
      setPokemon(null);
      setError('le erraste');
    }
  };
 
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    
    <div style={{
      background:'#944BBB'
    }}>
      <h1 style={{background:'#531cb3'}}>Pokedex</h1>
     <h2>dsad</h2>
      <label htmlFor="search-input">Buscar un Pokémon:</label>
      <input type="text" id="search-input" value={searchQuery} onChange={handleSearchQueryChange} />
      <button onClick={handleSearch}>Buscar</button>
      {error && <p>{error}</p>}
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <div>
          <img style={{
            height: '20rem',
            weight: '20rem',
          }} src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
          <img style={{
            height: '20rem',
            weight: '20rem',
          }} src={pokemon.sprites.other.home.front_shiny} alt={pokemon.name} />
          <button>🡠</button>
          <button>🡢</button>
          </div>

          <div style={{
            display:'table-row',
            justifyContent:'center',
            

          }}>
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
          <span>Hablidad: {pokemon.abilities.map((item) => <p>{item.ability.name}</p>)}</span>
          <p>Tipo: {pokemon.types.map((item) => <p>{item.type.name}</p>)}</p>
          </div>
         
        </div>
      )}
    </div>
  );
}

export default App