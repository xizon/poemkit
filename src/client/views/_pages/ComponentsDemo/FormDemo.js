import React from 'react';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import {
	Input,
//	PasswordInput,
//	MergeInput,
	Textarea,
	Select,
	CustomSelect,
	Checkbox,
	Radio,
	MultiSelect,
	SingleSelect,
	Date,
	Number,
	Switch,
	DynamicFields,
	File,
//	FileField
} from '@uixkit.react/components/Form/index.js';



export default () => {

   // Equivalent to componentDidMount and componentDidUpdate:
   React.useEffect(() => {
		__( document ).ready( function() {

	
	
			
		});       
   });
	
	
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
								<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Form" target="_blank"><span className="uix-dir--right"><svg width="25" viewBox="0 0 392.186 392.186"><g><g><g><path fill="#d2d2d2" d="M368.62,17.951H23.568C10.57,17.951,0,28.524,0,41.52v309.146c0,12.996,10.57,23.568,23.568,23.568h345.053c12.994,0,23.564-10.572,23.564-23.568V41.52C392.188,28.525,381.614,17.951,368.62,17.951z M297.56,57.528c0-4.806,3.896-8.703,8.701-8.703h8.703c4.808,0,8.701,3.896,8.701,8.703v9.863c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.805,0-8.701-3.896-8.701-8.702V57.528z M257.093,57.528c0-4.806,3.898-8.703,8.703-8.703h8.701c4.805,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.898,8.702-8.703,8.702h-8.701c-4.805,0-8.703-3.896-8.703-8.702V57.528z M363.903,345.951H28.282V102.235h335.621V345.951L363.903,345.951z M364.132,67.391c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.809,0-8.702-3.896-8.702-8.702v-9.863c0-4.806,3.896-8.703,8.702-8.703h8.703c4.806,0,8.701,3.896,8.701,8.703V67.391z"/><path fill="#d2d2d2" d="M84.185,233.284l63.084,29.336c1.631,0.755,3.367,1.138,5.162,1.138c2.338,0,4.617-0.664,6.598-1.924c3.547-2.267,5.666-6.13,5.666-10.334v-0.322c0-4.752-2.785-9.116-7.096-11.118l-39.455-18.332l39.455-18.334c4.311-2.004,7.096-6.367,7.096-11.117v-0.319c0-4.21-2.119-8.075-5.666-10.334c-1.961-1.253-4.246-1.916-6.605-1.916c-1.779,0-3.563,0.391-5.16,1.133l-63.08,29.333c-4.307,2.004-7.09,6.369-7.09,11.117v0.877C77.093,226.909,79.874,231.272,84.185,233.284z"/><path fill="#d2d2d2" d="M165.257,293.036c2.301,3.149,6.002,5.03,9.9,5.03h0.316c5.352,0,10.041-3.426,11.672-8.517L228.7,160.788c1.192-3.716,0.531-7.818-1.771-10.973c-2.301-3.15-6.002-5.03-9.901-5.03h-0.315c-5.354,0-10.048,3.425-11.679,8.516l-41.559,128.771C162.292,285.793,162.958,289.889,165.257,293.036z"/><path fill="#d2d2d2" d="M227.49,192.276c0,4.745,2.783,9.109,7.095,11.123l39.455,18.329l-39.455,18.33c-4.31,2.004-7.095,6.368-7.095,11.118v0.322c0,4.205,2.117,8.068,5.668,10.336c1.974,1.258,4.254,1.924,6.595,1.924c1.793,0,3.528-0.383,5.17-1.142l63.08-29.335c4.307-2.009,7.09-6.372,7.09-11.115v-0.877c0-4.748-2.783-9.113-7.094-11.117l-63.08-29.333c-1.591-0.74-3.373-1.131-5.152-1.131c-2.355,0-4.643,0.661-6.604,1.912c-3.551,2.263-5.67,6.127-5.67,10.337v0.318H227.49L227.49,192.276z"/></g></g></g></svg></span></a>
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

								Input Line Style (<code>theme="line"</code>): &nbsp;&nbsp;<br />
								<Input theme="line" label="Title" name="input-name-linestyle" />
								<br />
		
								Input 1: &nbsp;&nbsp;
								<Input label="Input Normal" name="input-name-1"/> (Only <code>label</code> and <code>name</code> attributes)
								<br />

								Input 2: &nbsp;&nbsp;
								<Input label="Input Normal" name="input-name-2" id="input-name-2" maxLength="50" value="0" />
								<br />

								Input 3: &nbsp;&nbsp;
								<Input label="Disabled" name="input-name-3" disabled />
								&nbsp;&nbsp;
								<Input label="Read Only" name="input-name-3_2" readOnly />
								&nbsp;&nbsp;
								<Input label="Required" name="input-name-3_3" required />
								<br />

								Input 4: &nbsp;&nbsp;<br />
								<Input ui="fullwidth" label="Fullwidth" name="input-name-4" />
								<br />


								Input 5: &nbsp;&nbsp;
								<Input ui="error" label="Error" name="input-name-5" value="Error" />
								<br />

								Input 6: &nbsp;&nbsp;
								<Input ui="success" label="Success" name="input-name-6" value="Success" />
								<br />

								Input 7: &nbsp;&nbsp;
								<Input ui="pill" label="Pill" name="input-name-7" />
								<br />

								Input 8: &nbsp;&nbsp;
								<Input ui="rounded" label="Rounded" name="input-name-8" />
								<br />

								Input 9: &nbsp;&nbsp;
								<Input ui="small" units="unit" label="Small Size" name="input-name-9" />
								<br />


								Input 10: &nbsp;&nbsp;
								<Input ui="medium" units="em" label="Medium Size" name="input-name-10" />
								<br />


								Input 11: &nbsp;&nbsp;
								<Input ui="large" units="custom string" label="Large Size" name="input-name-11" />
								<br />

								Input 12: &nbsp;&nbsp;
								<Input label="Icon Left" name="input-name-icon-1" iconLeft={<i className="fa fa-user-o" aria-hidden="true"></i>} />

								&nbsp;&nbsp;
								<Input label="Icon Right" name="input-name-icon-2" iconRight={<i className="fa fa-feed" aria-hidden="true"></i>} />				
								<br />


								Mixed some UI attributes (<code>ui="fullwidth pill success"</code>): &nbsp;&nbsp;<br />
								<Input ui="fullwidth pill success" label="Mixed some UI attributes" name="input-name-mixed" />	

								All UI attributes (<code>ui="fullwidth small medium large pill rounded success error"</code>): &nbsp;&nbsp;<br />
								<Input ui="fullwidth small medium large pill rounded success error" label="All UI attributes" name="input-name-all" />


							</div>  


						</div>
						{/*<!-- .row end -->*/}  


					</div>
					{/*<!-- .container end -->*/}



				</section>


				{/*<!-- Content 
				====================================================== -->*/}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Textarea</h3>
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
									
									Textarea Line Style(<code>theme="line"</code>): &nbsp;&nbsp;<br />	
									<Textarea theme="line" label="Title" name="textarea-name-linestyle" />
									<br />
									
									
									Textarea 1: &nbsp;&nbsp;	
									<Textarea rows="5" cols="30" label="Title" name="textarea-name-1" />
									<br />
										
										
									Textarea 2: &nbsp;&nbsp;
									<Textarea label="Disabled" name="textarea-name-2" disabled />
									&nbsp;&nbsp;
									<Textarea label="Read Only" name="textarea-name-2_2" readOnly />
									&nbsp;&nbsp;
									<Textarea label="Required" name="textarea-name-2_3" required />
									<br />

									Textarea 3: &nbsp;&nbsp;<br />
									<Textarea ui="fullwidth" label="Fullwidth" name="textarea-name-3" />
									<br />


									Textarea 4: &nbsp;&nbsp;
									<Textarea ui="error" label="Error" name="textarea-name-4" value="Error" />
									<br />

									Textarea 5: &nbsp;&nbsp;
									<Textarea ui="success" label="Success" name="textarea-name-5" value="Success" />
									<br />

									Textarea 6: &nbsp;&nbsp;
									<Textarea ui="pill" label="Pill" name="textarea-name-6" />
									<br />

									Textarea 7: &nbsp;&nbsp;
									<Textarea ui="rounded" label="Rounded" name="textarea-name-7" />
									<br />

									All UI attributes (<code>ui="fullwidth pill rounded success error"</code>): &nbsp;&nbsp;<br />
									<Textarea ui="fullwidth pill rounded success error" label="All UI attributes" name="textarea-name-all" />

	
								</div>  

							</div>
							{/*<!-- .row end -->*/}          


					</div>
					{/*<!-- .container end -->*/}



				</section>
	
	
	

				{/*<!-- Content 
				====================================================== -->*/}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Select (normal)</h3>
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

								    <Select 
										options='{
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3"
										}'
                                        theme="line"
										name="select-name-line" />
									<br />
								
								    <Select 
										options='{
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3",
											"Option 4":"value-4"
										}'
                                        id="select-name-1"
										name="select-name-1" 
										disabled />	
									<br />
						
											
											
								    <Select 
                                        value="value-2"
										options='{
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3"
										}'
                                        ui="rounded"
										name="select-name-2" />
									<br />
											
								    <Select 
										options='{
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3"
										}'
                                        ui="pill"
										name="select-name-3" />
									<br />
											
								    <Select 
										options='{
											"":"",
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3"
										}'
                                        ui="fullwidth"
										label="Select Fullwidth" 
										name="select-name-4" />
									<br />			
											
							

							</div>  

						</div>
						{/*<!-- .row end -->*/} 		


					</div>
					{/*<!-- .container end -->*/}



				</section>
	
	

				{/*<!-- Content 
				====================================================== -->*/}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Custom Select</h3>
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

								    <CustomSelect 
										options='{
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3"
										}'
                                        theme="line"
										name="custom-select-name-line" />
									<br />
											
								
								    <CustomSelect 
										options='{
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3",
											"Option 4":"value-4"
										}'
										label="Custom Select" 		  
										name="custom-select-name-1" 
										disabled />	
									<br />
						
											
											
								    <CustomSelect 
                                        value="value-2"
										options='{
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3"
										}'
										label="Custom Select (default option is `Option 2`)"   
                                        ui="rounded"
										name="custom-select-name-2" />
									<br />
											
								    <CustomSelect 
										options='{
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3"
										}'
										label="Custom Select" 		  
                                        ui="pill"
										name="custom-select-name-3" />
									<br />

								    <CustomSelect 
										options='{
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3"
										}'
										label="Top Position"
                                        position="top"
										name="custom-select-name-4" />
									<br />

											
								    <CustomSelect 
										options='{
											"Custom Select Fullwidth":"",
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3"
										}'
                                        ui="fullwidth"
										name="custom-select-name-5" />
									<br />			
								

							</div>  

						</div>
						{/*<!-- .row end -->*/} 		 	     	 	 	 	 	 


					</div>
					{/*<!-- .container end -->*/}



				</section>
	
	

				{/*<!-- Content 
				====================================================== -->*/}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Multiple Select</h3>
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
								
								    <MultiSelect 
										options='{
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3"
										}'
                                        theme="line"
										name="multiSelect-name-line" />
									<br />
											
								
								    <MultiSelect 
                                        value="value-2,value-3"
										options='{
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3",
											"Option 4":"value-4"
										}'	  
										name="multiSelect-name-1" />	
									<br />
								

							</div>  

						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}



				</section>
	

	

				{/*<!-- Content 
				====================================================== -->*/}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Single Select</h3>
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
								
								
								    <SingleSelect 
										options='{
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3"
										}'
                                        theme="line"
										name="singleSelect-name-line" />
									<br />
											
								    <SingleSelect 
										options='{
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3",
											"Option 4":"value-4"
										}'	  
                                        ui="rounded"
										name="singleSelect-name-1" />	
									<br />
											
											
											
											
								    <SingleSelect 
                                        value="value-2"
                                        targetID="my-cus-radio-switch-1,my-cus-radio-switch-2,my-cus-radio-switch-3,my-cus-radio-switch-4"
										options='{
											"Option 1":"value-1",
											"Option 2":"value-2",
											"Option 3":"value-3",
											"Option 4":"value-4"
										}'	  
                                        ui="pill"
										name="singleSelect-name-2" />	
											
									<div id="my-cus-radio-switch-1" style={{padding:"10px",borderRadius:"3px",background:"#f7f7f7",border:"1px solid #efefef",margin:"5px 0 15px 0",width:"300px"}}>content one...</div>

									<div id="my-cus-radio-switch-2" style={{padding:"10px",borderRadius:"3px",background:"#f7f7f7",border:"1px solid #efefef",margin:"5px 0 15px 0",width:"300px"}}>content two...</div>

									<div id="my-cus-radio-switch-3" style={{padding:"10px",borderRadius:"3px",background:"#f7f7f7",border:"1px solid #efefef",margin:"5px 0 15px 0",width:"300px"}}>content three...</div>

									<div id="my-cus-radio-switch-4" style={{padding:"10px",borderRadius:"3px",background:"#f7f7f7",border:"1px solid #efefef",margin:"5px 0 15px 0",width:"300px"}}>content four...</div>



							</div>  

						</div>
						{/*<!-- .row end -->*/}



					</div>
					{/*<!-- .container end -->*/}



				</section>
	
	

				{/*<!-- Content 
				====================================================== -->*/}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Switch</h3>
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

					
								<Switch textOff="off" textOn="on" name="switch-name-1" id="switch-name-1" />
								<br />
									
								<Switch textOff="off" textOn="on" name="switch-name-2" value="true" />
								<br />
									
								<Switch textOff="off" textOn="on" name="switch-name-3" disabled />
								<br />
												
								<Switch ui="pill" textOff="off" textOn="on" name="switch-name-4" />
								<br />
									
												
								<Switch ui="rounded" textOff="off" textOn="on" name="switch-name-5" />
								<br />		
									
								<Switch targetID="my-toggle-name-1" textOff="hide" textOn="show" name="switch-name-6" />
								<div id="my-toggle-name-1" style={{padding:"10px",borderRadius:"3px",background:"#f7f7f7",border:"1px solid #efefef",margin:"5px 0 15px 0",width:"300px"}}>content here...</div>
								<br />		
									
									

							</div>  

						</div>
						{/*<!-- .row end -->*/}       



					</div>
					{/*<!-- .container end -->*/}



				</section>
	
	

				{/*<!-- Content 
				====================================================== -->*/}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Radio</h3>
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

								
								<Radio 
									options='{
										"Option 1":"value-1",
										"Option 2":"value-2",
										"Option 3":"value-3",
										"Option 4":"value-4"
									}'	  
									name="radio-name-1" 
                                    id="radio-name-1"
									disabled />	
								<br />



								<Radio 
									value="value-2"
									options='{
										"Option 1":"value-1",
										"Option 2":"value-2",
										"Option 3":"value-3"
									}'
									name="radio-name-2" />
								<br />	



								<Radio 
									options='{
										"Option 1":"value-1",
										"Option 2":"value-2",
										"Option 3":"value-3"
									}'
									name="radio-name-3"
                                    id="radio-name-3"
									required />
								<br />	

								
						

							</div>  

						</div>
						{/*<!-- .row end -->*/} 	



					</div>
					{/*<!-- .container end -->*/}



				</section>
	
	

				{/*<!-- Content 
				====================================================== -->*/}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Date</h3>
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
								
								
								<Date theme="line" ui="large" label="Date" name="date-name-1" autoComplete="off" min="1950-01-01" max="2021-12-31"  />
								<br />
								
								<Date ui="small" label="Date" name="date-name-2" autoComplete="off" min="1950-01-01" max="2021-12-31" value="2018-07-22" />
								<br />

								<Date ui="medium" label="Date" name="date-name-3" autoComplete="off" min="1950-01-01" max="2021-12-31" defaultNow="true" />
								<br />


								<Date ui="large" label="Date" name="date-name-4" autoComplete="off" time="true" min="1950-01-01T08:30" max="2017-06-30T16:30" value="" />
								<br />
									
								<Date ui="large" label="Date" name="date-name-5" autoComplete="off" time="true" min="1950-01-01T08:30" max="2017-06-30T16:30" disabled />
								<br />		
									
									
								<Date ui="fullwidth" label="Date" name="date-name-6" autoComplete="off" time="true" min="1950-01-01T08:30" max="2017-06-30T16:30" defaultNow="true" />
								<br />							
									
									
								<Date ui="fullwidth rounded" label="Date" name="date-name-7" autoComplete="off" time="true" min="1950-01-01T08:30" max="2017-06-30T16:30" />
								<br />			
									
								<Date ui="fullwidth pill" label="Date" name="date-name-6" autoComplete="off" time="true" min="1950-01-01T08:30" max="2017-06-30T16:30" />
								<br />		
	

							</div>  

						</div>
						{/*<!-- .row end -->*/}    

				

					</div>
					{/*<!-- .container end -->*/}



				</section>
	
	
	

				{/*<!-- Content 
				====================================================== -->*/}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Checkbox</h3>
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
								
								
								<Checkbox label="Checkbox" name="checkbox-name-1" id="checkbox-name-1" />
								<br />
									
								<Checkbox label="Checkbox" name="checkbox-name-2" value="true" />
								<br />
									
								<Checkbox label="Checkbox" name="checkbox-name-3" disabled />
								<br />
												
								

							</div>  

						</div>
						{/*<!-- .row end -->*/} 


					</div>
					{/*<!-- .container end -->*/}



				</section>
	
	

				{/*<!-- Content 
				====================================================== -->*/}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Number</h3>
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

								<Number theme="line" step="0.01" name="number-name-line" btnStepMinus="1" btnStepPlus="1" decimals="0" />
								<br />

								<Number name="number-name-2" value="5" btnStepMinus="15" btnStepPlus="15" decimals="2" min="0" max="200" />
								<br />
									
								<Number name="number-name-3" value="1" btnStepMinus="15" btnStepPlus="15" decimals="2" disabled/>
								<br />								
									
									
									

							</div>  

						</div>
						{/*<!-- .row end -->*/} 	     


					</div>
					{/*<!-- .container end -->*/}



				</section>
	
	

				{/*<!-- Content 
				====================================================== -->*/}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Dynamic Fields</h3>
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


								<DynamicFields maxFields="10" addLabel="Add new" removeLabel="" tempHtmlString={
									<>
										<Input placeholder="Title" name="appnotice-title[]" />
										&nbsp;&nbsp;
										<Input ui="medium" placeholder="URL" name="appnotice-url[]" />
									</>
								}  />
									

							</div>  

						</div>
						{/*<!-- .row end -->*/} 


					</div>
					{/*<!-- .container end -->*/}



				</section>
	
	

				{/*<!-- Content 
				====================================================== -->*/}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>File</h3>
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

								<File label="Upload File" name="file-name-1" />
									
							</div>  

						</div>
						{/*<!-- .row end -->*/}


					</div>
					{/*<!-- .container end -->*/}



				</section>
	
	

				{/*<!-- Content 
				====================================================== -->*/}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>File Field</h3>
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

								<div className="uix-controls__file-field-container">
									<div className="uix-controls__file-field-trigger">
									  <div>
										  <input type="file" accept="image/*"  data-title="Drag and drop a file here" />
									  </div>
									</div>

								</div>

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
	
	
	
	

			{/*<!-- Content 
			====================================================== -->*/}
			<section>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3>Search Box</h3>
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
				<div className="container uix-t-c">


						<div className="row">
							<div className="col-12">


								<div className="uix-controls__merge" role="search">
									<input id="search-input" placeholder="Enter your search term..." name="search-input" type="text" required />
									<button type="submit" className="uix-btn uix-btn__bg--primary"><span><i className="fa fa-search" aria-hidden="true"></i>Search</span></button>                    
								</div>


								<div className="uix-controls__merge is-pill">
									<input id="search-input2" placeholder="Enter your search term..." name="search-input" type="text" required />
									<button type="submit" className="uix-btn uix-btn__bg--primary"><span>Search</span></button>                    
								</div>                    


							</div>     


						</div>
						{/*<!-- .row end -->*/}  


				</div>
				{/*<!-- .container end -->*/}



			</section>



			{/*<!-- Content 
			====================================================== -->*/}
			<section>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3>Subscribe</h3>
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
				<div className="container uix-t-c">


						<div className="row">
							<div className="col-12">

								<div className="uix-controls__merge">
									<input id="subscribe-input" placeholder="Enter your Email" name="subscribe-input" type="email" required />
									<button type="submit" className="uix-btn uix-btn__bg--primary"><span>Subscribe</span></button>                    
								</div>      


								<div className="uix-controls__merge is-pill">
									<input id="subscribe-input" placeholder="Enter your Email" name="subscribe-input" type="email" required />
									<button type="submit" className="uix-btn uix-btn__bg--primary"><span>Subscribe</span></button>                    
								</div>    

								<div className="uix-controls__merge is-iconic">
									<i className="fa fa-envelope" aria-hidden="true"></i>
									<input id="subscribe-input2" placeholder="Enter your Email" name="subscribe-input" type="email" required />
									<button type="submit" className="uix-btn uix-btn__bg--primary"><span>Subscribe</span></button>                    
								</div>       

								<div className="uix-controls__merge is-pill is-iconic">
									<i className="fa fa-envelope" aria-hidden="true"></i>
									<input id="subscribe-input3" placeholder="Enter your Email" name="subscribe-input" type="email" required />
									<button type="submit" className="uix-btn uix-btn__bg--primary"><span>Subscribe</span></button>                    
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