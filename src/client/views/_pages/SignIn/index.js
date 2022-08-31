import React, { Component } from 'react';
import { __ } from '@/components/_utils/_all';
import UserForm from '@/pages/SignIn/UserForm.js';
import Footer from '@/components/Footer/index.tsx';


//manage the document head
import { Helmet } from "react-helmet";
import siteInfo from '@/helpers/site-info.js';
import socialMetadata from '@/helpers/social-metadata.js';

function SeoVars() {
	const {siteName, baseURL, pageTitle} = siteInfo('/sign-in');
	// if the value of `pageTitle` is `{{pageTitle}}`, the value 
	// of Redux store will be rendered asynchronously

	return {
		"siteName": siteName,
		"baseURL": baseURL,
		"imgURL": '',
		"bodyClasses": 'page',
		"pageTitle": pageTitle,
		"desc": pageTitle
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

class SignIn extends Component {
	constructor(props) {
		super(props);
	}

	render() {

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

								    <h3>Sign In</h3>
									<UserForm />

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

export default SignIn;