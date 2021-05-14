import React from 'react';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import {
	Input
//	PasswordInput,
//	MergeInput,
//	Textarea,
//	Select,
//	CustomSelect,
//	Checkbox,
//	Radio,
//	MultiSelect,
//	SingleSelect,
//	Date,
//	Number,
//	Switch,
//	DynamicFields,
//	File,
//	FileField
} from '@uixkit.react/components/Form/index.js';



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
								Form 
								<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Form" target="_blank"><code><i className="fa fa-code" aria-hidden="true"></i></code></a>
							</h1>
						</div>
					</div>
					{/*<!-- .row end -->*/}

				</div>
				{/*<!-- .container end -->*/}

			</section>



		   <form method="post" action="#" id="app-my-form">
		


				{/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s uix-spacing--no-bottom">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Inputs</h3>
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

								Text 1: &nbsp;&nbsp;
								<Input label="Input Normal" name="input-name-1"/> (Only <code>label</code> and <code>name</code> attributes)
								<br />

								Text 2: &nbsp;&nbsp;
								<Input label="Input Normal" name="input-name-2" id="input-name-2" maxLength="50" value="0" />
								<br />

								Text 3: &nbsp;&nbsp;
								<Input label="Disabled" name="input-name-3" disabled />
								&nbsp;&nbsp;
								<Input label="Read Only" name="input-name-3_2" readOnly />
								&nbsp;&nbsp;
								<Input label="Required" name="input-name-3_3" required />
								<br />

								Text 4: &nbsp;&nbsp;<br />
								<Input ui="fullwidth" label="Fullwidth" name="input-name-4" />
								<br />


								Text 5: &nbsp;&nbsp;
								<Input ui="error" label="Error" name="input-name-5" value="Error" />
								<br />

								Text 6: &nbsp;&nbsp;
								<Input ui="success" label="Success" name="input-name-6" value="Success" />
								<br />

								Text 7: &nbsp;&nbsp;
								<Input ui="pill" label="Pill" name="input-name-7" />
								<br />

								Text 8: &nbsp;&nbsp;
								<Input ui="rounded" label="Rounded" name="input-name-8" />
								<br />

								Text 9: &nbsp;&nbsp;
								<Input ui="small" units="unit" label="Small Size" name="input-name-9" />
								<br />


								Text 10: &nbsp;&nbsp;
								<Input ui="medium" units="em" label="Medium Size" name="input-name-10" />
								<br />


								Text 11: &nbsp;&nbsp;
								<Input ui="large" units="custom string" label="Large Size" name="input-name-11" />
								<br />

								Text 12: &nbsp;&nbsp;
								<Input label="Icon Left" name="input-name-icon-1" iconLeft={<i className="fa fa-user-o" aria-hidden="true"></i>} />

								&nbsp;&nbsp;
								<Input label="Icon Right" name="input-name-icon-2" iconRight={<i className="fa fa-feed" aria-hidden="true"></i>} />				
								<br />


								Mixed some UI attributes (<code>ui="fullwidth pill success"</code>): &nbsp;&nbsp;<br />
								<Input ui="fullwidth pill success" label="Mixed some UI attributes" name="input-name-mixed" />	

								All UI attributes (<code>ui="fullwidth small medium large pill rounded error success"</code>): &nbsp;&nbsp;<br />
								<Input ui="fullwidth small medium large pill rounded error success" label="All UI attributes" name="input-name-all" />


							</div>  


						</div>
						{/*<!-- .row end -->*/}  


					</div>
					{/*<!-- .container end -->*/}



				</section>


			
	
	

			   {/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s uix-spacing--no-top">
					<div className="container">


						   <div className="row">
								<div className="col-12">
									<p className="uix-t-l">
									  <button type="submit" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--primary">Submit Your Info</button>
									</p> 

									<span className="response"></span>

								</div>  

							</div>
							{/*<!-- .row end -->*/} 



					</div>
					{/*<!-- .container end -->*/}


				</section>
	
	
	
	        </form>
	
	
	
	
			
		</main>


		
      </>
    );
};