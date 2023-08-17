import React, { useEffect, useState } from 'react';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const limit = 600;
  const totalPokemon = 600;
  const typesWithColors = {
    Normal: 'bg-gray-400',
    Fire: 'bg-red-500',
    Water: 'bg-blue-500',
    Electric: 'bg-yellow-400',
    Grass: 'bg-green-500',
    Ice: 'bg-blue-200',
    Fighting: 'bg-red-600',
    Poison: 'bg-purple-500',
    Ground: 'bg-yellow-700',
    Flying: 'bg-indigo-500',
    Psychic: 'bg-pink-500',
    Bug: 'bg-green-600',
    Rock: 'bg-gray-700',
    Ghost: 'bg-indigo-600',
    Dragon: 'bg-purple-700',
    Dark: 'bg-gray-900',
    Steel: 'bg-blue-800',
    Fairy: 'bg-pink-300'
  };

  const types = [
    'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice',
    'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug',
    'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy'
  ];

  useEffect(() => {
    loadPokemonData();
  }, []);

  useEffect(() => {
    // Apply filtering when selectedType changes
    if (selectedType) {
      const filteredPokemons = pokemonList.filter(pokemon =>
        pokemon.types.some(pokemonType => pokemonType.toLowerCase() === selectedType.toLowerCase())
      );
      setPokemonList(filteredPokemons);
    } else {
      loadPokemonData(); // Load the original list when filter is cleared
    }
  }, [selectedType]);

  const loadPokemonData = async () => {
    setIsLoadingMore(true);
    try {
      const offset = 0; // Reset the offset to start from the beginning
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      const data = await response.json();
      const fetchedPokemon = await fetchPokemonTypes(data.results);
      setPokemonList(fetchedPokemon); // Replace the entire list with the new data
      setIsLoadingMore(false);
      setIsLoadingInitial(false);
    } catch (error) {
      console.log('Error fetching Pokemon data:', error);
      setIsLoadingMore(false);
      setIsLoadingInitial(false);
    }
  };

  const fetchPokemonTypes = async (fetchedPokemon) => {
    const pokemonWithTypePromises = fetchedPokemon.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return {
        ...pokemon,
        types: data.types.map(type => type.type.name),
      };
    });
    return Promise.all(pokemonWithTypePromises);
  };

  const clearFilter = () => {
    setSelectedType(null);
  };

  return (
    <div>
      <div className="p-4 bg-gray-200">
        <div className="botonera grid grid-cols-2 sm:grid-cols-4 gap-2">
          {types.map(type => (
            <button
              key={type}
              className={`text-white rounded-full px-4 py-2 ${typesWithColors[type]} ${
                selectedType === type ? 'bg-opacity-50' : ''
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
          <button
            className="text-white rounded-full px-4 py-2 bg-gray-500"
            onClick={clearFilter}
          >
            Reset
          </button>
          <button
            className="text-white rounded-full px-4 py-2 bg-gray-500"
            onClick={clearFilter}
          >
            Hide
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.map(pokemon => (
          <div key={pokemon.name} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
              alt={pokemon.name}
              className="mx-auto mb-2"
            />
            <p className="text-center">{pokemon.name.toUpperCase()}</p>
            {pokemon.types && (
              <p className="text-center">{pokemon.types.join(', ')}</p>
            )}
          </div>
        ))}
        {isLoadingInitial && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-8 w-8"></div>
          </div>
        )}
        {isLoadingMore && (
          <p className="text-center">Loading more Pokémon...</p>
        )}
      </div>
    </div>
  );
};

export default PokemonList;