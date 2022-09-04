import React from 'react';
import { NavLink } from 'react-router-dom';
import { __ } from '@/components/_utils/_all';
import Footer from '@/components/Footer/index.tsx';


//get project config
import { rootDirectory } from '@/config/websiteConfig.js';

//manage the document head
import { Helmet } from "react-helmet";
import siteInfo from '@/helpers/site-info.js';
import socialMetadata from '@/helpers/social-metadata.js';

//for php functions
import CRUDService from "@/services/crud-service.js";
import { useEffect } from 'react';

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
		"desc": 'React toolkit for building a full website that also is a Micro-Frontend Architecture'
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

			{socialMetadata({
				ogTitle: `${siteName}`,
				ogDesc: `${desc}`,
				ogUrl: `${baseURL}`,
				ogImage: `${imgURL}`
			})}

			<link rel="canonical" href={`${baseURL}`}/>
		</Helmet>
	)
}


export default ({ staticContext = {} }) => {
    staticContext.status = 200;
    

    useEffect(() => {

        // init php data
        CRUDService.initData();
    
      }, []); // Empty array ensures that effect is only run on mount and unmount

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
											A free web kit with React for fast web design and development via SSR. It also is a Micro-Frontend Architecture. Using react, redux, router, axios and express. This project was bootstrapped with nodejs library. Project supports automatic deployments from a number of repository hosting services via pm2. PoemKit delivers more than <strong className="poemkit-typo--color-highlight">50+</strong> built-in UI components for building modern web applications.
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
