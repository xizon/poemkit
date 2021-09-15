import React from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';
import {
	Input,
	PasswordInput,
	MergeInput,
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
	FileField
} from '@uixkit.react/components/Form/index.tsx';


//Create or Remove Sidebar Menu
import { SidebarMenu } from '@uixkit.react/pages/ComponentsDemo/_SidebarMenu.js';

export default () => {

	React.useEffect(() => { // Equivalent to componentDidMount and componentDidUpdate:
		
		__( document ).ready( function() {
			//Create sidebar menu
	        SidebarMenu();
		});  
	});

	
	
    return (
	  <>
		

		{/*<!-- Content 
		====================================================== -->*/}
		<section>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="uix-typo--h2">
							Form 
							<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Form" target="_blank"><span className="uix-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="15" viewBox="0 0 392.186 392.186"><g><g><g><path fill="#d2d2d2" d="M368.62,17.951H23.568C10.57,17.951,0,28.524,0,41.52v309.146c0,12.996,10.57,23.568,23.568,23.568h345.053c12.994,0,23.564-10.572,23.564-23.568V41.52C392.188,28.525,381.614,17.951,368.62,17.951z M297.56,57.528c0-4.806,3.896-8.703,8.701-8.703h8.703c4.808,0,8.701,3.896,8.701,8.703v9.863c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.805,0-8.701-3.896-8.701-8.702V57.528z M257.093,57.528c0-4.806,3.898-8.703,8.703-8.703h8.701c4.805,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.898,8.702-8.703,8.702h-8.701c-4.805,0-8.703-3.896-8.703-8.702V57.528z M363.903,345.951H28.282V102.235h335.621V345.951L363.903,345.951z M364.132,67.391c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.809,0-8.702-3.896-8.702-8.702v-9.863c0-4.806,3.896-8.703,8.702-8.703h8.703c4.806,0,8.701,3.896,8.701,8.703V67.391z"/><path fill="#d2d2d2" d="M84.185,233.284l63.084,29.336c1.631,0.755,3.367,1.138,5.162,1.138c2.338,0,4.617-0.664,6.598-1.924c3.547-2.267,5.666-6.13,5.666-10.334v-0.322c0-4.752-2.785-9.116-7.096-11.118l-39.455-18.332l39.455-18.334c4.311-2.004,7.096-6.367,7.096-11.117v-0.319c0-4.21-2.119-8.075-5.666-10.334c-1.961-1.253-4.246-1.916-6.605-1.916c-1.779,0-3.563,0.391-5.16,1.133l-63.08,29.333c-4.307,2.004-7.09,6.369-7.09,11.117v0.877C77.093,226.909,79.874,231.272,84.185,233.284z"/><path fill="#d2d2d2" d="M165.257,293.036c2.301,3.149,6.002,5.03,9.9,5.03h0.316c5.352,0,10.041-3.426,11.672-8.517L228.7,160.788c1.192-3.716,0.531-7.818-1.771-10.973c-2.301-3.15-6.002-5.03-9.901-5.03h-0.315c-5.354,0-10.048,3.425-11.679,8.516l-41.559,128.771C162.292,285.793,162.958,289.889,165.257,293.036z"/><path fill="#d2d2d2" d="M227.49,192.276c0,4.745,2.783,9.109,7.095,11.123l39.455,18.329l-39.455,18.33c-4.31,2.004-7.095,6.368-7.095,11.118v0.322c0,4.205,2.117,8.068,5.668,10.336c1.974,1.258,4.254,1.924,6.595,1.924c1.793,0,3.528-0.383,5.17-1.142l63.08-29.335c4.307-2.009,7.09-6.372,7.09-11.115v-0.877c0-4.748-2.783-9.113-7.094-11.117l-63.08-29.333c-1.591-0.74-3.373-1.131-5.152-1.131c-2.355,0-4.643,0.661-6.604,1.912c-3.551,2.263-5.67,6.127-5.67,10.337v0.318H227.49L227.49,192.276z"/></g></g></g></svg>Docs on GitHub</span></a>
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
							<h3 className="app-header-title">Input</h3>
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
			<section className="uix-spacing--s uix-spacing--no-bottom">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="app-header-title">Password Input</h3>
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

							Password Input Line Style (<code>theme="line"</code>): &nbsp;&nbsp;<br />
							<PasswordInput theme="line" label="Title" name="passwordinput-name-linestyle" />
							<br />

							Password Input 1: &nbsp;&nbsp;
							<PasswordInput label="Input Normal" name="passwordinput-name-1"/> (Only <code>label</code> and <code>name</code> attributes)
							<br />

							Password Input 2: &nbsp;&nbsp;
							<PasswordInput label="Input Normal" name="passwordinput-name-2" id="input-name-2" maxLength="50" value="0" />
							<br />

							Password Input 3: &nbsp;&nbsp;
							<PasswordInput label="Disabled" name="passwordinput-name-3" disabled />
							&nbsp;&nbsp;
							<PasswordInput label="Read Only" name="passwordinput-name-3_2" readOnly />
							&nbsp;&nbsp;
							<PasswordInput label="Required" name="passwordinput-name-3_3" required />
							<br />

							Password Input 4: &nbsp;&nbsp;<br />
							<PasswordInput ui="fullwidth" label="Fullwidth" name="passwordinput-name-4" />
							<br />


							Password Input 5: &nbsp;&nbsp;
							<PasswordInput ui="error" label="Error" name="passwordinput-name-5" value="Error" />
							<br />

							Password Input 6: &nbsp;&nbsp;
							<PasswordInput ui="success" label="Success" name="passwordinput-name-6" value="Success" />
							<br />

							Password Input 7: &nbsp;&nbsp;
							<PasswordInput ui="pill" label="Pill" name="passwordinput-name-7" />
							<br />

							Password Input 8: &nbsp;&nbsp;
							<PasswordInput ui="rounded" label="Rounded" name="passwordinput-name-8" />
							<br />

							Password Input 9: &nbsp;&nbsp;
							<PasswordInput ui="small" units="unit" label="Small Size" name="passwordinput-name-9" />
							<br />


							Password Input 10: &nbsp;&nbsp;
							<PasswordInput ui="medium" units="em" label="Medium Size" name="passwordinput-name-10" />
							<br />


							Password Input 11: &nbsp;&nbsp;
							<PasswordInput ui="large" units="custom string" label="Large Size" name="passwordinput-name-11" />
							<br />

							Password Input 12: &nbsp;&nbsp;
							<PasswordInput label="Icon Left" name="passwordinput-name-icon-1" iconLeft={<i className="fa fa-user-o" aria-hidden="true"></i>} />

							&nbsp;&nbsp;
							<PasswordInput label="Icon Right" name="passwordinput-name-icon-2" iconRight={<i className="fa fa-feed" aria-hidden="true"></i>} />				
							<br />


							Mixed some UI attributes (<code>ui="fullwidth pill success"</code>): &nbsp;&nbsp;<br />
							<PasswordInput ui="fullwidth pill success" label="Mixed some UI attributes" name="passwordinput-name-mixed" />	

							All UI attributes (<code>ui="fullwidth small medium large pill rounded success error"</code>): &nbsp;&nbsp;<br />
							<PasswordInput ui="fullwidth small medium large pill rounded success error" label="All UI attributes" name="passwordinput-name-all" />


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
							<h3 className="app-header-title">Textarea</h3>
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
							<h3 className="app-header-title">Select (normal)</h3>
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
							<h3 className="app-header-title">Custom Select</h3>
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
							<h3 className="app-header-title">Multiple Select</h3>
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
							<h3 className="app-header-title">Single Select</h3>
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
							<h3 className="app-header-title">Switch</h3>
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
							<h3 className="app-header-title">Radio</h3>
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
							<h3 className="app-header-title">Date</h3>
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

							<Date ui="fullwidth pill" label="Date" name="date-name-8" autoComplete="off" time="true" min="1950-01-01T08:30" max="2017-06-30T16:30" />
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
							<h3 className="app-header-title">Checkbox</h3>
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
							<h3 className="app-header-title">Number</h3>
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
							<h3 className="app-header-title">Dynamic Fields</h3>
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

							<br />	

							<DynamicFields maxFields="10" addLabel="Add new" removeLabel="" tempHtmlString={
								<>
									<Input placeholder="Title" name="appnotice-title[]" />
									&nbsp;&nbsp;
									<Input ui="medium" placeholder="URL" name="appnotice-url[]" />
								</>
							}  
							value='["title 1","https://google.com/pa1"],["title 2","https://uiux.cc"],["title 3","https://youtube.com"]'
							/>



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
							<h3 className="app-header-title">File</h3>
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
							<h3 className="app-header-title">File Field</h3>
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

							<FileField label="Drag and drop a file here" name="file-field-name-1" />

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
							<h3 className="app-header-title">Merge Input</h3>
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

								<MergeInput btnType="button" placeholder="Enter your search term..." label={<><i className="fa fa-search" aria-hidden="true"></i> Icon Label</>} name="mergeInput-name-1-btnicon" />
								<br />

								<MergeInput btnType="button" placeholder="Enter your search term..." label="Search" name="mergeInput-name-1" />
								<br />

								<MergeInput btnType="submit" ui="pill" placeholder="Enter your search term..." label="Search" name="mergeInput-name-2" />
								<br />	
									
								<MergeInput btnType="submit" ui="rounded" placeholder="Enter your search term..." label="Search" name="mergeInput-name-2_2" />
								<br />					
									

								<MergeInput btnType="button" placeholder="Enter your Email" type="email" label="Subscribe" name="mergeInput-name-4" icon={<i className="fa fa-envelope" aria-hidden="true"></i>} />
								<br />																			


								<MergeInput btnType="button" ui="pill" placeholder="Enter your Email" type="email" label="Subscribe" name="mergeInput-name-5" icon={<i className="fa fa-envelope" aria-hidden="true"></i>} />
								<br />																			


								<MergeInput btnType="button" ui="rounded" placeholder="Enter your Email" type="email" label="Subscribe" name="mergeInput-name-5_2" icon={<i className="fa fa-envelope" aria-hidden="true"></i>} />
						

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
						<h3 className="app-header-title">Flex Layout</h3>
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



								 <form method="post" action="#" id="app-my-form">


									<div className="uix-controls-layout">
										<div className="uix-controls-layout__content">
											<div className="uix-controls-layout__content__inner">
												<div>
													{/*<!-- // -->*/}
													<h3 className="uix-typo--color-sub uix-typo--h6 uix-spacing--no uix-typo--style-uppercase">Left Title</h3>
													{/*<!-- // -->*/}
												</div>
												<div>
													{/*<!-- // -->*/}   
                                                    <Input ui="rounded fullwidth" label="Field Name" name="flexlayput-input-name-1" />
													{/*<!-- // -->*/}
												</div>
											</div>
										</div>
										<div className="uix-controls-layout__icon">
											<i className="fa fa-angle-right"></i>
										</div>
									</div>     


									 <div className="uix-controls-layout">
										<div className="uix-controls-layout__content">
											<div className="uix-controls-layout__content__inner">
												<div>
													{/*<!-- // -->*/}
													<h3 className="uix-typo--color-sub uix-typo--h6 uix-spacing--no uix-typo--style-uppercase">Left Title</h3>
													{/*<!-- // -->*/}
												</div>
												<div>
													{/*<!-- // -->*/}
													<Input ui="rounded fullwidth" label="Field Name" name="flexlayput-input-name-2" />
													{/*<!-- // -->*/}
												</div>
											</div>
										</div>
										<div className="uix-controls-layout__icon">
											<i className="fa fa-angle-right"></i>
										</div>
									</div>     

									<div className="uix-controls-layout">
										<div className="uix-controls-layout__content">
											<div className="uix-controls-layout__content__inner">
												<div className="uix-t-r">
													{/*<!-- // -->*/}
													<h3 className="uix-typo--color-sub uix-typo--h6 uix-spacing--no uix-typo--style-uppercase">Right Title</h3>
													{/*<!-- // -->*/}
												</div>
												<div>
													{/*<!-- // -->*/}
													<Input ui="rounded fullwidth" label="Field Name" name="flexlayput-input-name-3" />     
													{/*<!-- // -->*/}
												</div>
											</div>
										</div>
										<div className="uix-controls-layout__icon">
											<i className="fa fa-angle-right"></i>
										</div>
									</div>     


									<div className="uix-controls-layout">
										<div className="uix-controls-layout__content">
											<div className="uix-controls-layout__content__inner">
												<div className="uix-t-r">
													{/*<!-- // -->*/}
													<h3 className="uix-typo--color-sub uix-typo--h6 uix-spacing--no uix-typo--style-uppercase">Right Title</h3>
													{/*<!-- // -->*/}
												</div>
												<div>
													{/*<!-- // -->*/}
													<Input ui="rounded fullwidth" label="Field Name" name="flexlayput-input-name-4" />  
													{/*<!-- // -->*/}
												</div>
											</div>
										</div>
										<div className="uix-controls-layout__icon">
											<i className="fa fa-angle-right"></i>
										</div>
									</div>     


									<div className="uix-controls-layout">
										<div className="uix-controls-layout__content">
											<div className="uix-controls-layout__content__inner">
												<div>
													{/*<!-- // -->*/}
													<h3 className="uix-typo--color-sub uix-typo--h6 uix-spacing--no uix-typo--style-uppercase">No Icon</h3>
													{/*<!-- // -->*/}
												</div>
												<div>
													{/*<!-- // -->*/}
													<Input ui="rounded fullwidth" label="Field Name" name="flexlayput-input-name-5" />   
													{/*<!-- // -->*/}
												</div>
											</div>
										</div>
									</div>     


									 <div className="uix-controls-layout">
										<div className="uix-controls-layout__content">
											<div className="uix-controls-layout__content__inner">
												<div>
													{/*<!-- // -->*/}
													<h3 className="uix-typo--color-sub uix-typo--h6 uix-spacing--no uix-typo--style-uppercase">No Icon</h3>
													{/*<!-- // -->*/}
												</div>
												<div>
													{/*<!-- // -->*/}
													<Input ui="rounded fullwidth" label="Field Name" name="flexlayput-input-name-6" />       
													{/*<!-- // -->*/}
												</div>
											</div>
										</div>
									</div>          


									 <div className="uix-controls-layout">
										<div className="uix-controls-layout__content">
											<div className="uix-controls-layout__content__inner">
												<div>
													{/*<!-- // -->*/}

													{/*<!-- // -->*/}
												</div>
												<div>
													{/*<!-- // -->*/}
													<button type="submit" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--primary">Submit Your Info</button>   
													{/*<!-- // -->*/}
												</div>
											</div>
										</div>
									</div>          



								</form>


						</div>     


					</div>
					{/*<!-- .row end -->*/}  


			</div>
			{/*<!-- .container end -->*/}



		</section>



		{/*<!-- API 
		====================================================== -->*/}
		<section>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">API</h3>
						<hr />


						<article className="uix-spacing--s" itemProp="text">
							<h4>Input</h4>
							<div>
								<pre>import {`{Input}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>type</code></td>
											<td>string</td>
											<td>text</td>
											<td>The type of input. Such as &lt;input type="text" name="name"&gt; gives a text box.</td>
										</tr>
										<tr>
											<td><code>theme</code></td>
											<td>string | <code>line</code></td>
											<td>-</td>
											<td>The display style of the control</td>
										</tr>
										<tr>
											<td><code>ui</code></td>
											<td>string</td>
											<td>-</td>
											<td>The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br /><strong>status:</strong><br /><code>error</code>, <code>success</code><br /><strong>corners:</strong><br /><code>pill</code>, <code>rounded</code><br /><strong>size:</strong><br /><code>fullwidth</code>, <code>small</code>, <code>medium</code>, <code>large</code></td>
										</tr>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value for this control</td>
										</tr>
										<tr>
											<td><code>label</code></td>
											<td>string | ReactNode</td>
											<td>-</td>
											<td>It is used to specify a label for an element of a form.</td>
										</tr>
										<tr>
											<td><code>units</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specify a unit identification string. Such as <code>em</code>, <code>px</code>, and so on.</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>maxLength</code></td>
											<td>number</td>
											<td>-</td>
											<td>Defines the maximum number of characters</td>
										</tr>
										<tr>
											<td><code>disabled</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Whether the input is disabled</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
										<tr>
											<td><code>iconLeft</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Set the left icon of this control</td>
										</tr>
										<tr>
											<td><code>iconRight</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Set the right icon of this control</td>
										</tr>
									</tbody>
								</table>

	
							</div>

							<p className="mb-5">It accepts all props which this control support.</p>

							{/*<!-- ++++++++ -->*/}

							<h4>Password Input</h4>
							<div>
								<pre>import {`{PasswordInput}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>theme</code></td>
											<td>string | <code>line</code></td>
											<td>-</td>
											<td>The display style of the control</td>
										</tr>
										<tr>
											<td><code>ui</code></td>
											<td>string</td>
											<td>-</td>
											<td>The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br /><strong>status:</strong><br /><code>error</code>, <code>success</code><br /><strong>corners:</strong><br /><code>pill</code>, <code>rounded</code><br /><strong>size:</strong><br /><code>fullwidth</code>, <code>small</code>, <code>medium</code>, <code>large</code></td>
										</tr>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value for this control</td>
										</tr>
										<tr>
											<td><code>label</code></td>
											<td>string | ReactNode</td>
											<td>-</td>
											<td>It is used to specify a label for an element of a form.</td>
										</tr>
										<tr>
											<td><code>units</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specify a unit identification string. Such as <code>em</code>, <code>px</code>, and so on.</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>maxLength</code></td>
											<td>number</td>
											<td>-</td>
											<td>Defines the maximum number of characters</td>
										</tr>
										<tr>
											<td><code>disabled</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Whether the input is disabled</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
										<tr>
											<td><code>iconLeft</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Set the left icon of this control</td>
										</tr>
										<tr>
											<td><code>iconRight</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Set the right icon of this control</td>
										</tr>
									</tbody>
								</table>
	
							</div>


							<p className="mb-5">It accepts all props which this control support.</p>

							{/*<!-- ++++++++ -->*/}

							<h4>Merge Input</h4>
							<div>
								<pre>import {`{MergeInput}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>type</code></td>
											<td>string</td>
											<td>text</td>
											<td>The type of input. Such as &lt;input type="text" name="name"&gt; gives a text box.</td>
										</tr>
										<tr>
											<td><code>btnType</code></td>
											<td>string</td>
											<td>button</td>
											<td>The type attribute specifies the type of button. Such as <code>submit</code>, <code>reset</code> or <code>button</code></td>
										</tr>
										<tr>
											<td><code>ui</code></td>
											<td>string</td>
											<td>-</td>
											<td>The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br /><strong>status:</strong><br /><code>error</code>, <code>success</code><br /><strong>corners:</strong><br /><code>pill</code>, <code>rounded</code></td>
										</tr>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value for this control</td>
										</tr>
										<tr>
											<td><code>label</code></td>
											<td>string | ReactNode</td>
											<td>-</td>
											<td>It is used to specify a label for an element of a form.</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>maxLength</code></td>
											<td>number</td>
											<td>-</td>
											<td>Defines the maximum number of characters</td>
										</tr>
										<tr>
											<td><code>disabled</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Whether the input is disabled</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
										<tr>
											<td><code>icon</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Set the icon of this control</td>
										</tr>
									</tbody>
								</table>
	
							</div>


							<p className="mb-5">It accepts all props which this control support.</p>

							{/*<!-- ++++++++ -->*/}


							<h4>Textarea</h4>
							<div>
								<pre>import {`{Textarea}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>theme</code></td>
											<td>string | <code>line</code></td>
											<td>-</td>
											<td>The display style of the control</td>
										</tr>
										<tr>
											<td><code>ui</code></td>
											<td>string</td>
											<td>-</td>
											<td>The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br /><strong>status:</strong><br /><code>error</code>, <code>success</code><br /><strong>corners:</strong><br /><code>pill</code>, <code>rounded</code><br /><strong>size:</strong><br /><code>fullwidth</code></td>
										</tr>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value for this control</td>
										</tr>
										<tr>
											<td><code>label</code></td>
											<td>string | ReactNode</td>
											<td>-</td>
											<td>It is used to specify a label for an element of a form.</td>
										</tr>
										<tr>
											<td><code>units</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specify a unit identification string. Such as <code>em</code>, <code>px</code>, and so on.</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>maxLength</code></td>
											<td>number</td>
											<td>-</td>
											<td>Defines the maximum number of characters</td>
										</tr>
										<tr>
											<td><code>cols</code></td>
											<td>number</td>
											<td>-</td>
											<td>The cols attribute specifies the visible width of a text area.</td>
										</tr>
										<tr>
											<td><code>rows</code></td>
											<td>number</td>
											<td>-</td>
											<td>The rows attribute specifies the visible height of a text area, in lines.</td>
										</tr>
										<tr>
											<td><code>disabled</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Whether the input is disabled</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
									</tbody>
								</table>

	
							</div>



							<p className="mb-5">It accepts all props which this control support.</p>

							{/*<!-- ++++++++ -->*/}


							<h4>Select</h4>
							<div>
								<pre>import {`{Select}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>options</code></td>
											<td>JSON Object Literals</td>
											<td>-</td>
											<td>Set the default value using JSON string format for menu of options, like this: <code className="text-wrap">{`{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`}</code></td>
										</tr>
										<tr>
											<td><code>theme</code></td>
											<td>string | <code>line</code></td>
											<td>-</td>
											<td>The display style of the control</td>
										</tr>
										<tr>
											<td><code>ui</code></td>
											<td>string</td>
											<td>-</td>
											<td>The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br /><strong>corners:</strong><br /><code>pill</code>, <code>rounded</code><br /><strong>size:</strong><br /><code>fullwidth</code></td>
										</tr>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value for this control</td>
										</tr>
										<tr>
											<td><code>label</code></td>
											<td>string | ReactNode</td>
											<td>-</td>
											<td>It is used to specify a label for an element of a form.</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>disabled</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Whether the input is disabled</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
									</tbody>
								</table>

							</div>


							<p className="mb-5">It accepts all props which this control support.</p>

							{/*<!-- ++++++++ -->*/}


							<h4>Custom Select</h4>
							<div>
								<pre>import {`{CustomSelect}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped mb-5">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>options</code></td>
											<td>JSON Object Literals</td>
											<td>-</td>
											<td>Set the default value using JSON string format for menu of options, like this: <code className="text-wrap">{`{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`}</code></td>
										</tr>
										<tr>
											<td><code>position</code></td>
											<td>string | <code>top</code></td>
											<td>-</td>
											<td>The position of the menu, the default is the bottom</td>
										</tr>
										<tr>
											<td><code>theme</code></td>
											<td>string | <code>line</code></td>
											<td>-</td>
											<td>The display style of the control</td>
										</tr>
										<tr>
											<td><code>ui</code></td>
											<td>string</td>
											<td>-</td>
											<td>The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br /><strong>corners:</strong><br /><code>pill</code>, <code>rounded</code><br /><strong>size:</strong><br /><code>fullwidth</code></td>
										</tr>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value for this control</td>
										</tr>
										<tr>
											<td><code>label</code></td>
											<td>string | ReactNode</td>
											<td>-</td>
											<td>It is used to specify a label for an element of a form.</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>disabled</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Whether the input is disabled</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
									</tbody>
								</table>
	
							</div>





							{/*<!-- ++++++++ -->*/}


							<h4>Checkbox</h4>
							<div>
								<pre>import {`{Checkbox}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>value</code></td>
											<td>string | boolean</td>
											<td>-</td>
											<td>Set a default value for this control. If the value is <code>true</code>, it is selected by default</td>
										</tr>
										<tr>
											<td><code>label</code></td>
											<td>string | ReactNode</td>
											<td>-</td>
											<td>It is used to specify a label for an element of a form.</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>disabled</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Whether the input is disabled</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
									</tbody>
								</table>
	
							</div>



							<p className="mb-5">It accepts all props which this control support.</p>

							{/*<!-- ++++++++ -->*/}


							<h4>Radio</h4>
							<div>
								<pre>import {`{Radio}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped mb-5">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>options</code></td>
											<td>JSON Object Literals</td>
											<td>-</td>
											<td>Set the default value using JSON string format for menu of options, like this: <code className="text-wrap">{`{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`}</code></td>
										</tr>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value for this control</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>disabled</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Whether the input is disabled</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
									</tbody>
								</table>
	
							</div>



							{/*<!-- ++++++++ -->*/}


							<h4>Multiple Select</h4>
							<div>
								<pre>import {`{MultiSelect}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped mb-5">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>options</code></td>
											<td>JSON Object Literals</td>
											<td>-</td>
											<td>Set the default value using JSON string format for menu of options, like this: <code className="text-wrap">{`{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`}</code></td>
										</tr>
										<tr>
											<td><code>theme</code></td>
											<td>string | <code>line</code></td>
											<td>-</td>
											<td>The display style of the control</td>
										</tr>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value for this control</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
									</tbody>
								</table>
	
							</div>



							{/*<!-- ++++++++ -->*/}

							<h4>Single Select</h4>
							<div>
								<pre>import {`{SingleSelect}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped mb-5">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>options</code></td>
											<td>JSON Object Literals</td>
											<td>-</td>
											<td>Set the default value using JSON string format for menu of options, like this: <code className="text-wrap">{`{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`}</code></td>
										</tr>
										<tr>
											<td><code>targetID</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specify multiple IDs that does not require the prefix <code>#</code>, use the item to control its display or not. Each ID is separated by a comma</td>
										</tr>
										<tr>
											<td><code>theme</code></td>
											<td>string | <code>line</code></td>
											<td>-</td>
											<td>The display style of the control</td>
										</tr>
										<tr>
											<td><code>ui</code></td>
											<td>string</td>
											<td>-</td>
											<td>The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br /><strong>corners:</strong><br /><code>pill</code>, <code>rounded</code></td>
										</tr>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value for this control</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
									</tbody>
								</table>

		
							</div>


							{/*<!-- ++++++++ -->*/}

							<h4>Date</h4>
							<div>
								<pre>import {`{Date}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>defaultNow</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>If the value is <code>true</code>, the current date and time are used</td>
										</tr>
										<tr>
											<td><code>time</code></td>
											<td><code>date</code> | <code>datetime-local</code></td>
											<td>-</td>
											<td>To create input fields that let the user enter a date, either with a textbox that validates the input or a special date picker interface.</td>
										</tr>
										<tr>
											<td><code>theme</code></td>
											<td>string | <code>line</code></td>
											<td>-</td>
											<td>The display style of the control</td>
										</tr>
										<tr>
											<td><code>ui</code></td>
											<td>string</td>
											<td>-</td>
											<td>The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br /><strong>corners:</strong><br /><code>pill</code>, <code>rounded</code><br /><strong>size:</strong><br /><code>fullwidth</code>, <code>small</code>, <code>medium</code>, <code>large</code></td>
										</tr>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value for this control</td>
										</tr>
										<tr>
											<td><code>label</code></td>
											<td>string | ReactNode</td>
											<td>-</td>
											<td>It is used to specify a label for an element of a form.</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>disabled</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Whether the input is disabled</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
									</tbody>
								</table>
	
							</div>


							<p className="mb-5">It accepts all props which this control support.</p>

							{/*<!-- ++++++++ -->*/}


							<h4>Number</h4>
							<div>
								<pre>import {`{Number}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>min</code></td>
											<td>number</td>
											<td>-</td>
											<td>The minimum value to accept</td>
										</tr>
										<tr>
											<td><code>max</code></td>
											<td>number</td>
											<td>-</td>
											<td>The maximum value to accept</td>
										</tr>
										<tr>
											<td><code>decimals</code></td>
											<td>number</td>
											<td>0</td>
											<td>Formats a number using fixed-point notation.</td>
										</tr>
										<tr>
											<td><code>btnStepMinus</code></td>
											<td>number</td>
											<td>1</td>
											<td>The minimum minus value after the button is triggered</td>
										</tr>
										<tr>
											<td><code>btnStepPlus</code></td>
											<td>number</td>
											<td>1</td>
											<td>The amount of plus value after the button is triggered</td>
										</tr>
										<tr>
											<td><code>step</code></td>
											<td>number</td>
											<td>0.01</td>
											<td>A stepping interval to use when using up and down arrows to adjust the value, as well as for validation</td>
										</tr>
										<tr>
											<td><code>theme</code></td>
											<td>string | <code>line</code></td>
											<td>-</td>
											<td>The display style of the control</td>
										</tr>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value for this control</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>disabled</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Whether the input is disabled</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
									</tbody>
								</table>

	
							</div>


							<p className="mb-5">It accepts all props which this control support.</p>

							{/*<!-- ++++++++ -->*/}


							<h4>Switch</h4>
							<div>
								<pre>import {`{Switch}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>targetID</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specify an ID that does not require the prefix <code>#</code>, use the switch to control its display or not</td>
										</tr>
										<tr>
											<td><code>ui</code></td>
											<td>string</td>
											<td>-</td>
											<td>The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br /><strong>corners:</strong><br /><code>pill</code>, <code>rounded</code></td>
										</tr>
										<tr>
											<td><code>textOff</code></td>
											<td>string</td>
											<td>off</td>
											<td>The content to be shown when the state is unchecked</td>
										</tr>
										<tr>
											<td><code>textOn</code></td>
											<td>string</td>
											<td>on</td>
											<td>The content to be shown when the state is checked</td>
										</tr>
										<tr>
											<td><code>value</code></td>
											<td>string | boolean</td>
											<td>-</td>
											<td>Set a default value for this control. If the value is <code>true</code>, it is selected by default</td>
										</tr>
										<tr>
											<td><code>label</code></td>
											<td>string | ReactNode</td>
											<td>-</td>
											<td>It is used to specify a label for an element of a form.</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>disabled</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Whether the input is disabled</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
									</tbody>
								</table>

		
							</div>


							<p className="mb-5">It accepts all props which this control support.</p>

							{/*<!-- ++++++++ -->*/}


							<h4>Dynamic Fields</h4>
							<div>
								<pre>import {`{DynamicFields}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped mb-5">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value for this control</td>
										</tr>
										<tr>
											<td><code>removeLabel</code></td>
											<td>string</td>
											<td>-</td>
											<td>The label of the button to delete current item, if it is not set, only the X icon will be included</td>
										</tr>
										<tr>
											<td><code>addLabel</code></td>
											<td>string</td>
											<td>Add new</td>
											<td>The label of the button to add a new item</td>
										</tr>
										<tr>
											<td><code>tempHtmlString</code></td>
											<td>string | ReactNode</td>
											<td>-</td>
											<td>Control group are dynamically added after the button is triggered. Like this: <br /><code className="text-wrap">&lt;&gt;&lt;Input placeholder="Title" name="your-title[]" /&gt; &lt;Input ui="medium" placeholder="URL" name="your-url[]" /&gt;&lt;/&gt;</code></td>
										</tr>
										<tr>
											<td><code>maxFields</code></td>
											<td>number</td>
											<td>10</td>
											<td>Maximum number of control group allowed to be added</td>
										</tr>
									</tbody>
								</table>

	
							</div>


							{/*<!-- ++++++++ -->*/}


							<h4>File</h4>
							<div>
								<pre>import {`{File}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value for this control</td>
										</tr>
										<tr>
											<td><code>label</code></td>
											<td>string | ReactNode</td>
											<td>-</td>
											<td>It is used to specify a label for an element of a form.</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
									</tbody>
								</table>

	
							</div>

							<p className="mb-5">It accepts all props which this control support.</p>

							{/*<!-- ++++++++ -->*/}


							<h4>File Field</h4>
							<div>
								<pre>import {`{FileField}`} from '@uixkit.react/components/Form/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value for this control</td>
										</tr>
										<tr>
											<td><code>label</code></td>
											<td>string | ReactNode</td>
											<td>-</td>
											<td>It is used to specify a label for an element of a form.</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>required</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>When present, it specifies that a field must be filled out before submitting the form.</td>
										</tr>
									</tbody>
								</table>
	
							</div>


							<p className="mb-5">It accepts all props which this control support.</p>

							{/*<!-- ++++++++ -->*/}




						</article>


					</div>
				</div>
				{/*
			<!-- .row end -->*/}


			</div>
			{/*
		<!-- .container end -->*/}
		</section>

			
		
      </>
    );
};