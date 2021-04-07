import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import customRoutesConfig from './routes.js';

export default () => {
  return (
    <BrowserRouter>
      <div>{renderRoutes(customRoutesConfig)}</div>
    </BrowserRouter>
  );
};

