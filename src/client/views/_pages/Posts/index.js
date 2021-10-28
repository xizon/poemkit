import React, { Component } from 'react';
import { connect } from 'react-redux';
import { __ } from '@uixkit.react/components/_utils/_all';
import actionCreators from '@uixkit.react/actions/demoListActions.js';
import PostItem from '@uixkit.react/pages/Posts/PostItem.js';
import Footer from '@uixkit.react/components/Footer/index.tsx';


class Posts extends Component {

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

		// Wait for all the `httpRequest` functions, if they are resolved, run 'store.dispatch()'
		const httpRequest = () => {
			return new Promise( (resolve,reject) => {
				axios({
					timeout: 15000,
					method: 'get',
					url: `https://examples.com`,
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
			type: 'RECEIVE_DEMO_LIST',
			payload: getApiData.data
		}
		dispatch( action );



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

		//
		const data = actionCreators();
		return [AppDispatch(data)];
	}


	componentDidMount() {

		//Receive redux from the parent page
		console.log('[posts list]this.props:');
		console.log(this.props);

		const { contentInformation } = this.props;

		//from `mapDispatchToProps()`
		this.props.actionCreators();



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
		}

		return (
			<>


				<main id="uix-maincontent">

					{/*
					<!-- Content   
					====================================================== -->	
					*/}
					<section className="uix-spacing--s">
						<div className="container">
							<div className="row">
								<div className="col-12">


									<div className="alert alert-warning" role="alert">
										If the API asynchronous request failed (usually a 403 permission error), the error report <strong>`502 Proxy Error`</strong> of the Express Server will be skipped, and cannot use server-side rendering (SSR) features.<br />
										The test on the local server is correct, this error usually occurs on the cloud server.
									</div>

									{isLoaded ? (

										(preloadedState != null) ? preloadedState.map((item, i) => <PostItem key={i} {...item} />) : ""

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



			</>

		);
	}

}


// Subscribe to the required state in the reducers is bound here (for details of the data structure: initState)
// You can call it in `this.props`
const mapStateToProps = (state) => {
	const { listData } = state; //Receive redux

	return {
		currentData: listData.items
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
)(Posts);


