import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Spinner from '../../components/Spinner';
import goBack from '../../handlers/history.js';

function PokemonDetail () {
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setPokemonData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [name]);

  return (
    <>
      {loading && <Spinner />}
      {error && (
        <div className='error-detail'>
          <p>Oops, there was an error: {name} does not exist.</p>
          <a href='#' onClick={() => goBack()}>
            [Go Back]
          </a>
        </div>
      )}
      {!loading && !error && (
        <a href='#' className='pokemon-detail' onClick={() => goBack()}>
          <h1>{pokemonData.name}</h1>
          <LazyLoadImage
            src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemonData.name}.gif`}
            alt={`Image Alt-${pokemonData.name}`}
            className='img-lazy'
            width={128}
            height={128}
            placeholderSrc={<Spinner />}
            effect='blur'
          />
          <div className='pokemon-detail-info'>
            <p>ID: {pokemonData.id}</p>
            <div>
              Type:
              <ul>
                {pokemonData.types.map((item, index) => (
                  <li key={index}>{item.type.name}</li>
                ))}
              </ul>
            </div>
            <p>Weight: {pokemonData.weight}</p>
            <div>
              Abilities:
              <ul>
                {pokemonData.abilities.map((item, index) => (
                  <li key={index}>{item.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </a>
      )}
    </>
  );
}

export default PokemonDetail;
