# @poemkit/components/Counter

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/Counter)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Counter
```js
import Counter from '@poemkit/components/Counter/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `start` | number  | 0 | The number the element should start at |
| `stop` | number  | 0 | The number the element should end at |
| `fixed` | number  | 0 | Formats a number using fixed-point notation. |
| `speed` | number  | 200 | How long it should take to count between the target numbers. Amount of time measured in milliseconds. |
| `dilimiter` | boolean  | false | The number of decimal places to show |
| `doubleDigits` | boolean  | false | Two digits are used by default, if it is a number `2` it should be displayed `02` |
| `displayNumber` | string \| number  | - | String displayed by default |



## Examples

```js
import React from 'react';
import Counter from '@poemkit/components/Counter/index.tsx';

export default () => {
  return (
    <>

      <h3>Counter</h3>
      <p>Scroll the page down to preview</p>
      {/* ================================================================== */}

      <Counter displayNumber="00" start={0} stop={23} fixed={1} speed={200} dilimiter={false} doubleDigits={false} />
      <Counter displayNumber="00" start={0} stop={1023} fixed={0} speed={200} dilimiter={true} doubleDigits={true} />
      <Counter displayNumber="00" start={0} stop={55} fixed={2} speed={200} dilimiter={true} doubleDigits={true} />
        

    </>
  );
}

```