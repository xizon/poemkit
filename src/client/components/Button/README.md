# @uixkit.react/components/Button

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Button)

## Version

=> 0.0.1


## API

### Button
```js
import { Button } from '@uixkit.react/components/Button/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `href` | string | - | Providing a href will render an \<a\> element. Otherwise, it will be a \<button\> element |
| `status` | `disabled` \| `waiting` | - | The state of the button |
| `border` | `thin` \| `medium` \| `thick` \| `white` | - | The thickness and style of the border |
| `background` | `primary` \| `secondary` \| `hyperlink` \| `hyperlink2` \| `transparent` \| `fillwhite` | - | background color |
| `spacing` | `bottom` \| `left` \| `right` | - | To create space around buttons |
| `corners` | `pill` \| `rounded` | - | Add rounded corners to button |
| `size` | `fullwidth` \| `tiny` \| `small` \| `medium` \| `large` | - | Set the size of button |
| `iconPosition` | `left` \| `right` | - | Set the icon position |
| `icon` | ReactNode  | - | Set the icon component of button |
| `target` | string | _self | The target attribute specifies where to open the linked document |
| `onClick` | function | - | Set the handler to handle click event |


It accepts all props(include data-* attributes) which native buttons support.



### ButtonGroup
```js
import { ButtonGroup } from '@uixkit.react/components/Button/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `fullwidth` | boolean | false | The button group has an automatic set width of 100% |
| `spacing` | `bottom` \| `left` \| `right` | - | To create space around group |


## Examples

```js
import React from 'react';
import { Button, ButtonGroup } from '@uixkit.react/components/Button/index.tsx';


export default () => {
  return (
    <>

		<h3>Click Event</h3>
		<p>Add onClick event to the button.</p>
		{/* ================================================================== */} 

		<Button border="thin" spacing="bottom" background="primary" corners="pill" size="medium" id="app-btn-1" href="#" data-title="button" onClick={(e) => {e.preventDefault(); alert( e.target.id );} }>Click me to view ID!</Button>

		<br />
		<Button border="thin" spacing="bottom" background="primary" corners="pill" size="medium" id="app-btn-2" href="#" onClick={(e) => {e.preventDefault(); __( '#app-btn-2' ).width( '50%' );} }>Click me to change the width!</Button>

		<h3>Button</h3>
		{/* ================================================================== */} 
		<Button border="thin" spacing="bottom" background="hyperlink" size="tiny" href="#">Tiny</Button>

		<Button border="thin" spacing="bottom" background="hyperlink" size="small" href="#">Small</Button>

		<Button border="thin" spacing="bottom" background="hyperlink" size="medium" href="#">Medium</Button>

		<Button border="thin" spacing="bottom" background="hyperlink" size="large" href="#">Large</Button>

		<br />  

		<Button border="thin" spacing="bottom" background="hyperlink2" size="tiny" href="#">Tiny</Button>

		<Button border="thin" spacing="bottom" background="hyperlink2" size="small" href="#">Small</Button>


		<Button border="thin" spacing="bottom" background="hyperlink2" size="medium" href="#">Medium</Button>

		<Button border="thin" spacing="bottom" background="hyperlink2" size="large" href="#">Large</Button>

		<br />      


		<Button border="thin" spacing="bottom" background="primary" size="tiny" href="#" ><i className="fa fa-bullhorn" aria-hidden="true"></i>Tiny</Button>

		<Button border="thin" spacing="bottom" background="primary" size="small" href="#"><i className="fa fa-bullhorn" aria-hidden="true"></i>Small</Button>


		<Button border="thin" spacing="bottom" background="primary" size="medium" href="#"><i className="fa fa-cogs" aria-hidden="true"></i>Medium</Button>

		<Button border="thin" spacing="bottom" background="primary" size="large" href="#"><i className="fa fa-flask" aria-hidden="true"></i>Large</Button>

		<br />

		<Button border="thin" spacing="bottom" background="primary" size="tiny" href="#">Tiny<i className="fa fa-bullhorn" aria-hidden="true"></i></Button>

		<Button border="thin" spacing="bottom" background="primary" size="small" href="#">Small<i className="fa fa-bullhorn" aria-hidden="true"></i></Button>


		<Button border="thin" spacing="bottom" background="primary" size="medium" href="#">Medium<i className="fa fa-cogs" aria-hidden="true"></i></Button>

		<Button border="thin" spacing="bottom" background="primary" size="large" href="#">Large<i className="fa fa-flask" aria-hidden="true"></i></Button>

		<br />


		<Button border="thin" spacing="bottom" background="primary" size="small" icon={<><i className="fa fa-bullhorn" aria-hidden="true"></i></>} iconPosition="right" href="#">Icon Right</Button>


		<Button border="thin" spacing="bottom" background="primary" size="small" icon={<><i className="fa fa-cogs" aria-hidden="true"></i></>} iconPosition="left" href="#">Icon Left</Button>


		<Button border="thin" spacing="bottom" background="primary transparent" corners="pill" size="small" icon={<><i className="fa fa-bullhorn" aria-hidden="true"></i></>} iconPosition="left" href="#">Icon Left</Button>


		<Button border="thin" spacing="bottom" background="primary transparent" corners="pill" size="small" icon={<><i className="fa fa-cogs" aria-hidden="true"></i></>} iconPosition="right" href="#">Icon Right</Button>


		<br />

		<Button status="disabled" border="thin" spacing="bottom" background="primary" size="tiny" href="#">Tiny</Button>

		<Button status="disabled" border="thin" spacing="bottom" background="primary" size="small" href="#">Small</Button>


		<Button status="disabled" border="thin" spacing="bottom" background="primary" size="medium" href="#">Medium</Button>

		<Button status="disabled" border="thin" spacing="bottom" background="primary" size="large" href="#">Large</Button>

		<br />


		<Button status="waiting" border="thin" spacing="bottom" background="primary" size="tiny" href="#">Tiny</Button>

		<Button status="waiting" border="thin" spacing="bottom" background="primary" size="small" href="#">Small</Button>


		<Button status="waiting" border="thin" spacing="bottom" background="primary" size="medium" href="#">Medium</Button>

		<Button status="waiting" border="thin" spacing="bottom" background="primary" size="large" href="#">Large</Button>

		<br />

		<Button border="thin" spacing="bottom" background="primary" corners="pill" size="tiny" href="#">Tiny</Button>


		<Button border="thin" spacing="bottom" background="primary" corners="pill" size="small" href="#">Small</Button>


		<Button border="thin" spacing="bottom" background="primary" corners="pill" size="medium" href="#">Medium</Button>

		<Button border="thin" spacing="bottom" background="primary" corners="pill" size="large" href="#">Large</Button>



		<br />


		<Button border="thin" spacing="bottom" background="primary" corners="rounded" size="tiny" href="#">Tiny</Button>



		<Button border="thin" spacing="bottom" background="primary" corners="rounded" size="small" href="#">Small</Button>


		<Button border="thin" spacing="bottom" background="primary" corners="rounded" size="medium" href="#">Medium</Button>

		<Button border="thin" spacing="bottom" background="primary" corners="rounded" size="large" href="#">Large</Button>


		<br />


		<Button border="thin" spacing="bottom" background="primary transparent" corners="pill" size="tiny" href="#">Tiny Radius</Button>


		<Button border="thin" spacing="bottom" background="primary transparent" corners="pill" size="small" href="#">Small Radius</Button>


		<Button border="thin" spacing="bottom" background="primary transparent" corners="pill" size="medium" href="#">Medium Radius</Button>

		<Button border="thin" spacing="bottom" background="primary transparent" corners="pill" size="large" href="#">Large Radius</Button>



		<h3>Full Width</h3>
		{/* ================================================================== */} 
		<Button border="thin" spacing="bottom" background="primary" size="tiny fullwidth" href="#">Tiny Full Width</Button>


		<Button border="thin" spacing="bottom" background="primary" size="small fullwidth" href="#">Small Full Width</Button>

		<br />

		<Button border="thin" spacing="bottom" background="primary" size="medium fullwidth" href="#">Medium Full Width</Button>

		<br />

		<Button border="thin" spacing="bottom" background="primary" size="large fullwidth" href="#">Large Full Width</Button>

		<br />

		<Button border="thin" spacing="bottom" background="primary" corners="pill" size="tiny fullwidth" href="#">Tiny Full Width Radius</Button>

		<Button border="thin" spacing="bottom" background="primary" corners="pill" size="small fullwidth" href="#">Small Full Width Radius</Button>

		<br />

		<Button border="thin" spacing="bottom" background="primary" corners="pill" size="medium fullwidth" href="#">Medium Full Width Radius</Button>

		<br />

		<Button border="thin" spacing="bottom" background="primary" corners="pill" size="large fullwidth" href="#">Large Full Width Radius ( More Text )</Button>



		<h3>Button Group</h3>
		{/* ================================================================== */} 
		<ButtonGroup spacing="bottom">
			<Button border="thin" background="primary transparent" corners="pill" size="small" href="#">Group</Button>
			<Button border="thin" background="primary transparent" corners="pill" size="small" href="#">Group</Button>
			<Button border="thin" background="primary transparent" corners="pill" size="small" href="#">Group</Button>
		</ButtonGroup>


		<ButtonGroup spacing="bottom">
			<Button border="thin" background="primary" size="small" href="#">Group</Button>
			<Button border="thin" background="primary" size="small" href="#">Group</Button>
			<Button border="thin" background="primary" size="small" href="#">Group</Button>
		</ButtonGroup>


		<ButtonGroup spacing="bottom" fullwidth={true}>
			<Button border="thin" background="primary transparent" corners="pill" size="small" href="#">Group</Button>
			<Button border="thin" background="primary transparent" corners="pill" size="small" href="#">Group</Button>
			<Button border="thin" background="primary transparent" corners="pill" size="small" href="#">Group</Button>
		</ButtonGroup>


		<ButtonGroup spacing="bottom" fullwidth={true}>
			<Button border="thin" background="primary" size="small" href="#">Group</Button>
			<Button border="thin" background="primary" size="small" href="#">Group</Button>
			<Button border="thin" background="primary" size="small" href="#">Group</Button>
		</ButtonGroup>




		<h3>Secondary Button</h3>
		{/* ================================================================== */} 

		<Button border="thin" spacing="bottom" background="secondary fillwhite" size="small" href="#">Secondary Button</Button>

		<Button border="thin" spacing="bottom" background="secondary fillwhite" corners="rounded" size="small" href="#">Secondary Button</Button>

		<Button border="thin" spacing="bottom" background="secondary fillwhite" corners="pill" size="small" href="#">Secondary Button</Button>


		<br /> 


		<div className="uix-t-c" style={{background:"#333",padding:"1.5rem 0 0",marginTop:"1rem"}}>

			<Button border="thin" spacing="bottom" background="secondary fillwhite" size="small" href="#">White Button</Button>

			<Button border="thin" spacing="bottom" background="secondary" size="small" href="#">White Button</Button>

			<br />

			<Button border="thin" spacing="bottom" background="secondary fillwhite" corners="pill" size="small" href="#">White Button</Button>

			<Button border="thin" spacing="bottom" background="secondary" corners="pill" size="small" href="#">White Button</Button>


			<br />

			<Button border="thin" spacing="bottom" background="secondary fillwhite" size="small" icon={<><i className="fa fa-bullhorn" aria-hidden="true"></i></>} iconPosition="right" href="#">Icon Right</Button>


			<Button border="thin" spacing="bottom" background="secondary fillwhite" size="small" icon={<><i className="fa fa-cogs" aria-hidden="true"></i></>} iconPosition="left" href="#">Icon Left</Button>


			<br />

			<Button border="thin" spacing="bottom" background="secondary" size="small" icon={<><i className="fa fa-bullhorn" aria-hidden="true"></i></>} iconPosition="right" href="#">Icon Right</Button>


			<Button border="thin" spacing="bottom" background="secondary" size="small" icon={<><i className="fa fa-cogs" aria-hidden="true"></i></>} iconPosition="left" href="#">Icon Left</Button>

			<br />


		</div>


	  
    </>
  );
}

```