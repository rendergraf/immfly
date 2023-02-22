/* eslint-disable no-undef */
import React from 'react';

import notfound from '../../assets/images/404.svg';
import goBack from '../../handlers/history.js';

const Nomatch = () => {
  return (
    <div className='error404'>
      <object data={notfound} type='image/svg+xml' />
      <h2>Page no found.</h2>
      <a href='#' onClick={() => goBack()}>
        [Go Back]
      </a>
    </div>
  );
};

export default Nomatch;
