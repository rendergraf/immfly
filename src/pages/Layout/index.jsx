import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import pokemon from '../../assets/images/pokemon.png';
import { Logo } from '../../components/Logo';

const Layout = () => {
  return (
    <>
      <header className='container header'>
        <div className='col-flex align-center'>
          <Logo />
          <Link to='/'>
            <img className='img-responsive' src={pokemon} alt='Logo Pokemon' />
          </Link>
        </div>
      </header>
      <main className='container main'>
        <Outlet />
      </main>
      <footer className='container footer'>
        <a href='https://xavieraraque.com' target='_blank' rel='noreferrer'>
          <h3>Powered by Xavier Araque</h3>
        </a>
      </footer>
    </>
  );
};

export default Layout;
