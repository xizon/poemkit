import React, { Component } from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';
import LoginPage from '@uixkit.react/pages/Member/LoginPage.js';
import Footer from '@uixkit.react/components/Footer/index.tsx';


class Member extends Component {
	constructor(props) {
		super(props);
	}

	render() {

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

									<LoginPage />

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

export default Member;