import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import customRoutesConfig from '@/router/RoutesConfig.js';

//get project config
import { rootDirectory } from '@/config/websiteConfig.js';


export default () => {
  return (
	  
	 //If the file is in the root directory, you can leave it empty. If in another directory, 
	 //you need set the property "basename" of <BrowserRouter>
	 //!!!
	 //This path is equivalent to the proxy configuration you added in Apache or Nginx (but no trailing slash)
	 //The base URL for all locations. If your app is served from a sub-directory on your server, 
	 //you’ll want to set this to the sub-directory. A properly formatted basename should have a leading slash, but no trailing slash.
	 <BrowserRouter basename={rootDirectory}>
         <div className="poemkit-wrapper">
			{renderRoutes(customRoutesConfig)}
		 </div>
         {/* <!-- .poemkit-wrapper end --> */}
    </BrowserRouter>
  );
};

