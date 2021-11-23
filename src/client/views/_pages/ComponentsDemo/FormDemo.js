import React from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import {
	Input,
	PasswordInput,
	MergeInput,
	TagInput,
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
} from '@poemkit/components/Form/index.tsx';


//Create or Remove Sidebar Menu
import { SidebarMenu } from '@poemkit/pages/ComponentsDemo/_SidebarMenu.js';

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
						<h1 className="poemkit-typo--h2">
							Form 
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/Form" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
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
			<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s">
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
							value='["title 1","https://example.com/pa1"],["title 2","https://uiux.cc"],["title 3","https://youtube.com"]'
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s">
				<div className="container poemkit-t-c">


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
			<section>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="app-header-title">Tag Input</h3>
							<hr />


						</div>
					</div>
					{/*<!-- .row end -->*/}

				</div>
				{/*<!-- .container end -->*/}

			</section>





		   {/*<!-- Content 
			====================================================== -->*/}
			<section className="poemkit-spacing--s">
				<div className="container">

						<div className="row">
							<div className="col-12">

								<TagInput ui="rounded" placeholder="Add tag..." name="tagInput-name-1" />
								<hr />

								<TagInput ui="rounded" placeholder="Add tag..." name="tagInput-name-2" maxTags={5} value="tag1,tag2,tag3"/>
							

								
							</div>     


						</div>
						{/*<!-- .row end -->*/}  


				</div>
				{/*<!-- .container end -->*/}



			</section>




		   {/*<!-- Content 
			====================================================== -->*/}
			<section className="poemkit-spacing--s poemkit-spacing--no-top">
				<div className="container">


					   <div className="row">
							<div className="col-12">
								<p className="poemkit-t-l">
								  <button type="submit" className="poemkit-btn poemkit-btn__border--thin poemkit-btn__size--s poemkit-btn__bg--primary">Submit Your Info</button>
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
		<section className="poemkit-spacing--s">
			<div className="container">


					<div className="row">
						<div className="col-12">



								 <form method="post" action="#" id="app-my-form">


									<div className="poemkit-controls-layout">
										<div className="poemkit-controls-layout__content">
											<div className="poemkit-controls-layout__content__inner">
												<div>
													{/*<!-- // -->*/}
													<h3 className="poemkit-typo--color-sub poemkit-typo--h6 poemkit-spacing--no poemkit-typo--style-uppercase">Left Title</h3>
													{/*<!-- // -->*/}
												</div>
												<div>
													{/*<!-- // -->*/}   
                                                    <Input ui="rounded fullwidth" label="Field Name" name="flexlayput-input-name-1" />
													{/*<!-- // -->*/}
												</div>
											</div>
										</div>
										<div className="poemkit-controls-layout__icon">
											<i className="fa fa-angle-right"></i>
										</div>
									</div>     


									 <div className="poemkit-controls-layout">
										<div className="poemkit-controls-layout__content">
											<div className="poemkit-controls-layout__content__inner">
												<div>
													{/*<!-- // -->*/}
													<h3 className="poemkit-typo--color-sub poemkit-typo--h6 poemkit-spacing--no poemkit-typo--style-uppercase">Left Title</h3>
													{/*<!-- // -->*/}
												</div>
												<div>
													{/*<!-- // -->*/}
													<Input ui="rounded fullwidth" label="Field Name" name="flexlayput-input-name-2" />
													{/*<!-- // -->*/}
												</div>
											</div>
										</div>
										<div className="poemkit-controls-layout__icon">
											<i className="fa fa-angle-right"></i>
										</div>
									</div>     

									<div className="poemkit-controls-layout">
										<div className="poemkit-controls-layout__content">
											<div className="poemkit-controls-layout__content__inner">
												<div className="poemkit-t-r">
													{/*<!-- // -->*/}
													<h3 className="poemkit-typo--color-sub poemkit-typo--h6 poemkit-spacing--no poemkit-typo--style-uppercase">Right Title</h3>
													{/*<!-- // -->*/}
												</div>
												<div>
													{/*<!-- // -->*/}
													<Input ui="rounded fullwidth" label="Field Name" name="flexlayput-input-name-3" />     
													{/*<!-- // -->*/}
												</div>
											</div>
										</div>
										<div className="poemkit-controls-layout__icon">
											<i className="fa fa-angle-right"></i>
										</div>
									</div>     


									<div className="poemkit-controls-layout">
										<div className="poemkit-controls-layout__content">
											<div className="poemkit-controls-layout__content__inner">
												<div className="poemkit-t-r">
													{/*<!-- // -->*/}
													<h3 className="poemkit-typo--color-sub poemkit-typo--h6 poemkit-spacing--no poemkit-typo--style-uppercase">Right Title</h3>
													{/*<!-- // -->*/}
												</div>
												<div>
													{/*<!-- // -->*/}
													<Input ui="rounded fullwidth" label="Field Name" name="flexlayput-input-name-4" />  
													{/*<!-- // -->*/}
												</div>
											</div>
										</div>
										<div className="poemkit-controls-layout__icon">
											<i className="fa fa-angle-right"></i>
										</div>
									</div>     


									<div className="poemkit-controls-layout">
										<div className="poemkit-controls-layout__content">
											<div className="poemkit-controls-layout__content__inner">
												<div>
													{/*<!-- // -->*/}
													<h3 className="poemkit-typo--color-sub poemkit-typo--h6 poemkit-spacing--no poemkit-typo--style-uppercase">No Icon</h3>
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


									 <div className="poemkit-controls-layout">
										<div className="poemkit-controls-layout__content">
											<div className="poemkit-controls-layout__content__inner">
												<div>
													{/*<!-- // -->*/}
													<h3 className="poemkit-typo--color-sub poemkit-typo--h6 poemkit-spacing--no poemkit-typo--style-uppercase">No Icon</h3>
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


									 <div className="poemkit-controls-layout">
										<div className="poemkit-controls-layout__content">
											<div className="poemkit-controls-layout__content__inner">
												<div>
													{/*<!-- // -->*/}

													{/*<!-- // -->*/}
												</div>
												<div>
													{/*<!-- // -->*/}
													<button type="submit" className="poemkit-btn poemkit-btn__border--thin poemkit-btn__size--s poemkit-btn__bg--primary">Submit Your Info</button>   
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


						<article className="poemkit-spacing--s" itemProp="text">
							<h4>Input</h4>
							<div>
								<pre>import {`{Input}`} from '@poemkit/components/Form/index.tsx';</pre>
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
											<td><code>placeholder</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specifies a short hint that describes.</td>
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
								<pre>import {`{PasswordInput}`} from '@poemkit/components/Form/index.tsx';</pre>
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
											<td><code>placeholder</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specifies a short hint that describes.</td>
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
								<pre>import {`{MergeInput}`} from '@poemkit/components/Form/index.tsx';</pre>
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
											<td><code>placeholder</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specifies a short hint that describes.</td>
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


							<h4>Tag Input</h4>
							<div>
								<pre>import {`{TagInput}`} from '@poemkit/components/Form/index.tsx';</pre>
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
											<td><code>maxTags</code></td>
											<td>number</td>
											<td>10</td>
											<td>Maximum number of tags that can be added.</td>
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
											<td>Set a default value for this control. It accepts multiple values, separated by commas. like this: <code className="text-wrap">{`tag1,tag2,tag3`}</code></td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>placeholder</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specifies a short hint that describes.</td>
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



							<h4>Textarea</h4>
							<div>
								<pre>import {`{Textarea}`} from '@poemkit/components/Form/index.tsx';</pre>
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
											<td><code>placeholder</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specifies a short hint that describes.</td>
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
								<pre>import {`{Select}`} from '@poemkit/components/Form/index.tsx';</pre>
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
											<td><strong>(Required)</strong> Set the default value using JSON string format for menu of options, like this: <code className="text-wrap">{`{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`}</code></td>
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
										<tr>
											<td><code>optionChangeCallback</code></td>
											<td>function | null</td>
											<td>-</td>
											<td>This function is called whenever the data is updated. Exposes the JSON format data about the option as an argument. You can use it like this: <br /><code className="text-wrap">{`(res) => console.log(res.value)`}</code></td>
										</tr>
									</tbody>
								</table>

							</div>


							<p className="mb-5">It accepts all props which this control support.</p>

							{/*<!-- ++++++++ -->*/}


							<h4>Custom Select</h4>
							<div>
								<pre>import {`{CustomSelect}`} from '@poemkit/components/Form/index.tsx';</pre>
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
											<td><strong>(Required)</strong> Set the default value using JSON string format for menu of options, like this: <code className="text-wrap">{`{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`}</code></td>
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
										<tr>
											<td><code>optionChangeCallback</code></td>
											<td>function | null</td>
											<td>-</td>
											<td>This function is called whenever the data is updated. Exposes the JSON format data about the option as an argument. You can use it like this: <br /><code className="text-wrap">{`(res) => console.log(res.value)`}</code></td>
										</tr>
									</tbody>
								</table>
	
							</div>





							{/*<!-- ++++++++ -->*/}


							<h4>Checkbox</h4>
							<div>
								<pre>import {`{Checkbox}`} from '@poemkit/components/Form/index.tsx';</pre>
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
								<pre>import {`{Radio}`} from '@poemkit/components/Form/index.tsx';</pre>
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
											<td><strong>(Required)</strong> Set the default value using JSON string format for menu of options, like this: <code className="text-wrap">{`{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`}</code></td>
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
								<pre>import {`{MultiSelect}`} from '@poemkit/components/Form/index.tsx';</pre>
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
											<td><strong>(Required)</strong> Set the default value using JSON string format for menu of options, like this: <code className="text-wrap">{`{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`}</code></td>
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
											<td>Set a default value for this control.  It accepts multiple values, separated by commas. like this: <code className="text-wrap">{`value-1,value-2`}</code></td>
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
								<pre>import {`{SingleSelect}`} from '@poemkit/components/Form/index.tsx';</pre>
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
											<td><strong>(Required)</strong> Set the default value using JSON string format for menu of options, like this: <code className="text-wrap">{`{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`}</code></td>
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
								<pre>import {`{Date}`} from '@poemkit/components/Form/index.tsx';</pre>
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
								<pre>import {`{Number}`} from '@poemkit/components/Form/index.tsx';</pre>
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
								<pre>import {`{Switch}`} from '@poemkit/components/Form/index.tsx';</pre>
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
								<pre>import {`{DynamicFields}`} from '@poemkit/components/Form/index.tsx';</pre>
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
								<pre>import {`{File}`} from '@poemkit/components/Form/index.tsx';</pre>
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
								<pre>import {`{FileField}`} from '@poemkit/components/Form/index.tsx';</pre>
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
				{/*<!-- .row end -->*/}


			</div>
			{/*<!-- .container end -->*/}
		</section>

			
		
      </>
    );
};