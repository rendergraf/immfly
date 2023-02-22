import React, { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Layout from '../pages/Layout';
import Pokemon from '../pages/Pokemon';
import PokemonDetail from '../pages/PokemonDetail';

const Home = lazy(() => import('../pages/Home'));
const NoMatch = lazy(() => import('../pages/NoMatch'));

const LazyComponent = ({ component: Component, ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Suspense fallback={<Spinner isLoaded={isLoaded} />}>
      <Component {...rest} onLoad={() => setIsLoaded(true)} />
    </Suspense>
  );
};

const Root = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<LazyComponent component={Home} />} index />
        <Route
          path='/pokemon'
          element={<LazyComponent component={Pokemon} />}
        />
        <Route
          path='/pokemon/:name'
          element={<LazyComponent component={PokemonDetail} />}
        />
        <Route
          path='*'
          element={<LazyComponent component={NoMatch} />}
          status={404}
        />
      </Route>
    </Routes>
  );
};

export default Root;
