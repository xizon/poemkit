import React, { Component } from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import LoginPage from '@poemkit/pages/Member/LoginPage.js';
import Footer from '@poemkit/components/Footer/index.tsx';


//manage the document head
import { Helmet } from "react-helmet";
import siteInfo from '@poemkit/helpers/site-info.js';
function SeoVars() {
	const {siteName, baseURL, pageTitle} = siteInfo('/member');
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
			<meta property="og:title" content={`${pageTitle} - ${siteName}`}/>
			<meta property="og:url" content={`${baseURL}`}/>
			<meta property="og:description" content={`${desc}`}/>
			<meta property="og:type" content="website"/>
			<meta property="og:site_name" content={`${siteName}`}/>
			{imgURL === '' ? '' : <meta property="og:image" content={`${imgURL}`}/>}
			<link rel="canonical" href={`${baseURL}`}/>
		</Helmet>
	)
}

class Member extends Component {
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

									<LoginPage />

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

export default Member;