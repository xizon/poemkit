import React from 'react';
import { NavLink } from 'react-router-dom';
import { __ } from '@poemkit/components/_utils/_all';
import Footer from '@poemkit/components/Footer/index.tsx';


//get project config
import { rootDirectory } from '@poemkit/config/websiteConfig.js';

//manage the document head
import { Helmet } from "react-helmet";
import siteInfo from '@poemkit/helpers/site-info.js';
function SeoVars() {
	const {siteName, baseURL, pageTitle} = siteInfo('/index');
	// if the value of `pageTitle` is `{{pageTitle}}`, the value 
	// of Redux store will be rendered asynchronously

	return {
		"siteName": siteName,
		"baseURL": baseURL,
		"imgURL": '',
		"bodyClasses": 'home',
		"pageTitle": pageTitle,
		"desc": 'A free web kits with React for fast web design and development via SSR.'
	}
}
function Seo() {
	const {siteName, baseURL, imgURL, bodyClasses, pageTitle, desc} = SeoVars();
	return (
		<Helmet>
			<html lang="en-US" dir="ltr" />
			<title>{`${siteName}`}</title>
			<body class={`${bodyClasses}`} />
			<meta name="description" content={`${desc}`}/>
			<meta property="og:title" content={`${siteName}`}/>
			<meta property="og:url" content={`${baseURL}`}/>
			<meta property="og:description" content={`${desc}`}/>
			<meta property="og:type" content="website"/>
			<meta property="og:site_name" content={`${siteName}`}/>
			{imgURL === '' ? '' : <meta property="og:image" content={`${imgURL}`}/>}
			<link rel="canonical" href={`${baseURL}`}/>
		</Helmet>
	)
}


export default ({ staticContext = {} }) => {
    staticContext.status = 200;
    
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
								<div className="col-md-10 offset-md-1">
		
									<div id="app-home-description" className="poemkit-t-c">
		
										<img src={`${rootDirectory}/assets/images/logo-colorful.png`} alt="PoemKit" />

										<p>
											A free web kits with React for fast web design and development via SSR. Using react, redux, router, axios and express. This project was bootstrapped with nodejs library. Project supports automatic deployments from a number of repository hosting services via pm2. PoemKit delivers more than <strong className="poemkit-typo--color-highlight">50+</strong> built-in UI components for building modern web applications.
										</p>		
										<p>
											<NavLink data-route="true" to="/components-demo" style={{textDecoration: "underline"}}>
												<i className="fa fa-external-link" aria-hidden="true"></i> Click me to view components!
											</NavLink>
										</p>
									</div>



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
};
