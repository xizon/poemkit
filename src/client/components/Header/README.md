# @uixkit.react/components/Header

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Header)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Header
```js
import Header from '@uixkit.react/components/Header/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `headerOverlayEnabled` | boolean  | false | `true` will set the Header to overlay the top of the page. <br />The header is the element at the top of the web page. This element appears on every single page of the site and usually contains a logo, a menu to access different sections of the site, a search bar, and contact information. |
| `menu` | ReactNode  | - | Set the HTML content of the primary navigation |



## Examples

```js
import React from 'react';
import Header from '@uixkit.react/components/Header/index.tsx';

export default () => {
  return (
    <>
		<Header headerOverlayEnabled="false" menu={
			<>
					<li><a href="#">Menu 1</a></li>
					<li><a href="#">Menu 2</a></li>
					<li><a href="#">Menu 3</a></li>  
			</>
		} />
    </>
  );
}

```