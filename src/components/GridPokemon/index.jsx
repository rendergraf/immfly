import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Spinner from '../Spinner';

const GridPokemon = ({
  item: {
    /* sprites: { front_default: url }, */
    name
  }
}) => (
  <Link to={`/pokemon/${name}`}>
    <article className='grid-pokemon-card'>
      <LazyLoadImage
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
        alt={`Image Alt-${name}`}
        className='img-lazy'
        width={96}
        height={96}
        placeholderSrc={<Spinner />}
        effect='blur'
      />
      <h3 className='grid-pokemon-name'>{name}</h3>
    </article>
  </Link>
);

GridPokemon.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape({
      front_default: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default GridPokemon;
