# @/components/Form

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/Form)

## Version

=> 0.0.2 (November 22, 2021)


## API

### Input
```js
import { Input } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | string | text | The type of input. Such as \<input type="text" name="name"\> gives a text box. |
| `theme` | string \| `line` | - | The display style of the control |
| `ui` | string | - | The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br />**status:**<br />`error`, `success`<br />**corners:**<br />`pill`, `rounded`<br />**size:**<br />`fullwidth`, `small`, `medium`, `large` |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `units` | string | - | Specify a unit identification string. Such as `em`, `px`, and so on. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `maxLength` | number | - | Defines the maximum number of characters |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `iconLeft` | ReactNode  | - | Set the left icon of this control |
| `iconRight` | ReactNode  | - | Set the right icon of this control |


It accepts all props which this control support.


### Password Input
```js
import { PasswordInput } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `theme` | string \| `line` | - | The display style of the control |
| `ui` | string | - | The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br />**status:**<br />`error`, `success`<br />**corners:**<br />`pill`, `rounded`<br />**size:**<br />`fullwidth`, `small`, `medium`, `large` |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `units` | string | - | Specify a unit identification string. Such as `em`, `px`, and so on. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `maxLength` | number | - | Defines the maximum number of characters |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `iconLeft` | ReactNode  | - | Set the left icon of this control |
| `iconRight` | ReactNode  | - | Set the right icon of this control |

It accepts all props which this control support.




### Merge Input
```js
import { MergeInput } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | string | text | The type of input. Such as \<input type="text" name="name"\> gives a text box. |
| `btnType` | string | button | The type attribute specifies the type of button. Such as `submit`, `reset` or `button` |
| `ui` | string | - | The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br />**status:**<br />`error`, `success`<br />**corners:**<br />`pill`, `rounded` |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `maxLength` | number | - | Defines the maximum number of characters |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `icon` | ReactNode  | - | Set the icon of this control |


It accepts all props which this control support.



### Tag Input
```js
import { TagInput } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `maxTags` | number | 10 | Maximum number of tags that can be added. |
| `ui` | string | - | The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br />**corners:**<br />`pill`, `rounded`<br />**size:**<br />`fullwidth` |
| `value` | string | - | Set a default value for this control. It accepts multiple values, separated by commas. like this: `tag1,tag2,tag3` |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |


### Textarea
```js
import { Textarea } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `theme` | string \| `line` | - | The display style of the control |
| `ui` | string | - | The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br />**status:**<br />`error`, `success`<br />**corners:**<br />`pill`, `rounded`<br />**size:**<br />`fullwidth` |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `units` | string | - | Specify a unit identification string. Such as `em`, `px`, and so on. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `maxLength` | number | - | Defines the maximum number of characters |
| `cols` | number  | - | The cols attribute specifies the visible width of a text area. |
| `rows` | number  | - | The rows attribute specifies the visible height of a text area, in lines. |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |


It accepts all props which this control support.



### Select
```js
import { Select } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | JSON Object Literals | - | <strong>(Required)</strong> Set the default value using JSON string format for menu of options, like this: `{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`|
| `theme` | string \| `line` | - | The display style of the control |
| `ui` | string | - | The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br />**corners:**<br />`pill`, `rounded`<br />**size:**<br />`fullwidth` |
| `value` | string | - | Set a default value for this control. |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `optionChangeCallback` | function \| null  | - | This function is called whenever the data is updated. Exposes the JSON format data about the option as an argument. You can use it like this: `(res) => console.log(res.value)` |


It accepts all props which this control support.




### Custom Select
```js
import { CustomSelect } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | JSON Object Literals | - | <strong>(Required)</strong> Set the default value using JSON string format for menu of options, like this: `{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`|
| `position` | string \| `top` | - | The position of the menu, the default is the bottom |
| `theme` | string \| `line` | - | The display style of the control |
| `ui` | string | - | The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br />**corners:**<br />`pill`, `rounded`<br />**size:**<br />`fullwidth` |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `optionChangeCallback` | function \| null  | - | This function is called whenever the data is updated. Exposes the JSON format data about the option as an argument. You can use it like this: `(res) => console.log(res.value)` |



### Checkbox
```js
import { Checkbox } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | string \| boolean | - | Set a default value for this control. If the value is `true`, it is selected by default  |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |


It accepts all props which this control support.




### Radio
```js
import { Radio } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | JSON Object Literals | - | <strong>(Required)</strong> Set the default value using JSON string format for menu of options, like this: `{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`|
| `value` | string | - | Set a default value for this control |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |


### Multiple Select
```js
import { MultiSelect } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | JSON Object Literals | - | <strong>(Required)</strong> Set the default value using JSON string format for menu of options, like this: `{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`|
| `theme` | string \| `line` | - | The display style of the control |
| `value` | string | - | Set a default value for this control. It accepts multiple values, separated by commas. like this: `value-1,value-2` |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |



### Single Select
```js
import { SingleSelect } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | JSON Object Literals | - | <strong>(Required)</strong> Set the default value using JSON string format for menu of options, like this: `{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`|
| `targetID` | string | - | Specify multiple IDs that does not require the prefix `#`, use the item to control its display or not. Each ID is separated by a comma |
| `theme` | string \| `line` | - | The display style of the control |
| `ui` | string | - | The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br />**corners:**<br />`pill`, `rounded` |
| `value` | string | - | Set a default value for this control |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |


### Date
```js
import { Date } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultNow` | boolean | false | If the value is `true`, the current date and time are used |
| `time` | `date` \| `datetime-local` | - | To create input fields that let the user enter a date, either with a textbox that validates the input or a special date picker interface. |
| `theme` | string \| `line` | - | The display style of the control |
| `ui` | string | - | The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br />**corners:**<br />`pill`, `rounded`<br />**size:**<br />`fullwidth`, `small`, `medium`, `large` |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |

It accepts all props which this control support.




### Number
```js
import { Number } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `min` | number | - | The minimum value to accept |
| `max` | number | - | The maximum value to accept |
| `decimals` | number | 0 | Formats a number using fixed-point notation. |
| `btnStepMinus` | number | 1 | The minimum minus value after the button is triggered |
| `btnStepPlus` | number | 1 | The amount of plus value after the button is triggered |
| `step` | number | 0.01 | A stepping interval to use when using up and down arrows to adjust the value, as well as for validation |
| `theme` | string \| `line` | - | The display style of the control |
| `value` | string | - | Set a default value for this control |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |


It accepts all props which this control support.




### Switch
```js
import { Switch } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `targetID` | string | - | Specify an ID that does not require the prefix `#`, use the switch to control its display or not |
| `ui` | string | - | The overlay style of the control. Can be used at the same time, separated by spaces. The optional values are:<br />**corners:**<br />`pill`, `rounded` |
| `textOff` | string | off | The content to be shown when the state is unchecked |
| `textOn` | string | on | The content to be shown when the state is checked |
| `value` | string \| boolean | - | Set a default value for this control. If the value is `true`, it is selected by default  |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |


It accepts all props which this control support.



### Dynamic Fields
```js
import { DynamicFields } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | string | - | Set a default value for this control |
| `removeLabel` | string | - | The label of the button to delete current item, if it is not set, only the X icon will be included |
| `addLabel` | string | Add new | The label of the button to add a new item |
| `tempHtmlString` | string \| ReactNode | - | Control group are dynamically added after the button is triggered. Like this: <br />`<><Input placeholder="Title" name="your-title[]" /> <Input ui="medium" placeholder="URL" name="your-url[]" /></>` |
| `maxFields` | number | 10 | Maximum number of control group allowed to be added |


### File
```js
import { File } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |

It accepts all props which this control support.


### File Field
```js
import { FileField } from '@/components/Form/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |

It accepts all props which this control support.


## Examples

```js
import React from 'react';
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
} from '@/components/Form/index.tsx';



export default () => {

	
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


																	
	    <h3>Password Input</h3>
		{/* ================================================================== */}      
	  
		Password Input Line Style (theme="line"):
		<PasswordInput theme="line" label="Title" name="passwordinput-name-linestyle" />
		
	  
	    Password Input 1:
		<PasswordInput label="Input Normal" name="passwordinput-name-1"/> (Only label and name attributes)
		

		Password Input 2:
		<PasswordInput label="Input Normal" name="passwordinput-name-2" id="input-name-2" maxLength="50" value="0" />
		

		Password Input 3:
		<PasswordInput label="Disabled" name="passwordinput-name-3" disabled />
		<PasswordInput label="Read Only" name="passwordinput-name-3_2" readOnly />
		<PasswordInput label="Required" name="passwordinput-name-3_3" required />
		

		Password Input 4:
		<PasswordInput ui="fullwidth" label="Fullwidth" name="passwordinput-name-4" />
		


		Password Input 5:
		<PasswordInput ui="error" label="Error" name="passwordinput-name-5" value="Error" />
		

		Password Input 6:
		<PasswordInput ui="success" label="Success" name="passwordinput-name-6" value="Success" />
		

		Password Input 7:
		<PasswordInput ui="pill" label="Pill" name="passwordinput-name-7" />
		

		Password Input 8:
		<PasswordInput ui="rounded" label="Rounded" name="passwordinput-name-8" />
		

		Password Input 9:
		<PasswordInput ui="small" units="unit" label="Small Size" name="passwordinput-name-9" />
		


		Password Input 10:
		<PasswordInput ui="medium" units="em" label="Medium Size" name="passwordinput-name-10" />
		


		Password Input 11:
		<PasswordInput ui="large" units="custom string" label="Large Size" name="passwordinput-name-11" />
		

		Password Input 12:
		<PasswordInput label="Icon Left" name="passwordinput-name-icon-1" iconLeft={<i className="fa fa-user-o" aria-hidden="true"></i>} />\
		<PasswordInput label="Icon Right" name="passwordinput-name-icon-2" iconRight={<i className="fa fa-feed" aria-hidden="true"></i>} />				
		

		Mixed some UI attributes (ui="fullwidth pill success"):
		<PasswordInput ui="fullwidth pill success" label="Mixed some UI attributes" name="passwordinput-name-mixed" />	

		All UI attributes (ui="fullwidth small medium large pill rounded success error"):
		<PasswordInput ui="fullwidth small medium large pill rounded success error" label="All UI attributes" name="passwordinput-name-all" />
															
																	
																	
	  
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
		<Date ui="fullwidth pill" label="Date" name="date-name-8" autoComplete="off" time="true" min="1950-01-01T08:30" max="2017-06-30T16:30" />

																	
																
																	
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
									
									
		<DynamicFields maxFields="10" addLabel="Add new" removeLabel="" tempHtmlString={
			<>
				<Input placeholder="Title" name="appnotice-title[]" />
				&nbsp;&nbsp;
				<Input ui="medium" placeholder="URL" name="appnotice-url[]" />
			</>
		}  
		value='["title 1","https://example.com/pa1"],["title 2","https://uiux.cc"],["title 3","https://youtube.com"]'
		/>

			
			
																	
		<h3>File</h3>
		{/* ================================================================== */}      

        <File label="Upload File" name="file-name-1" />

																															
																	
		<h3>File Field</h3>
		{/* ================================================================== */}      

		<FileField label="Drag and drop a file here" name="file-field-name-1" />
			
			
		<h3>Merge Input</h3>
		{/* ================================================================== */}      

		<MergeInput btnType="button" placeholder="Enter your search term..." label={<><i className="fa fa-search" aria-hidden="true"></i> Icon Label</>} name="mergeInput-name-1-btnicon" />
		<MergeInput btnType="button" placeholder="Enter your search term..." label="Search" name="mergeInput-name-1" />
		<MergeInput btnType="submit" ui="pill" placeholder="Enter your search term..." label="Search" name="mergeInput-name-2" />
		<MergeInput btnType="submit" ui="rounded" placeholder="Enter your search term..." label="Search" name="mergeInput-name-2_2" />
		<MergeInput btnType="button" placeholder="Enter your Email" type="email" label="Subscribe" name="mergeInput-name-4" icon={<i className="fa fa-envelope" aria-hidden="true"></i>} />															
		<MergeInput btnType="button" ui="pill" placeholder="Enter your Email" type="email" label="Subscribe" name="mergeInput-name-5" icon={<i className="fa fa-envelope" aria-hidden="true"></i>} />																		
		<MergeInput btnType="button" ui="rounded" placeholder="Enter your Email" type="email" label="Subscribe" name="mergeInput-name-5_2" icon={<i className="fa fa-envelope" aria-hidden="true"></i>} />


		<h3>Tag Input</h3>
		{/* ================================================================== */}      

		<TagInput ui="rounded" placeholder="Add tag..." name="tagInput-name-1" />
		<TagInput ui="rounded" placeholder="Add tag..." name="tagInput-name-2" maxTags={5} value="tag1,tag2,tag3"/>


		<h3>Flex Layout</h3>
		{/* ================================================================== */}      

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
			

    </>
  );
}

```