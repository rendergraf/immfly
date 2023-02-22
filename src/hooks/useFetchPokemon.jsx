import { useEffect, useState } from 'react';

const useFetchPokemon = (name) => {
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPokemonData(data);
      })
      .catch((error) => console.error(error));
  }, [name]);

  return { pokemonData, loading };
};

export default useFetchPokemon;
