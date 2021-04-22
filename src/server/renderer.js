import React from 'react';
import { renderToString } from 'react-dom/server.js';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { __ } from '@uixkit.react/components/_utilities/_all.js';

import customRoutesConfig from '@uixkit.react/router/RoutesConfig.js';


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
	
		
		//change page title
		//-------------
		let pageTitle = null;
		let pageNoMatchTitle = null;
		const breakException = {};
	
		
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
				if ( item.path.indexOf( `/${pathname.replace(/^\/([^\/]*).*$/, '$1')}` ) < 0 && item.path != '/' ) {
					pageTitle = pageNoMatchTitle;
					//
					throw breakException;
				}
			});
		} catch (e) {}	

		
		
		//page: ...
		try {
			customRoutesConfig[0].routes.forEach((item, index) => {
				if ( item.path === pathname || 
					 ( item.path.indexOf( `/${pathname.replace(/^\/([^\/]*).*$/, '$1')}` ) >= 0 && item.path != '/' )
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
			pathname !== '/' &&
			pathname !== '/index'
		) {
			template = template.replace('{{pageTitle}}', `${pageTitle} - ${customRoutesConfig[0].routes[0].pageTitle}` ); 
		} else {
			template = template.replace('{{pageTitle}}', `${pageTitle}` ); 
		}
		
		

		
    }

   
    return template;


};