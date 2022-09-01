import express from 'express';
import { matchRoutes } from 'react-router-config';
import render from '@/server/renderer.js';
import createNewStore from '@/store/createStore.js';

import customRoutesConfig from '@/router/RoutesConfig.js';

//
import compression from 'compression';

//
import fs from 'fs';
import path from 'path';

/*
A babel/register style hook to ignore style imports when running in Node. 
This is for projects that use something like Webpack to enable CSS imports in JavaScript. 
When you try to run the project in Node (to test in Mocha, for example) you'll see errors like this:

SyntaxError: ../??.sass: Unexpected token

To resolve this, require ignore-styles with your mocha tests:

mocha --require ignore-styles
*/


// Server var
const port = process.env.port || 3000;
const app = express();


// Middleware
function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
}

app.use(
    compression({
        level: 2, // set compression level from 1 to 9 (6 by default)
        filter: shouldCompress // set predicate to determine whether to compress
    })
);


//To use multiple static assets directories, call the express.static middleware function multiple times:
app.use(express.static( 'public' ));
app.use(express.static( 'dist' ));

//To create a virtual path prefix (where the path does not actually exist in the file system) for files that are 
//served by the express.static function, specify a mount path for the static directory, as shown below:
app.use('/', express.static( 'public' ));
app.use('/dist', express.static( 'dist' ));


// use it before all route definitions
import cors from 'cors';
app.use(cors({origin: '*' }));



app.get('*', (req, res) => {

    // (1)
    // We create store before rendering html
    const store = createNewStore();

    // (2)
    // Checks the given path, matches with component and returns array of items about to be rendered
    const routes = matchRoutes(customRoutesConfig, req.path);
    //console.log( routes );

	
	
    // (3)
    // Execute all `appSyncRequestFetching` functions inside given urls and wrap promises with new promises to be able to render pages all the time
    // Even if we get an error while loading data, we will still attempt to render page.
	//@link to: `src/client/views/_pages/Posts/`
    const actions = routes.map( (item) => {		
		const _route = item.route;

		if ( _route.component.appSyncRequestFetching ) {
			const storeAPI = {...store, path: req.path };
			//console.log( 'storeAPI: ', storeAPI);
			return _route.component.appSyncRequestFetching(storeAPI);
		} else {
			return null;
		}


	});
	
	const dispatchEvents = 	actions.map(function (promiseTask) {
		const _promiseTask = promiseTask === null ? [] : promiseTask;
		
		return Promise.all(
		
			_promiseTask.map(function (item) {
				//console.log('item: ', item ); //Promise { <pending> }
				return new Promise(function (resolve, reject) {
					//console.log('resolve: ', resolve ); //[Function (anonymous)]
					return item.then(resolve);
				});
				
			})
		);
	});


	
    // (4)
	// Wait for all the `appSyncRequestFetching` functions, if they are resolved, send the rendered html to browser.
    Promise.all(dispatchEvents).then(( result ) => {
		
		//read template
		const indexFile = path.join(__dirname,'../../public/index.html');
		fs.readFile(indexFile, 'utf8', (err, data) => {
			if (err) {
				console.error('Something went wrong:', err);
				return res.status(500).send('Oops, better luck next time!');
			} 
			
			//
			const context = {};
			const content = render(req.path, store, context, data);

			if (context.notFound) {
				res.status(404);
			}

			res.send(content);
		});

		

    });
    


});

app.listen(port, () => console.log(`Frontend service listening on port: ${port}, access http://localhost:${port} in the web browser`));



/*

// Supprt HTTPS

import path from 'path';
import https from 'https';
const cert = fs.readFileSync(path.join(__dirname,'../../path/bundle.crt'));
const key = fs.readFileSync(path.join(__dirname,'../../path/ca.key'));
const server = https.createServer({key: key, cert: cert }, app);

...
app.get('/', (req, res) => { res.send('this is an secure server') });
...

server.listen(port, () => console.log(`Frontend service listening on port: ${port}, access https://localhost:${port} in the web browser`));
*/


