# @/components/Navigation

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/Navigation)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Navigation
```js
import Navigation from '@/components/Navigation/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | array | - | Specify data of Navigation List as a JSON string format. Such as: <br />`[{"title":<><li><NavLink data-route="true" to="/components-demo">Route Link</NavLink></li></>,"link":"#","mega":false},{"title":"Top level 1","link":"#","mega":false},{"title":"Top level 2","link":"#","mega":false,"children":[{"title":"Sub level 2","link":"#","mega":false,"children":[{"title":"Sub Sub Level 2","link":"#","mega":false}]}]},{"title":"Mega Menu","link":"#","mega":{"columnLists":[{"heading":"Mega Menu 1","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]},{"heading":"Mega Menu 2","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]},{"heading":"Mega Menu 3","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]}]}},{"title":"Top level 3","link":"https://example.com","mega":false}]` |
| `position` | null \| `left` \| `right` | null | Set navigation to the left or right. If the value is `left`, it is forced to be left. |
| `tools` | ReactNode | - | Set the trailing tool in the way of HTML Element, which can be a social button or other. |
| `mobileLogo` | string | - | Specify a LOGO address for mobile navigation. |
| `label` | string | - | Specify a navigation label.  |
| `displayMobileNav` | boolean | false | Whether to enable mobile navigation.  |
| `direction` | null \| `vertical` \| `horizontal` | horizontal | The navigation direction.  |



Array configuration properties of the `data`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | string \| ReactNode | - | The title attribute is used to provide the label text of the hyperlink. <br />It supports ReactNode <strong>(Top-level element only)</strong> type and can be used for Route Link, such as: <br />`<><li><NavLink data-route="true" to="/components-demo">Route Link</NavLink></li></>` |
| `link` | string | - | Specify a URL address. |
| `mega` | boolean \| JSON Object Literals | - | <strong>(Top-level element only)</strong> Configure Mega Menu, disable when the value is `false`. <br />Refer to the following configuration as a JSON string format: <br />`{"columnLists":[{"heading":"Mega Menu 1","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]},{"heading":"Mega Menu 2","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]},{"heading":"Mega Menu 3","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]}]}` |
| `children` | array | - | Specify a set of sub-navigation, the key value of each item still uses `title`, `link` and `mega` (The `mega` attribute can be omitted). Eg.<br /> `[{"title":"Sub level 2","link":"#","mega":false,"children":[{"title":"Sub Sub Level 2","link":"#","mega":false}]}]` |



JSON configuration properties of the `mega`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `columnLists` | array | - | Root node of mega. |
| `title` | string | - | The title attribute is used to provide the label text of the hyperlink |
| `link` | string | - | Specify a URL address. |
| `heading` | string | - | Specify the title label for each column navigation. |
| `list` | array | - | A collection of items for each column navigation. the key value of each item still uses `title` and `link`. Eg. <br />`[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]` |




## Examples

```js
import React from 'react';
import Navigation from '@/components/Navigation/index.tsx';
import { NavLink } from 'react-router-dom';

const menuListData = [
	{
		"title": <><li><NavLink data-route="true" to="/components-demo">Route Link</NavLink></li></>,
		"link": "#",
		"mega": false
	},
	{
		"title": "Top level 1",
		"link": "#",
		"mega": false
	},
	{
		"title": "Top level 2",
		"link": "#",
		"mega": false,
		"children": [
			{
				"title": "Sub level 2",
				"link": "#",
				"mega": false,
				"children": [
					{
						"title": "Sub Sub Level 2",
						"link": "#",
						"mega": false
					}
				]
			}
		]
	},
	{
		"title": "Mega Menu",
		"link": "#",
		"mega": {
			"columnLists": [
				{
					"heading": "Mega Menu 1",
					"list": [
						{ "title": "Menu Text", "link": "#" },
						{ "title": "Menu Text", "link": "#" }
					]
				},
				{
					"heading": "Mega Menu 2",
					"list": [
						{ "title": "Menu Text", "link": "#" },
						{ "title": "Menu Text", "link": "#" }
					]
				},
				{
					"heading": "Mega Menu 3",
					"list": [
						{ "title": "Menu Text", "link": "#" },
						{ "title": "Menu Text", "link": "#" }
					]
				}
			]
		}
	},
	{
		"title": "Top level 3",
		"link": "https://example.com",
		"mega": false
	}
];


export default () => {
  return (
    <>
		<Navigation data={menuListData} />

		<Navigation 
		    displayMobileNav={true}
			data={menuListData} 
			position="left" 
			label="Text Here" 
			mobileLogo={`/path/demo.png`} 
			tools={<>
				<a title="Follow us on Twitter" href="https://twitter.com/xxx" target="_blank">
					<i className="fa fa-twitter"></i>
				</a>
				<a className="poemkit-social-btn poemkit-social-btn--small poemkit-social-btn--circle poemkit-social-btn--thin" title="Follow us on Facebook" href="https://www.facebook.com/xxx" target="_blank">
					<i className="fa fa-facebook"></i>
				</a>
		</>}/>

		
    </>
  );
}

```