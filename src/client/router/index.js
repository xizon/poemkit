import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import customRoutesConfig from '@uixkit.react/router/RoutesConfig.js';

export default () => {
  return (
    <BrowserRouter>
         <div className="uix-wrapper">
			{renderRoutes(customRoutesConfig)}
		 </div>
         {/* <!-- .uix-wrapper end --> */}
    </BrowserRouter>
  );
};

