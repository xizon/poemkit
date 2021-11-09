import React from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import Footer from '@poemkit/components/Footer/index.tsx';

//manage the document head
import { Helmet } from "react-helmet";
import siteInfo from '@poemkit/helpers/site-info.js';
function SeoVars() {
	const {siteName, pageTitle} = siteInfo(404);
	return {
		"siteName": siteName,
		"bodyClasses": 'page error',
		"pageTitle": pageTitle,
	}
}

function Seo() {
	const {siteName, bodyClasses, pageTitle} = SeoVars();
	return (
		<Helmet>
			<html lang="en-US" dir="ltr" />
			<title>{`${pageTitle} - ${siteName}`}</title>
			<body class={`${bodyClasses}`} />
		</Helmet>
	)
}



export default ({ staticContext = {} }) => {
    staticContext.status = 404;
    
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
		
                					<h3>Page Not found</h3>
		
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