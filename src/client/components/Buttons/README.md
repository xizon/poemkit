# ./src/client/components/Buttons

![MIT license](https://badgen.now.sh/badge/license/MIT)

[Source](https://github.com/xizon/uix-kit-react/tree/master/src/client/components/Buttons)


## Examples

```js
import React, { Fragment } from 'react';
import Button from './src/client/components/Buttons/index.js';

let spreadOperator = {
  UixBtnBgColor: 'info',
  UixBtnName: 'Spread Operator',
};


export default function ButtonsExamples() {
  return (
    <Fragment>
		<Button className='uix-button' UixBtnBgColor='' UixBtnName=''/>
		<Button className='uix-button' UixBtnBgColor='success' UixBtnName='success'/>
		<Button className='uix-button' UixBtnBgColor='info' UixBtnName='info'/>
		<Button className='uix-button' UixBtnBgColor='danger' UixBtnName='danger'/>
		<Button className='uix-button' UixBtnBgColor='warning' UixBtnName='warning'/>
		<Button className='uix-button' {...spreadOperator}/>
    </Fragment>
  );
}

```