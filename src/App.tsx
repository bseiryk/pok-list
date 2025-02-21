import React from 'react';
import { Pokemon } from './components/Pokemon/Pokemon';
import { fetchPokemonList } from './api';
import { LocalPokemon } from './types';

import './styles.css';

export const App = () => {
  const [pokemons, setPokemons] = React.useState<LocalPokemon[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const data = await fetchPokemonList();
        setPokemons(data.map((pokemon) => ({ name: pokemon, selected: null })));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="app">
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} className="mt-10">
          <Pokemon data={pokemon} onSelect={() => {}} />
        </div>
      ))}
    </div>
  );
};
