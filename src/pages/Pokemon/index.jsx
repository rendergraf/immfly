import React, { useEffect, useState } from 'react';
import GridPokemon from '../../components/GridPokemon';
import SearchPokemon from '../../components/SearchPokemon';
import Spinner from '../../components/Spinner';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=24&offset=${(currentPage - 1) * 24}`)
      .then((response) => response.json())
      .then(async (data) => {
        const pokemonData = await Promise.all(
          data.results.map(async (result) => {
            const item = await fetch(result.url).then((result) =>
              result.json()
            );
            return item;
          })
        );
        setCount(data.count);
        setPokemon(pokemonData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [currentPage]);

  if (error) {
    return (
      <p>Hubo un error al obtener los pokemones. Por favor intenta de nuevo.</p>
    );
  }

  return (
    <>
      {loading
        ? (
          <Spinner />
          )
        : (
          <>
            <h1>Generation 1</h1>
            {!isSearch && <h2 className='count'>{count} Pokemon</h2>}
            <SearchPokemon setIsSearch={setIsSearch} />
            {!isSearch && (
              <div className='grid-section'>
                {pokemon.map((item, i) => (
                  <GridPokemon item={item} key={i} />
                ))}
              </div>
            )}

            {!isSearch && (
              <div className='pagination'>
                <button
                  className='retro'
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <button
                  className='retro'
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            )}
          </>
          )}
    </>
  );
};

export default Pokemon;
