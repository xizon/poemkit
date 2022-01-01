import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from "react-helmet";
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import customRoutesConfig from '@/router/RoutesConfig.js';

//get project config
import { rootDirectory } from '@/config/websiteConfig.js';

//As we can not use BrowserRouter on server side, we will use StaticRouter . 
//Also we have same set up as frontend, but wrap it all by renderToString function 
//from react-dom/server library.
export default (pathname, store, context, template) => {

	const content = ReactDOMServer.renderToString(
		<Provider store={store}>
			<StaticRouter location={pathname} context={context}>
				<div className="poemkit-wrapper">
					{renderRoutes(customRoutesConfig)}
				</div>
			</StaticRouter>
		</Provider>
	);


	if (template != null && template != '' && typeof template != typeof undefined) {
		template = template.replace('{{reactApp}}', content)
			.replace('{{preloadedState}}', JSON.stringify(store.getState()));



		//Replace the default address of the router with the proxy path you configured 
		//through Apache or Nginx (only when rendering)
		//------------------------------------------
		template = template.replace(/data\-route\=\"true\"\s*href\=\"/g, `data-route="true" href="${rootDirectory}`);



		// SEO with React Helmet 
		//------------------------------------------
		const helmet = Helmet.renderStatic();
		template = template.replace('{{helmetHtmlAttributes}}', `${helmet.htmlAttributes.toString()}`)
			.replace('{{helmetTitle}}', `${helmet.title.toString()}`)
			.replace('{{helmetMeta}}', `${helmet.meta.toString()}`)
			.replace('{{helmetLink}}', `${helmet.link.toString()}`)
			.replace('{{helmetBodyAttributes}}', `${helmet.bodyAttributes.toString()}`);


		//title and site name
		//------------------------------------------
		const siteName = customRoutesConfig[0].routes[0].pageTitle;
		let pageTitle = null;
		let pageNoMatchTitle = null;
		pathname = pathname.replace(`${rootDirectory}`, '')


		//=> PAGE: 404
		customRoutesConfig[0].routes.some((item, index) => {
			if (item.status === 404) {
				pageNoMatchTitle = item.pageTitle;
				return true;
			}
		});

		customRoutesConfig[0].routes.some((item, index) => {
			const _path = item.path.replace(`${rootDirectory}`, '');

			// Returns the name of the first character that starts with a slash and is grouped by a slash
			const nestedName = pathname.replace(/^\/([^\/]*).*$/, '$1');
			if (_path.indexOf(`/${nestedName}`) < 0 && _path != "/") {
				pageTitle = pageNoMatchTitle;
				return true;
			}
		});


		//=> PAGE: ...
		customRoutesConfig[0].routes.some((item, index) => {
			//console.log( 'pathname: ', pathname ); // such as "/index",  "/components-demo"
			
			const _path = item.path.replace(`${rootDirectory}`, '');

			// Returns the name of the first character that starts with a slash and is grouped by a slash
			const nestedName = pathname.replace(/^\/([^\/]*).*$/, '$1');
			if (_path === pathname ||
				(_path.indexOf(`/${nestedName}`) >= 0 && _path != "/")
			) {
				pageTitle = item.pageTitle;
				return true;

			}
		});

		//=> PAGE: Posts detail (available when Redux store is used)
		if (pathname.indexOf('posts/') >= 0) {
			if (store.getState().listDetailData.detail) pageTitle = store.getState().listDetailData.detail[0].name;
		}

		//=> PAGE: Pagination (available when Redux store is used)
		if (pathname.indexOf('posts-pagination/') >= 0) {
			if (store.getState().listPostsPaginationData.getData) pageTitle = `${pageTitle} (page ${store.getState().listPostsPaginationData.getData.page})`;
		}


		//update page title and site name
		//------------------------------------------
		template = template.replace(/\{\{pageTitle\}\}/g, pageTitle)
						   .replace(/\{\{siteName\}\}/g, siteName);

	}


	return template;


};