# ./src/client/components/Buttons

![MIT license](https://badgen.now.sh/badge/license/MIT)

[Source](https://github.com/xizon/uix-kit-react/tree/master/src/client/components/Buttons)


## Examples

```js
import React, { Fragment } from 'react';
import Button from './src/client/components/Buttons/index.js';

let spreadOperator = {
  ukrBtnBgColor: 'info',
  ukrBtnName: 'Spread Operator',
};


export default function ButtonsExamples() {
  return (
    <Fragment>
		<Button className='ukr-button' ukrBtnBgColor='' ukrBtnName=''/>
		<Button className='ukr-button' ukrBtnBgColor='success' ukrBtnName='success'/>
		<Button className='ukr-button' ukrBtnBgColor='info' ukrBtnName='info'/>
		<Button className='ukr-button' ukrBtnBgColor='danger' ukrBtnName='danger'/>
		<Button className='ukr-button' ukrBtnBgColor='warning' ukrBtnName='warning'/>
		<Button className='ukr-button' {...spreadOperator}/>
    </Fragment>
  );
}

```