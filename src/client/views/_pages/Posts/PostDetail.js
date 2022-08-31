import React, { Component } from 'react';
import { connect } from 'react-redux';
import { __ } from '@/components/_utils/_all';
import actionCreators from '@/actions/demoListDetailActions.js';
import Footer from '@/components/Footer/index.tsx';

//
let PAGE_TITLE = null;
let SITE_NAME = null;

//manage the document head
import { Helmet } from "react-helmet";
import siteInfo from '@/helpers/site-info.js';
import socialMetadata from '@/helpers/social-metadata.js';

function SeoVars() {
	const {siteName, baseURL, pageTitle} = siteInfo('/posts', 'posts-pagination');
	// if the value of `pageTitle` is `{{pageTitle}}`, the value 
	// of Redux store will be rendered asynchronously

	PAGE_TITLE = pageTitle;
	SITE_NAME = siteName;

	return {
		"siteName": siteName,
		"baseURL": baseURL,
		"imgURL": '',
		"bodyClasses": 'page',
		"pageTitle": '{{pageTitle}}',
		"desc": '{{pageTitle}}'
	}
}

function Seo() {
	const {siteName, baseURL, imgURL, bodyClasses, pageTitle, desc} = SeoVars();
	return (
		<Helmet>
			<html lang="en-US" dir="ltr" />
			<title>{`${pageTitle} - ${siteName}`}</title>
			<body class={`${bodyClasses}`} />
			<meta name="description" content={`${desc}`}/>

			{socialMetadata({
				ogTitle: `${pageTitle} - ${siteName}`,
				ogDesc: `${desc}`,
				ogUrl: `${baseURL}`,
				ogImage: `${imgURL}`
			})}
			
			<link rel="canonical" href={`${baseURL}`}/>
		</Helmet>
	)
}

class PostDetail extends Component {
	constructor(props) {
		super(props);
	}


	//Static properties/methords are the properties of the class. 
	//@link to: `src/server/app.js`
	/*
	 * When requesting from the server, the program will look for the react component with 
	 * the `appSyncRequestFetching` function (this function is named by the developer) to complete the 
	 * initial update and rendering of the data(SSR).
	 
		if ( typeof route.component.appSyncRequestFetching !== typeof undefined ) {
			//...
		}	
	
	*/

	/*
	Dispatch an async function. The `redux-thunk` middleware handles running this function.
	Implementation principle:
	(put the following code in the app.get('*', (req, res) => {...} code snippet in `src/server/app.js`):
	
	-------------------

	store.dispatch(async function(dispatch) {
	
		const currentID = req.path.split( '/' ).pop();
		if ( req.path.indexOf( '/posts/' ) >= 0 ) {
			
			// Wait for all the `httpRequest` functions, if they are resolved, run 'store.dispatch()'
			const httpRequest = () => {
				return new Promise( (resolve,reject) => {
					axios({
						timeout: 15000,
						method: 'get',
						url: `https://restcountries.com/v2/name/${currentID}`,
						responseType: 'json'
					}).then(function (response) {
						resolve( response );
					})
					.catch(function (error) {
						console.log( error );
					});
				});
			};


			const getApiData = await httpRequest();
			const action = {
				type: 'RECEIVE_DEMO_LISTDETAIL',
				payload: getApiData.data
			}
			dispatch( action );	
			
		}
	


		// Send the rendered html to browser.
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


	
	*/
	static appSyncRequestFetching(storeAPI) {
		const AppDispatch = storeAPI.dispatch;
		const AppPath = storeAPI.path;

		//
		const currentID = AppPath.split('/').pop();
		const data = actionCreators(currentID);

		return [AppDispatch(data)];
	}



	componentDidMount() {

		//Receive redux from the parent page
		console.log('[detail of post]this.props:');
		console.log(this.props);


		//from `mapDispatchToProps()`
		this.props.actionCreators(this.props.match.params.post_id);


	}



	render() {

		//from `mapStateToProps()`
		const preloadedState = this.props.currentData;

		//loader
		let isLoaded = false;

		if (preloadedState == null) {
			console.log('preloadedState: null');
		} else {
			console.log('preloadedState: Return an Array');
			isLoaded = true;


			//update page title
			//------------------------------------------
			if (typeof(document) !== 'undefined') {

				//update page title
				document.title = `${preloadedState[0].name} - ${SITE_NAME}`;
			}


		}



		return (
			<>


				<main id="poemkit-maincontent">

					{/*
					<!-- Content   
					====================================================== -->	
					*/}
					<section className="poemkit-spacing--s">
						<div className="container">
							<div className="row">
								<div className="col-12">

									<div className="alert alert-warning" role="alert">
										If the API asynchronous request failed (usually a 403 permission error), the error report <strong>`502 Proxy Error`</strong> of the Express Server will be skipped, and cannot use server-side rendering (SSR) features.<br />
										The test on the local server is correct, this error usually occurs on the cloud server.
									</div>


									{isLoaded ? (

										(preloadedState != null) ? preloadedState.map((item, i) =>

											<div key={"detail" + i} style={{ padding: "15px", margin: "10px", display: "inline-block", border: "1px solid #ddd", width: "420px", textAlign: "left", position: "relative" }}>

												<img src={item.flag} alt="" style={{ width: "400px", display: "inline-block" }} />
												<hr />
												<p><strong>Name: </strong>{item.name}</p>
												<p><strong>Capital: </strong>{item.capital}</p>
												<p><strong>Population: </strong>{item.population}</p>
												<p><strong>Subregion: </strong>{item.subregion}</p>

											</div>)
											: ""

									) : (
										<div>Loading...</div>
									)}


								</div>
							</div>
							{/*<!-- .row end -->*/}


						</div>
						{/*<!-- .container end -->*/}
					</section>


				</main>


				<Footer />
				<Seo />

			</>

		);
	}

}


// Subscribe to the required state in the reducers is bound here (for details of the data structure: initState)
// You can call it in `this.props`
const mapStateToProps = (state) => {
	const { listDetailData } = state; //Receive redux

	return {
		currentData: listDetailData.detail
	}
};

// Bind the introduced Actions. You will normally make use of this by returning new functions that call `dispatch()` inside themselves
// You can call it in `this.props`
/*
Like this:
const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch({ type: 'INCREMENT' }),
		decrement: () => dispatch({ type: 'DECREMENT' }),
	}
}
*/
const mapDispatchToProps = {
	actionCreators
}



// The most important step is to bind the required Reducer and Actions to the current page 
// through the connect function provided by react-redux

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostDetail);


