import React from 'react';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import Button from '@uixkit.react/components/Buttons/index.js';


export default () => {

	
    return (
	  <>
		    

			<main id="uix-maincontent">
		
				{/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s uix-spacing--no-bottom">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h1 className="uix-t-c">
									Buttons 
									<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/master/src/client/components/Buttons" target="_blank"><code><i className="fa fa-code" aria-hidden="true"></i></code></a>
								</h1>
							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>

		
		
				{/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s uix-spacing--no-bottom">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Click Event</h3>
								<p>
										Add onClick event to the button.

									</p>
								<hr />


							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>



			   {/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s">
					<div className="container">


							<div className="row">
								<div className="col-12" id="my-ajax-demo-target-button">


									<Button id="app-btn-1" href="#" data-title="button" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--m uix-btn__bg--primary is-pill" onClick={(e) => {e.preventDefault(); alert( e.target.id );} }>Click me to view ID!</Button>

 								    <br />
 								    <Button id="app-btn-2" href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--m uix-btn__bg--primary is-pill" onClick={(e) => {e.preventDefault(); __( '#app-btn-2' ).width( '50%' );} }>Click me to change the width!</Button>
		


								</div>     


							</div>
							{/*<!-- .row end -->*/}  


					</div>
					{/*<!-- .container end -->*/}



				</section>



				{/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s uix-spacing--no-bottom">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Button</h3>
								<p>
										If you need to use multiple colors, you can add CSS styles yourself, such as: <code>.uix-btn__bg--blue</code>, <code>.uix-btn__bg--purple</code> ...

									</p>
								<hr />


							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>



			   {/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s">
					<div className="container">


							<div className="row">
								<div className="col-12">


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--t uix-btn__bg--hyperlink">Tiny</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--hyperlink">Small</Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--m uix-btn__bg--hyperlink">Medium</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--l uix-btn__bg--hyperlink">Large</Button>

									<br />  

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--t uix-btn__bg--hyperlink2">Tiny</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--hyperlink2">Small</Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--m uix-btn__bg--hyperlink2">Medium</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--l uix-btn__bg--hyperlink2">Large</Button>

									<br />      


									<Button href="#"  className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--t uix-btn__bg--primary"><i className="fa fa-bullhorn" aria-hidden="true"></i>Tiny</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary"><i className="fa fa-bullhorn" aria-hidden="true"></i>Small</Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--m uix-btn__bg--primary"><i className="fa fa-cogs" aria-hidden="true"></i>Medium</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--l uix-btn__bg--primary"><i className="fa fa-flask" aria-hidden="true"></i>Large</Button>

									<br />

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--t uix-btn__bg--primary">Tiny<i className="fa fa-bullhorn" aria-hidden="true"></i></Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary">Small<i className="fa fa-bullhorn" aria-hidden="true"></i></Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--m uix-btn__bg--primary">Medium<i className="fa fa-cogs" aria-hidden="true"></i></Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--l uix-btn__bg--primary">Large<i className="fa fa-flask" aria-hidden="true"></i></Button>

									<br />


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary uix-btn__icon uix-btn__icon--right"><span><i className="fa fa-bullhorn" aria-hidden="true"></i></span>Icon Right</Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary uix-btn__icon uix-btn__icon--left"><span><i className="fa fa-cogs" aria-hidden="true"></i></span>Icon Left</Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary is-pill is-transparent uix-btn__icon uix-btn__icon--right"><span><i className="fa fa-bullhorn" aria-hidden="true"></i></span>Icon Left</Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary is-pill is-transparent uix-btn__icon uix-btn__icon--left"><span><i className="fa fa-cogs" aria-hidden="true"></i></span>Icon Right</Button>


									<br />

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--t uix-btn__bg--primary is-disabled">Tiny</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary is-disabled">Small</Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--m uix-btn__bg--primary is-disabled">Medium</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--l uix-btn__bg--primary is-disabled">Large</Button>

									<br />


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--t uix-btn__bg--primary wait">Tiny</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary wait">Small</Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--m uix-btn__bg--primary wait">Medium</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--l uix-btn__bg--primary wait">Large</Button>

									<br />

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--t uix-btn__bg--primary is-pill">Tiny</Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary is-pill">Small</Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--m uix-btn__bg--primary is-pill">Medium</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--l uix-btn__bg--primary is-pill">Large</Button>



									<br />


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--t uix-btn__bg--primary is-rounded">Tiny</Button>



									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary is-rounded">Small</Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--m uix-btn__bg--primary is-rounded">Medium</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--l uix-btn__bg--primary is-rounded">Large</Button>


									<br />


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--t uix-btn__bg--primary is-pill is-transparent">Tiny Radius</Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary is-pill is-transparent">Small Radius</Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--m uix-btn__bg--primary is-pill is-transparent">Medium Radius</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--l uix-btn__bg--primary is-pill is-transparent">Large Radius</Button>


									<hr />

									<div className="uix-btn__group uix-btn__margin--b">
										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--primary is-pill is-transparent">Group</Button>


										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--primary is-pill is-transparent">Group</Button>

										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--primary is-pill is-transparent">Group</Button>
									</div>

									 <br />


									<div className="uix-btn__group uix-btn__margin--b">
										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--primary">Group</Button>


										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--primary">Group</Button>

										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--primary">Group</Button>
									</div>





									<hr />



									<div className="uix-btn__group is-fullwidth uix-btn__margin--b">
										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--primary is-pill is-transparent">Group</Button>


										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--primary is-pill is-transparent">Group</Button>

										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--primary is-pill is-transparent">Group</Button>
									</div>

									 <br />


									<div className="uix-btn__group is-fullwidth uix-btn__margin--b">
										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--primary">Group</Button>


										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--primary">Group</Button>

										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--primary">Group</Button>
									</div>





									<hr />

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--t uix-btn__bg--primary is-fullwidth">Tiny Full Width</Button>


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary is-fullwidth">Small Full Width</Button>

									<br />

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--m uix-btn__bg--primary is-fullwidth">Medium Full Width</Button>

									<br />

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--l uix-btn__bg--primary is-fullwidth">Large Full Width</Button>

									<br />

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--t uix-btn__bg--primary is-fullwidth is-pill">Tiny Full Width Radius</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary is-fullwidth is-pill">Small Full Width Radius</Button>

									<br />

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--m uix-btn__bg--primary is-fullwidth is-pill">Medium Full Width Radius</Button>

									<br />

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--l uix-btn__bg--primary is-fullwidth is-pill">Large Full Width Radius ( More Text )</Button>


								</div>     


							</div>
							{/*<!-- .row end -->*/}  


					</div>
					{/*<!-- .container end -->*/}



				</section>


				{/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s uix-spacing--no-bottom">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Secondary Button</h3>
								<hr />

							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>

			   {/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s">
					<div className="container">


							<div className="row">
								<div className="col-12">


									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--secondary is-fill-white">Secondary Button</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--secondary is-rounded is-fill-white">Secondary Button</Button>

									<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--secondary is-pill is-fill-white">Secondary Button</Button>


									<br /> 


									<div className="uix-t-c" style={__.styleFormat("background: #333; padding: 1.5rem 0 0; margin-top: 1rem;")}>

										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--secondary is-fill-white">White Button</Button>

										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--secondary">White Button</Button>

										<br />

										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--secondary is-pill is-fill-white">White Button</Button>

										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--secondary is-pill">White Button</Button>


										<br />

										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--secondary is-fill-white uix-btn__icon uix-btn__icon--right"><span><i className="fa fa-bullhorn" aria-hidden="true"></i></span>Icon Right</Button>


										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--secondary is-fill-white uix-btn__icon uix-btn__icon--left"><span><i className="fa fa-cogs" aria-hidden="true"></i></span>Icon Left</Button>


										<br />

										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--secondary uix-btn__icon uix-btn__icon--right"><span><i className="fa fa-bullhorn" aria-hidden="true"></i></span>Icon Right</Button>


										<Button href="#" className="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--secondary uix-btn__icon uix-btn__icon--left"><span><i className="fa fa-cogs" aria-hidden="true"></i></span>Icon Left</Button>

										<br />



									</div>


								</div>     


							</div>
							{/*<!-- .row end -->*/}  


					</div>
					{/*<!-- .container end -->*/}



				</section>


			</main>

		
      </>
    );
};