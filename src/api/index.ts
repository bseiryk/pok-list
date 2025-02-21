export const fetchPokemonList = async (): Promise<string[]> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const result = await response.json();
  return result.results.map((pokemon: { name: string }) => pokemon.name);
};

export const selectPokemon = async (name: string): Promise<void> => {
  // delay function to simulate network request
};
