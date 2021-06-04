# @uixkit.react/components/Form

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Form)

## Version

=> 0.0.1

## Examples

```js
import React from 'react';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
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
} from '@uixkit.react/components/Form/index.js';



			


export default () => {
	
   // Equivalent to componentDidMount and componentDidUpdate:
   React.useEffect(() => {
		__( document ).ready( function() {

			__( '#input-name-1' ).val(  );  //form control: `<Input />`
			__( '#select-name-1' ).val( 'value-3' ); //form control: `<Select />`
			__( '#switch-name-1' ).val( true );   //form control: `<Switch />`
			__( '#checkbox-name-1' ).val( true );  //form control: `<Checkbox />`
			__('input[name="radio-name-1"]').val( 'value-3' ); //form control: `<Radio />`
			
		});       
   });
		
	
	
  return (
    <>
	  
	    <h3>Input</h3>
		{/* ================================================================== */}      
	  
		Input Line Style (theme="line"):
		<Input theme="line" label="Title" name="input-name-linestyle" />
		
	  
	    Input 1:
		<Input label="Input Normal" name="input-name-1"/> (Only label and name attributes)
		

		Input 2:
		<Input label="Input Normal" name="input-name-2" id="input-name-2" maxLength="50" value="0" />
		

		Input 3:
		<Input label="Disabled" name="input-name-3" disabled />
		<Input label="Read Only" name="input-name-3_2" readOnly />
		<Input label="Required" name="input-name-3_3" required />
		

		Input 4:
		<Input ui="fullwidth" label="Fullwidth" name="input-name-4" />
		


		Input 5:
		<Input ui="error" label="Error" name="input-name-5" value="Error" />
		

		Input 6:
		<Input ui="success" label="Success" name="input-name-6" value="Success" />
		

		Input 7:
		<Input ui="pill" label="Pill" name="input-name-7" />
		

		Input 8:
		<Input ui="rounded" label="Rounded" name="input-name-8" />
		

		Input 9:
		<Input ui="small" units="unit" label="Small Size" name="input-name-9" />
		


		Input 10:
		<Input ui="medium" units="em" label="Medium Size" name="input-name-10" />
		


		Input 11:
		<Input ui="large" units="custom string" label="Large Size" name="input-name-11" />
		

		Input 12:
		<Input label="Icon Left" name="input-name-icon-1" iconLeft={<i className="fa fa-user-o" aria-hidden="true"></i>} />\
		<Input label="Icon Right" name="input-name-icon-2" iconRight={<i className="fa fa-feed" aria-hidden="true"></i>} />				
		

		Mixed some UI attributes (ui="fullwidth pill success"):
		<Input ui="fullwidth pill success" label="Mixed some UI attributes" name="input-name-mixed" />	

		All UI attributes (ui="fullwidth small medium large pill rounded success error"):
		<Input ui="fullwidth small medium large pill rounded success error" label="All UI attributes" name="input-name-all" />


	  
		<h3>Textarea</h3>
		{/* ================================================================== */}      

		Textarea Line Style (theme="line"):	
		<Textarea theme="line" label="Title" name="textarea-name-linestyle" />
		


		Textarea 1:	
		<Textarea rows="5" cols="30" label="Title" name="textarea-name-1" />
		


		Textarea 2:
		<Textarea label="Disabled" name="textarea-name-2" disabled />
		&nbsp;&nbsp;
		<Textarea label="Read Only" name="textarea-name-2_2" readOnly />
		&nbsp;&nbsp;
		<Textarea label="Required" name="textarea-name-2_3" required />
		

		Textarea 3:
		<Textarea ui="fullwidth" label="Fullwidth" name="textarea-name-3" />
		


		Textarea 4:
		<Textarea ui="error" label="Error" name="textarea-name-4" value="Error" />
		

		Textarea 5:
		<Textarea ui="success" label="Success" name="textarea-name-5" value="Success" />
		

		Textarea 6:
		<Textarea ui="pill" label="Pill" name="textarea-name-6" />
		

		Textarea 7:
		<Textarea ui="rounded" label="Rounded" name="textarea-name-7" />
		

		All UI attributes (ui="fullwidth pill rounded success error"):
		<Textarea ui="fullwidth pill rounded success error" label="All UI attributes" name="textarea-name-all" />															
																	
																	
																	

		<h3>Select (normal)</h3>
		{/* ================================================================== */}      

		<Select 
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3"
			}'
			theme="line"
			name="select-name-line" />
										

		<Select 
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3",
				"Option 4":"value-4"
			}'
			name="select-name-1" 
			disabled />	



		<Select 
			value="value-2"
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3"
			}'
			ui="rounded"
			name="select-name-2" />
	
				
				
		<Select 
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3"
			}'
			ui="pill"
			name="select-name-3" />


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
																	

																	
																	
		<h3>Custom Select</h3>
		{/* ================================================================== */}      

		<CustomSelect 
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3"
			}'
			theme="line"
			name="custom-select-name-line" />	

			
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
		



		<CustomSelect 
			value="value-2"
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3"
			}'
			label="Custom Select"   
			ui="rounded"
			name="custom-select-name-2" />
		

		<CustomSelect 
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3"
			}'
			label="Custom Select" 		  
			ui="pill"
			name="custom-select-name-3" />
		

		<CustomSelect 
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3"
			}'
			label="Top Position"
			position="top"
			name="custom-select-name-4" />
		


		<CustomSelect 
			options='{
				"Custom Select Fullwidth":"",
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3"
			}'
			ui="fullwidth"
			name="custom-select-name-5" />
				
			
			
																	
																	
		<h3>Multiple Select</h3>
		{/* ================================================================== */}   

		<MultiSelect 
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3"
			}'
			theme="line"
			name="multiSelect-name-line" />


		<MultiSelect 
			value="value-2,value-3"
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3",
				"Option 4":"value-4"
			}'	  
			name="multiSelect-name-1" />	
									
																	
																	
		<h3>Single Select</h3>
		{/* ================================================================== */}      

		<SingleSelect 
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3"
			}'
			theme="line"
			name="singleSelect-name-line" />
		

		<SingleSelect 
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3",
				"Option 4":"value-4"
			}'	  
			ui="rounded"
			name="singleSelect-name-1" />	
		


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




																	
																	
		<h3>Switch</h3>
		{/* ================================================================== */}      
		
		<Switch textOff="off" textOn="on" name="switch-name-1" />
		

		<Switch textOff="off" textOn="on" name="switch-name-2" value="true" />
		

		<Switch textOff="off" textOn="on" name="switch-name-3" disabled />
		

		<Switch ui="pill" textOff="off" textOn="on" name="switch-name-4" />
		

		<Switch ui="rounded" textOff="off" textOn="on" name="switch-name-5" />
			

		<Switch targetID="my-toggle-name-1" textOff="hide" textOn="show" name="switch-name-6" />
		<div id="my-toggle-name-1" style={{padding:"10px",borderRadius:"3px",background:"#f7f7f7",border:"1px solid #efefef",margin:"5px 0 15px 0",width:"300px"}}>content here...</div>
			
			
																
																	
		<h3>Radio</h3>
		{/* ================================================================== */}      

		<Radio 
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3",
				"Option 4":"value-4"
			}'	  
			name="radio-name-1" 
			disabled />	
	


		<Radio 
			value="value-2"
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3"
			}'
			name="radio-name-2" />
		



		<Radio 
			options='{
				"Option 1":"value-1",
				"Option 2":"value-2",
				"Option 3":"value-3"
			}'
			name="radio-name-3"
			required />
		

										
										
																	

		<h3>Date</h3>
		{/* ================================================================== */}      

		<Date theme="line" ui="large" label="Date" name="date-name-1" autoComplete="off" min="1950-01-01" max="2021-12-31"  />

		<Date ui="small" label="Date" name="date-name-2" autoComplete="off" min="1950-01-01" max="2021-12-31" value="2018-07-22" />

		<Date ui="medium" label="Date" name="date-name-3" autoComplete="off" min="1950-01-01" max="2021-12-31" defaultNow="true" />

		<Date ui="large" label="Date" name="date-name-4" autoComplete="off" time="true" min="1950-01-01T08:30" max="2017-06-30T16:30" value="" />

		<Date ui="large" label="Date" name="date-name-5" autoComplete="off" time="true" min="1950-01-01T08:30" max="2017-06-30T16:30" disabled />	

		<Date ui="fullwidth" label="Date" name="date-name-6" autoComplete="off" time="true" min="1950-01-01T08:30" max="2017-06-30T16:30" defaultNow="true" />

		<Date ui="fullwidth rounded" label="Date" name="date-name-7" autoComplete="off" time="true" min="1950-01-01T08:30" max="2017-06-30T16:30" />

		<Date ui="fullwidth pill" label="Date" name="date-name-6" autoComplete="off" time="true" min="1950-01-01T08:30" max="2017-06-30T16:30" />

																	
																	
																	
		<h3>Checkbox</h3>
		{/* ================================================================== */}      
					
		<Checkbox label="Checkbox" name="checkbox-name-1" />

		<Checkbox label="Checkbox" name="checkbox-name-2" value="true" />

		<Checkbox label="Checkbox" name="checkbox-name-3" disabled />

																	
																	
		<h3>Number</h3>
		{/* ================================================================== */}      

		<Number theme="line" step="0.01" name="number-name-line" btnStepMinus="1" btnStepPlus="1" decimals="0" />

		<Number name="number-name-2" value="5" btnStepMinus="15" btnStepPlus="15" decimals="2" min="0" max="200" />

		<Number name="number-name-3" value="1" btnStepMinus="15" btnStepPlus="15" decimals="2" disabled/>		
																	
																	
																	
		<h3>Dynamic Fields</h3>
		{/* ================================================================== */}      

		<DynamicFields maxFields="10" addLabel="Add new" removeLabel="" tempHtmlString={
			<>
				<Input placeholder="Title" name="appnotice-title[]" />
				&nbsp;&nbsp;
				<Input ui="medium" placeholder="URL" name="appnotice-url[]" />
			</>
		}  />
									
									
																	
																	
		<h3>File</h3>
		{/* ================================================================== */}      

        <File label="Upload File" name="file-name-1" />

																	
																	
																	
		<h3>File Field</h3>
		{/* ================================================================== */}      

				
					

    </>
  );
}

```