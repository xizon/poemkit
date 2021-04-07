# @uixkit.react/core/Buttons

![MIT license](https://badgen.now.sh/badge/license/MIT)

[Source](https://github.com/xizon/uix-kit-react/tree/master/src/client/components/Buttons)


## Examples

```js
import React, { Fragment } from 'react';
import Button from '@uixkit.react/core/Buttons/index.js';

let spreadOperator = {
  bgColor: 'info',
  btnName: 'Spread Operator',
};


export default function ButtonsExamples() {
  return (
    <Fragment>
		<Button className='ukr-button' bgColor='' btnName=''/>
		<Button className='ukr-button' bgColor='success' btnName='success'/>
		<Button className='ukr-button' bgColor='info' btnName='info'/>
		<Button className='ukr-button' bgColor='danger' btnName='danger'/>
		<Button className='ukr-button' bgColor='warning' btnName='warning'/>
		<Button className='ukr-button' {...spreadOperator}/>
    </Fragment>
  );
}

```