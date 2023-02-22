import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h2 className='subtitle'>Pokemon test</h2>
      <div className='home-info'>
        <p className='paragraph'>
          "Hello. This is the Immfly frontend code test. I built a web app that
          lists the first generation of Pokémon. I used React 18.2.0 and React
          Dom 6.8.0, for the bundle I used Webpack 5.75.0, as well as several
          libraries such as Babel, SASS, Lazy Load, and Eslint to enhance my
          code. There are other less significant libraries, but that does not
          make them any less important."
        </p>
        <p className='paragraph'>
          You can navigate with accessibility, pressing the tabs key "look at
          the links with a blue border with dots", to navigate within the links
          and with the enter key to access links
        </p>
        <Link to='/pokemon' className='retro'>
          Enter
        </Link>
      </div>
    </>
  );
};

export default Home;
