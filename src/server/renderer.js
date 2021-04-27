import React from 'react';
import { renderToString } from 'react-dom/server.js';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { __ } from '@uixkit.react/components/_utilities/_all.js';

import customRoutesConfig from '@uixkit.react/router/RoutesConfig.js';

//get project config
import { rootDirectory } from '@uixkit.react/config';

//As we can not use BrowserRouter on server side, we will use StaticRouter . 
//Also we have same set up as frontend, but wrap it all by renderToString function 
//from react-dom/server library.
export default (pathname, store, context, template) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={pathname} context={context}>
				 <div className="uix-wrapper">
					{renderRoutes(customRoutesConfig)}
				 </div>
				 {/* <!-- .uix-wrapper end --> */}
            </StaticRouter>
        </Provider>
    );





    if ( template != null && template != '' && typeof template != typeof undefined ) {
        template = template.replace('{{reactApp}}', content )
                           .replace('{{preloadedState}}', JSON.stringify(store.getState()) );  
	
		
		
		//Replace the default address of the router with the proxy path you configured 
		//through Apache or Nginx (only when rendering)
		//-------------
		template = template.replace(/data\-route\=\"true\"\s*href\=\"/g, `data-route="true" href="${rootDirectory}` );
	
		
		
		
		//change page title
		//-------------
		let pageTitle = null;
		let pageNoMatchTitle = null;
		const breakException = {};
		
		//
		pathname = pathname.replace(`${rootDirectory}`, '')
		
		
		//page: 404
		try {
			customRoutesConfig[0].routes.forEach((item, index) => {
				if ( item.status === 404 ) {
					pageNoMatchTitle = item.pageTitle;
					//
					throw breakException;
				}
			});
		} catch (e) {}	

		
		try {
			customRoutesConfig[0].routes.forEach((item, index) => {

				const _path = item.path.replace(`${rootDirectory}`, '');
				
				if ( _path.indexOf( `/${pathname.replace(/^\/([^\/]*).*$/, '$1')}` ) < 0 && _path != "/" ) {
					pageTitle = pageNoMatchTitle;
					//
					throw breakException;
				}
			});
		} catch (e) {}	

		
		
		//page: ...
		try {
			customRoutesConfig[0].routes.forEach((item, index) => {
				
				const _path = item.path.replace(`${rootDirectory}`, '');
				/*
				console.log( '_path: ', _path );
				console.log( 'pathname: ', pathname );
				console.log( 'check: ', `/${pathname.replace(/^\/([^\/]*).*$/, '$1')}` );
				*/
				
				if ( _path === pathname || 
					 ( _path.indexOf( `/${pathname.replace(/^\/([^\/]*).*$/, '$1')}` ) >= 0 && _path != "/" )
				   ) {
					pageTitle = item.pageTitle;
					//
					throw breakException;
					
				}
			});
		} catch (e) {}	


		//page: Posts detail
		if ( pathname.indexOf( 'posts/' ) >= 0 ) {
			if ( store.getState().listDetailData.detail ) pageTitle = store.getState().listDetailData.detail[0].name;
		}
	
		//page: Components Demo
		if ( pathname.indexOf( 'components-demo/' ) >= 0 ) {
			let titleStr = pathname.split( '/' ).pop();
			pageTitle = __.lastUrlParamFormat( titleStr );	
		}
		
		
		// update page title
		// When the page is not the homepage (including all homepage addresses of 
		// the routing configuration), change the page title
		if ( 
			pageTitle !== null &&
			pathname !== "/" &&
			pathname !== "/index"
		) {
			template = template.replace('{{pageTitle}}', `${pageTitle} - ${customRoutesConfig[0].routes[0].pageTitle}` ); 
		} else {
			template = template.replace('{{pageTitle}}', `${pageTitle}` ); 
		}
		
		

		
    }

   
    return template;


};