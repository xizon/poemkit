import React, { Component } from 'react';
import {
	Route, 
	Switch, 
	NavLink,
	useRouteMatch,
	useLocation
} from 'react-router-dom';
import { __ } from '@/components/_utils/_all';

//components list
import AccordionDemo from '@/pages/ComponentsDemo/AccordionDemo.js';
import AccordionSliderDemo from '@/pages/ComponentsDemo/AccordionSliderDemo.js';
import ButtonDemo from '@/pages/ComponentsDemo/ButtonDemo.js';
import BackToTopDemo from '@/pages/ComponentsDemo/BackToTopDemo.js';
import CardDemo from '@/pages/ComponentsDemo/CardDemo.js';
import CounterDemo from '@/pages/ComponentsDemo/CounterDemo.js';
import CascadingDropDownListDemo from '@/pages/ComponentsDemo/CascadingDropDownListDemo.js';
import ContentPlaceholderDemo from '@/pages/ComponentsDemo/ContentPlaceholderDemo.js';
import DropdownMenuDemo from '@/pages/ComponentsDemo/DropdownMenuDemo.js';
import FormDemo from '@/pages/ComponentsDemo/FormDemo.js';
import GridDemo from '@/pages/ComponentsDemo/GridDemo.js';
import GalleryDemo from '@/pages/ComponentsDemo/GalleryDemo.js';
import HybridContentSliderDemo from '@/pages/ComponentsDemo/HybridContentSliderDemo.js';
import InfiniteScrollDemo from '@/pages/ComponentsDemo/InfiniteScrollDemo.js';
import ImageShapesDemo from '@/pages/ComponentsDemo/ImageShapesDemo.js';
import ImagePerspectiveHoverDemo from '@/pages/ComponentsDemo/ImagePerspectiveHoverDemo.js';
import LightboxDemo from '@/pages/ComponentsDemo/LightboxDemo.js';
import ListBulletedDemo from '@/pages/ComponentsDemo/ListBulletedDemo.js';
import ModalDialogDemo from '@/pages/ComponentsDemo/ModalDialogDemo.js';
import MultilevelDropdownMenuDemo from '@/pages/ComponentsDemo/MultilevelDropdownMenuDemo.js';
import MousewheelInteractionDemo from '@/pages/ComponentsDemo/MousewheelInteractionDemo.js';
import NavigationDemo from '@/pages/ComponentsDemo/NavigationDemo.js';
import PaginationDemo from '@/pages/ComponentsDemo/PaginationDemo.js';
import ParallaxDemo from '@/pages/ComponentsDemo/ParallaxDemo.js';
import ProgressBarDemo from '@/pages/ComponentsDemo/ProgressBarDemo.js';
import PeriodicalScrollDemo from '@/pages/ComponentsDemo/PeriodicalScrollDemo.js';
import RatingDemo from '@/pages/ComponentsDemo/RatingDemo.js';
import ScrollRevealDemo from '@/pages/ComponentsDemo/ScrollRevealDemo.js';
import SlideshowDemo from '@/pages/ComponentsDemo/SlideshowDemo.js';
import SwiperDemo from '@/pages/ComponentsDemo/SwiperDemo.js';
import StickyElementsDemo from '@/pages/ComponentsDemo/StickyElementsDemo.js';
import SeamlessScrollingElementDemo from '@/pages/ComponentsDemo/SeamlessScrollingElementDemo.js';
import ShowMoreLessDemo from '@/pages/ComponentsDemo/ShowMoreLessDemo.js';
import TabsDemo from '@/pages/ComponentsDemo/TabsDemo.js';
import TabsAnimatedDemo from '@/pages/ComponentsDemo/TabsAnimatedDemo.js';
import TableDemo from '@/pages/ComponentsDemo/TableDemo.js';
import TableGridDemo from '@/pages/ComponentsDemo/TableGridDemo.js';
import TableSorterDemo from '@/pages/ComponentsDemo/TableSorterDemo.js';
import TimelineDemo from '@/pages/ComponentsDemo/TimelineDemo.js';
import TooltipDemo from '@/pages/ComponentsDemo/TooltipDemo.js';
import ToasterDemo from '@/pages/ComponentsDemo/ToasterDemo.js';
import VideoDemo from '@/pages/ComponentsDemo/VideoDemo.js';


//
let PAGE_TITLE = null;
let SITE_NAME = null;

//manage the document head
import { Helmet } from "react-helmet";
import siteInfo from '@/helpers/site-info.js';
function SeoVars() {
	const {siteName, baseURL, pageTitle} = siteInfo('/components-demo');
	// if the value of `pageTitle` is `{{pageTitle}}`, the value 
	// of Redux store will be rendered asynchronously

	PAGE_TITLE = pageTitle;
	SITE_NAME = siteName;
	
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

function SeoChild(params) {
	const {title} = params;
	const {siteName, baseURL, imgURL, bodyClasses, pageTitle, desc} = SeoVars();

	return (
		<Helmet>
			<html lang="en-US" dir="ltr" />
			<title>{`${title} - ${pageTitle} - ${siteName}`}</title>
			<body class={`${bodyClasses}`} />
			<meta name="description" content={`${title} - ${desc}`}/>
			<meta property="og:title" content={`${title} - ${pageTitle} - ${siteName}`}/>
			<meta property="og:url" content={`${baseURL}`}/>
			<meta property="og:description" content={`${title} - ${desc}`}/>
			<meta property="og:type" content="website"/>
			<meta property="og:site_name" content={`${siteName}`}/>
			{imgURL === '' ? '' : <meta property="og:image" content={`${imgURL}`}/>}
			<link rel="canonical" href={`${baseURL}`}/>
		</Helmet>
	)
}


//Might have mismatching versions of React and the renderer (such as React DOM)
function HookContent() {
	
	// The `path` lets us build <Route> paths that are
	// relative to the parent route, while the `url` lets
	// us build relative links.
	let { path, url } = useRouteMatch();

	//
	const theLocation = useLocation();
	
	//
	const urlChk = function( str ) {
		if ( str.indexOf( '#' ) >= 0 ) {
			return theLocation.hash.indexOf( str ) >= 0 ? true : false;
		} else {
			return theLocation.pathname.indexOf( str ) >= 0 ? true : false;
		}
	};


	//update page title
	const refreshTitle = (e) => {
		const childTitle = e.currentTarget.innerHTML.replace(/(<([^>]+)>)/ig, '');
		document.title = `${childTitle} - ${PAGE_TITLE} - ${SITE_NAME}`;
	}
	

	return (
		<>

		<Seo />

	
		{/*<!-- Sidebar 
		====================================================== -->*/}
		<div className="poemkit-demo-sidebar-left">
			<h4>Components</h4>
			<ul className="poemkit-demo-nav">
				{/*    /////////////////////////   */} 
				<li className="poemkit-demo-nav-header">WEB ELEMENTS</li>
				<li className={urlChk('/accordion') && !urlChk('/accordion-slider') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/accordion`} activeClassName="is-active">Accordion</NavLink>
				</li>
				<li className={urlChk('/accordion-slider') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/accordion-slider`} activeClassName="is-active">Accordion Slider</NavLink>
				</li>
				<li className={urlChk('/button') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/button`} activeClassName="is-active">Button</NavLink>
				</li>
				<li className={urlChk('/back-to-top') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/back-to-top`} activeClassName="is-active">Back To Top</NavLink>
				</li>
				<li className={urlChk('/card') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/card`} activeClassName="is-active">Card</NavLink>
				</li>
				<li className={urlChk('/counter') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/counter`} activeClassName="is-active">Counter</NavLink>
				</li>
				<li className={urlChk('/content-placeholder') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/content-placeholder`} activeClassName="is-active">Content Placeholder</NavLink>
				</li>
				<li className={urlChk('/hybrid-content-slider') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/hybrid-content-slider`} activeClassName="is-active">Hybrid Content Slider</NavLink>
				</li>
				<li className={urlChk('/image-shapes') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/image-shapes`} activeClassName="is-active">Image Shapes</NavLink>
				</li>
				<li className={urlChk('/lightbox') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/lightbox`} activeClassName="is-active">Lightbox</NavLink>
				</li>
				<li className={urlChk('/list-bulleted') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/list-bulleted`} activeClassName="is-active">List Bulleted</NavLink>
				</li>
				<li className={urlChk('/modal-dialog') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/modal-dialog`} activeClassName="is-active">Modal Dialog</NavLink>
				</li>
				<li className={urlChk('/pagination') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/pagination`} activeClassName="is-active">Pagination</NavLink>
				</li>
				<li className={urlChk('/progress-bar') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/progress-bar`} activeClassName="is-active">Progress Bar</NavLink>
				</li>
				<li className={urlChk('/periodical-scroll') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/periodical-scroll`} activeClassName="is-active">Periodical Scroll</NavLink>
				</li>
				<li className={urlChk('/rating') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/rating`} activeClassName="is-active">Rating</NavLink>
				</li>
				<li className={urlChk('/slideshow') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/slideshow`} activeClassName="is-active">Slideshow</NavLink>
				</li>
				<li className={urlChk('/swiper') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/swiper`} activeClassName="is-active">Swiper</NavLink>
				</li>
				<li className={urlChk('/seamless-scrolling-element') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/seamless-scrolling-element`} activeClassName="is-active">Seamless Scrolling Element</NavLink>
				</li>
				<li className={urlChk('/show-more-less') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/show-more-less`} activeClassName="is-active">Show More Less</NavLink>
				</li>
				<li className={urlChk('/tabs') && !urlChk('/tabs-animated') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/tabs`} activeClassName="is-active">Tabs</NavLink>
				</li>
				<li className={urlChk('/tabs-animated') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/tabs-animated`} activeClassName="is-active">Tabs Animated</NavLink>
				</li>
				<li className={urlChk('/table') && !urlChk('/table-grid') && !urlChk('/table-sorter') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/table`} activeClassName="is-active">Table</NavLink>
				</li>
				<li className={urlChk('/table-grid') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/table-grid`} activeClassName="is-active">Table Grid</NavLink>
				</li>
				<li className={urlChk('/table-sorter') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/table-sorter`} activeClassName="is-active">Table Sorter</NavLink>
				</li>
				<li className={urlChk('/timeline') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/timeline`} activeClassName="is-active">Timeline</NavLink>
				</li>
				<li className={urlChk('/tooltip') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/tooltip`} activeClassName="is-active">Tooltip</NavLink>
				</li>
				<li className={urlChk('/toaster') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/toaster`} activeClassName="is-active">Toaster</NavLink>
				</li>	

	
                {/*    /////////////////////////   */} 
				<li className="poemkit-demo-nav-header">FORMS</li>
				<li className={urlChk('#app-goto__input__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__input__section`} activeClassName="is-active">Input</NavLink>
				</li>
				<li className={urlChk('#app-goto__password-input__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__password-input__section`} activeClassName="is-active">Password Input</NavLink>
				</li>
				<li className={urlChk('#app-goto__textarea__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__textarea__section`} activeClassName="is-active">Textarea</NavLink>
				</li>
				<li className={urlChk('#app-goto__select-normal__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__select-normal__section`} activeClassName="is-active">Select (normal)</NavLink>
				</li>
				<li className={urlChk('#app-goto__custom-select__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__custom-select__section`} activeClassName="is-active">Custom Select</NavLink>
				</li>
				<li className={urlChk('#app-goto__multiple-select__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__multiple-select__section`} activeClassName="is-active">Multiple Select</NavLink>
				</li>
				<li className={urlChk('#app-goto__single-select__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__single-select__section`} activeClassName="is-active">Single Select</NavLink>
				</li>
				<li className={urlChk('/forform#app-goto__switch__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__switch__section`} activeClassName="is-active">Switch</NavLink>
				</li>
				<li className={urlChk('#app-goto__radio__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__radio__section`} activeClassName="is-active">Radio</NavLink>
				</li>
				<li className={urlChk('#app-goto__date__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__date__section`} activeClassName="is-active">Date</NavLink>
				</li>
				<li className={urlChk('#app-goto__checkbox__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__checkbox__section`} activeClassName="is-active">Checkbox</NavLink>
				</li>
				<li className={urlChk('#app-goto__number__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__number__section`} activeClassName="is-active">Number</NavLink>
				</li>
				<li className={urlChk('#app-goto__dynamic-fields__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__dynamic-fields__section`} activeClassName="is-active">Dynamic Fields</NavLink>
				</li>
				<li className={urlChk('#app-goto__file__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__file__section`} activeClassName="is-active">File</NavLink>
				</li>
				<li className={urlChk('#app-goto__file-field__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__file-field__section`} activeClassName="is-active">File Field</NavLink>
				</li>
				<li className={urlChk('#app-goto__merge-input__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__merge-input__section`} activeClassName="is-active">Merge Input</NavLink>
				</li>
				<li className={urlChk('#app-goto__tag-input__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__tag-input__section`} activeClassName="is-active">Tag Input</NavLink>
				</li>
				<li className={urlChk('#app-goto__flex-layout__section') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/form#app-goto__flex-layout__section`} activeClassName="is-active">Flex Layout</NavLink>
				</li>



				{/*    /////////////////////////   */} 
				<li className="poemkit-demo-nav-header">INTERACTION</li>
				<li className={urlChk('/infinite-scroll') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/infinite-scroll`} activeClassName="is-active">Infinite Scroll</NavLink>
				</li>
				<li className={urlChk('/image-perspective-hover') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e) => refreshTitle(e)} to={`${url}/image-perspective-hover`} activeClassName="is-active">Image Perspective Hover</NavLink>
				</li>	
				<li className={urlChk('/mousewheel-interaction') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/mousewheel-interaction`} activeClassName="is-active">Mousewheel Interaction</NavLink>
				</li>
				<li className={urlChk('/parallax') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/parallax`} activeClassName="is-active">Parallax</NavLink>
				</li>
				<li className={urlChk('/scroll-reveal') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/scroll-reveal`} activeClassName="is-active">Scroll Reveal</NavLink>
				</li>
				<li className={urlChk('/sticky-elements') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/sticky-elements`} activeClassName="is-active">Sticky Elements</NavLink>
				</li>



				{/*    /////////////////////////   */} 
				<li className="poemkit-demo-nav-header">LAYOUT</li>
				<li className={urlChk('/grid') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/grid`} activeClassName="is-active">Grid</NavLink>
				</li>
				<li className={urlChk('/gallery') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/gallery`} activeClassName="is-active">Gallery</NavLink>
				</li>


				{/*    /////////////////////////   */} 
				<li className="poemkit-demo-nav-header">NAVIGATION</li>
				<li className={urlChk('/cascading-dropDown-list') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/cascading-dropDown-list`} activeClassName="is-active">Cascading DropDown List</NavLink>
				</li>
				<li className={urlChk('/dropdown-menu') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/dropdown-menu`} activeClassName="is-active">Dropdown Menu</NavLink>
				</li>
				<li className={urlChk('/multilevel-dropdown-menu') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/multilevel-dropdown-menu`} activeClassName="is-active">Multiple-Level Dropdown Menu</NavLink>
				</li>
				<li className={urlChk('/navigation') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/navigation`} activeClassName="is-active">Navigation</NavLink>
				</li>

				{/*    /////////////////////////   */} 
				<li className="poemkit-demo-nav-header">MEDIA</li>
				<li className={urlChk('/video') ? 'is-active' : ''}>
					<NavLink data-route="true" onClick={(e)=>refreshTitle(e)} to={`${url}/video`} activeClassName="is-active">Video</NavLink>
				</li>


			</ul>
		</div>


		{/*<!-- Content 
		====================================================== -->*/}
		<div className="poemkit-demo-section">
			<div className="poemkit-demo-container">
				<div>

					<Switch>
						<Route exact path={path}>


							<section>
								<div className="container">
									<div className="row">
										<div className="col-12">

											<h3>Introduction</h3>
											<p>Get familiar with the basic setup and overview of UI Components.</p>
											<p><a className="btn btn-dark" href="https://github.com/xizon/poemkit" target="_blank">Download PoemKit</a></p>

										</div>
									</div>
									{/*<!-- .row end -->*/}


								</div>
								{/*<!-- .container end -->*/}
							</section>



						</Route>


							
						<Route path={`${path}/accordion`}><AccordionDemo/><SeoChild title="Accordion"/></Route>
						<Route path={`${path}/accordion-slider`}><AccordionSliderDemo/><SeoChild title="Accordion Slider"/></Route>
						<Route path={`${path}/button`}><ButtonDemo/><SeoChild title="Button"/></Route>
						<Route path={`${path}/back-to-top`}><BackToTopDemo/><SeoChild title="Back To Top"/></Route>
						<Route path={`${path}/card`}><CardDemo/><SeoChild title="Card"/></Route>
						<Route path={`${path}/counter`}><CounterDemo/><SeoChild title="Counter"/></Route>
						<Route path={`${path}/cascading-dropDown-list`}><CascadingDropDownListDemo/><SeoChild title="Cascading DropDown List"/></Route>
						<Route path={`${path}/content-placeholder`}><ContentPlaceholderDemo/><SeoChild title="Content Placeholder"/></Route>
						<Route path={`${path}/dropdown-menu`}><DropdownMenuDemo/><SeoChild title="Dropdown Menu"/></Route>
						<Route path={`${path}/form`}><FormDemo/><SeoChild title="Form"/></Route>
						<Route path={`${path}/grid`}><GridDemo/><SeoChild title="Grid"/></Route>
						<Route path={`${path}/gallery`}><GalleryDemo/><SeoChild title="Gallery"/></Route>
						<Route path={`${path}/hybrid-content-slider`}><HybridContentSliderDemo/><SeoChild title="Hybrid Content Slider"/></Route>
						<Route path={`${path}/infinite-scroll`}><InfiniteScrollDemo/><SeoChild title="Infinite Scroll"/></Route>
						<Route path={`${path}/image-shapes`}><ImageShapesDemo/><SeoChild title="Image Shapes"/></Route>
						<Route path={`${path}/image-perspective-hover`}><ImagePerspectiveHoverDemo/><SeoChild title="Image Perspective Hover"/></Route>
						<Route path={`${path}/lightbox`}><LightboxDemo/><SeoChild title="Lightbox"/></Route>
						<Route path={`${path}/list-bulleted`}><ListBulletedDemo/><SeoChild title="List Bulleted"/></Route>
						<Route path={`${path}/modal-dialog`}><ModalDialogDemo/><SeoChild title="Modal Dialog"/></Route>
						<Route path={`${path}/multilevel-dropdown-menu`}><MultilevelDropdownMenuDemo/><SeoChild title="Multiple-Level Dropdown Menu"/></Route>
						<Route path={`${path}/mousewheel-interaction`}><MousewheelInteractionDemo/><SeoChild title="Mousewheel Interaction"/></Route>
						<Route path={`${path}/navigation`}><NavigationDemo/><SeoChild title="Navigation"/></Route>
						<Route path={`${path}/pagination`}><PaginationDemo/><SeoChild title="Pagination"/></Route>
						<Route path={`${path}/parallax`}><ParallaxDemo/><SeoChild title="Parallax"/></Route>
						<Route path={`${path}/progress-bar`}><ProgressBarDemo/><SeoChild title="Progress Bar"/></Route>
						<Route path={`${path}/periodical-scroll`}><PeriodicalScrollDemo/><SeoChild title="Periodical Scroll"/></Route>
						<Route path={`${path}/rating`}><RatingDemo/><SeoChild title="Rating"/></Route>
						<Route path={`${path}/scroll-reveal`}><ScrollRevealDemo/><SeoChild title="Scroll Reveal"/></Route>
						<Route path={`${path}/slideshow`}><SlideshowDemo/><SeoChild title="Slideshow"/></Route>
						<Route path={`${path}/swiper`}><SwiperDemo/><SeoChild title="Swiper"/></Route>
						<Route path={`${path}/sticky-elements`}><StickyElementsDemo/><SeoChild title="Sticky Elements"/></Route>
						<Route path={`${path}/seamless-scrolling-element`}><SeamlessScrollingElementDemo/><SeoChild title="Seamless Scrolling Element"/></Route>
						<Route path={`${path}/show-more-less`}><ShowMoreLessDemo/><SeoChild title="Show More Less"/></Route>
						<Route path={`${path}/tabs`}><TabsDemo/><SeoChild title="Tabs"/></Route>
						<Route path={`${path}/tabs-animated`}><TabsAnimatedDemo/><SeoChild title="Tabs Animated"/></Route>
						<Route path={`${path}/table`}><TableDemo/><SeoChild title="Table"/></Route>
						<Route path={`${path}/table-grid`}><TableGridDemo/><SeoChild title="Table Grid"/></Route>
						<Route path={`${path}/table-sorter`}><TableSorterDemo/><SeoChild title="Table Sorter"/></Route>
						<Route path={`${path}/timeline`}><TimelineDemo/><SeoChild title="Timeline"/></Route>
						<Route path={`${path}/tooltip`}><TooltipDemo/><SeoChild title="Tooltip"/></Route>
						<Route path={`${path}/toaster`}><ToasterDemo/><SeoChild title="Toaster"/></Route>
						<Route path={`${path}/video`}><VideoDemo/><SeoChild title="Video"/></Route>

					</Switch>

				</div>
			</div>
		</div>

			

		</>
	)

}



class ComponentsDemo extends Component {
	constructor(props) {
		super(props);
	}

    componentDidMount() {
        //do shmething

	    if ( document.querySelector( '#app-poemkit-demo-style') === null ) {
			const $style = document.createElement("style");
			$style.id = 'app-poemkit-demo-style';
			document.head.appendChild($style);
			$style.innerHTML = `
				/*-- Sidebar --*/
				.poemkit-demo-sidebar-left {
					position: fixed;
					top: 70px;
					bottom: 0;
					box-sizing: border-box;
					width: 300px;
					padding: 40px 40px 60px 40px;
					border-right: 1px #e5e5e5 solid;
					overflow: auto;
				}

				@media all and (max-width: 768px) {
					.poemkit-demo-sidebar-left {
						position: relative;
						top: 0;
						width: 100%;
						padding: 15px;
					}
				}

				
				/*-- Navigation --*/
				.poemkit-demo-nav,
				.poemkit-demo-nav ul {
					margin: 0;
					padding: 0;
					list-style: none;
					font-size: .875rem;
				}

				.poemkit-demo-nav-header {
					padding: 8px 0;
					border-bottom: 1px solid #e5e5e5;
					font-weight: 500;
					opacity: .7;
					letter-spacing: 0.5px;
					padding-top: 1rem;
				}

				.poemkit-demo-nav li {
					position: relative;
				}

				
				
				.poemkit-demo-nav li>a {
					display: flex;
					align-items: center;
					column-gap: .25em;
					text-decoration: none;
					color: #999;
				}
				

				.poemkit-demo-nav li>a>* {
					flex: none;
				}
				
				.poemkit-demo-nav li>a:focus {
					outline: none;
				}
				
				.poemkit-demo-nav>li>a {
					padding: 5px 0;
				}

				.poemkit-demo-nav li.is-active > a {
					color: #333;
				}
				.poemkit-demo-nav li.is-active > a:after {
					content: '';
					display: block;
					width: 5px;
					height: 5px;
					position: absolute;
					top: 45%;
					left: -1rem;
					background: #333;
				}		

				@media all and (max-width: 768px) {
					.poemkit-demo-nav li {
						position: relative;
						float: left;
						display: inline-block;
						margin: 0 1.2rem 0 0;
					}

					.poemkit-demo-nav-header {
						width: 100%;
					}	

					.poemkit-demo-nav li.is-active > a:after {
						left: -.7rem;
					}	

				}
				
				
				/*-- Main --*/
				.poemkit-demo-container {
					padding-left: 15px;
					padding-right: 15px;
					max-width: 1000px;
					position: relative;
					margin-left: auto;
					margin-right: auto;
					padding-bottom: 70px;
					/* Do not use "transform", it will affect the "position:fixed" effect of the child */
					left: 160px;
				}
				
				@media all and (max-width: 768px) {
					.poemkit-demo-container {
						padding: 0;	
						max-width: 100%;
						left: 0;
					}
				}

				@media all and (max-width: 1024px) and (min-width: 769px) {
					.poemkit-demo-container {
						max-width: 700px;
					}
				}
		
				@media all and (max-width: 1440px) and (min-width: 1025px) {
					.poemkit-demo-container {
						max-width: 1000px;
					}
				}


				@media all and (max-width: 1600px) and (min-width: 1441px) {
					.poemkit-demo-container {
						max-width: 1100px;
						left: 100px;
					}
				}

				@media all and (min-width: 1601px) {
					.poemkit-demo-container {
						max-width: 1140px;
						left: 60px;
					}
				}

				
				.poemkit-demo-section {
					display: flow-root;
					box-sizing: border-box;
					padding-top: 40px;
					padding-bottom: 40px;
				}
				
			`;   
	
		}

    }


  render() {

    return (
	  <>
		
		
            <main id="poemkit-maincontent">
		
				<HookContent />

            </main>
		
          
      </>

    );
  }
    
}

export default ComponentsDemo;