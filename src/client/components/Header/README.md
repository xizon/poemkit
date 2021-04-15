# @uixkit.react/components/Header

![MIT license](https://badgen.now.sh/badge/license/MIT)

[Source](https://github.com/xizon/uix-kit-react/tree/master/src/client/components/Header)


## Examples

```js
import React, { Fragment } from 'react';
import Header from '@uixkit.react/components/Header/index.js';

export default function Examples() {
  return (
    <Fragment>
		<Header UixMenuContent={
			<Fragment>
					<li><a href="#">Menu 1</a></li>
					<li><a href="#">Menu 2</a></li>
					<li><a href="#">Menu 3</a></li>  
			</Fragment>
		} />
    </Fragment>
  );
}

```