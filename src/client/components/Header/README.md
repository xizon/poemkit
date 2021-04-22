# @uixkit.react/components/Header

[Source](https://github.com/xizon/uix-kit-react/tree/master/src/client/components/Header)

## Version

=> 0.0.1


## Examples

```js
import React from 'react';
import Header from '@uixkit.react/components/Header/index.js';

export default function Examples() {
  return (
    <>
		<Header headerOverlayEnable="false" htmlString={
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