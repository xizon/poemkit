# @uixkit.react/components/Navigation

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Navigation)

## Version

=> 0.0.1

## API

### Header
```js
import Header from '@uixkit.react/components/Header/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `htmlString` | ReactNode  | - | Set the HTML content of this component |


## Examples

```js
import React from 'react';
import Navigation from '@uixkit.react/components/Navigation/index.tsx';

export default () => {
  return (
    <>
		<Navigation htmlString={
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