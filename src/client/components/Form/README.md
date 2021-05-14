# @uixkit.react/components/Form

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Form)

## Version

=> 0.0.1

## Examples

```js
import React from 'react';
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
  return (
    <>
	  
	    <h3>Input</h3>
		<hr />
	  
	    Text 1:
		<Input label="Input Normal" name="input-name-1"/> (Only <code>label</code> and <code>name</code> attributes)
		

		Text 2:
		<Input label="Input Normal" name="input-name-2" id="input-name-2" maxLength="50" value="0" />
		

		Text 3:
		<Input label="Disabled" name="input-name-3" disabled />
		<Input label="Read Only" name="input-name-3_2" readOnly />
		<Input label="Required" name="input-name-3_3" required />
		

		Text 4:
		<Input ui="fullwidth" label="Fullwidth" name="input-name-4" />
		


		Text 5:
		<Input ui="error" label="Error" name="input-name-5" value="Error" />
		

		Text 6:
		<Input ui="success" label="Success" name="input-name-6" value="Success" />
		

		Text 7:
		<Input ui="pill" label="Pill" name="input-name-7" />
		

		Text 8:
		<Input ui="rounded" label="Rounded" name="input-name-8" />
		

		Text 9:
		<Input ui="small" units="unit" label="Small Size" name="input-name-9" />
		


		Text 10:
		<Input ui="medium" units="em" label="Medium Size" name="input-name-10" />
		


		Text 11:
		<Input ui="large" units="custom string" label="Large Size" name="input-name-11" />
		

		Text 12:
		<Input label="Icon Left" name="input-name-icon-1" iconLeft={<i className="fa fa-user-o" aria-hidden="true"></i>} />\
		<Input label="Icon Right" name="input-name-icon-2" iconRight={<i className="fa fa-feed" aria-hidden="true"></i>} />				
		

		Mixed some UI attributes (<code>ui="fullwidth pill success"</code>):
		<Input ui="fullwidth pill success" label="Mixed some UI attributes" name="input-name-mixed" />	

		All UI attributes (<code>ui="fullwidth small medium large pill rounded error success"</code>):
		<Input ui="fullwidth small medium large pill rounded error success" label="All UI attributes" name="input-name-all" />


	  
		<h3>Textarea</h3>
		<hr />

																	
																	

		<h3>Select (normal)</h3>
		<hr />

																	
																	
		<h3>Custom Select</h3>
		<hr />

																	
																	
																	
		<h3>Multiple Select</h3>
		<hr />

																	
																	
																	
		<h3>Single Select</h3>
		<hr />


																	
																	
		<h3>Switch</h3>
		<hr />

																	
																	
																	
		<h3>Radio</h3>
		<hr />


																	

		<h3>Date</h3>
		<hr />

																	
																	
																	
		<h3>Checkbox</h3>
		<hr />


																	
																	
																	
		<h3>Number</h3>
		<hr />


																	
																	
																	
		<h3>Dynamic Fields</h3>
		<hr />


																	
																	
		<h3>File</h3>
		<hr />


																	
																	
																	
		<h3>File Field</h3>
		<hr />

				
					

    </>
  );
}

```