# @/components/Header

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/Header)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Header
```js
import Header from '@/components/Header/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `headerOverlayEnabled` | boolean  | false | <strong>(Required)</strong> `true` will set the Header to overlay the top of the page. <br />The header is the element at the top of the web page. This element appears on every single page of the site and usually contains a logo, a menu to access different sections of the site, a search bar, and contact information. |
| `menu` | array  | - | Specify data of Navigation List as a JSON string format. Please refer to the `data` attribute of the component [`<Navigation />`](https://github.com/xizon/poemkit/tree/main/src/client/components/Navigation) |
| `logo` | ReactNode  | - | Specify a LOGO via HTML Element |



## Examples

```js
import React from 'react';
import Header from '@/components/Header/index.tsx';
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
		<Header 
			headerOverlayEnabled="false" 
			menu={menuListData} 
			logo={<><a href="#"><img src={`/path/demo.png`} /></a></>}
		/>
		
    </>
  );
}

```