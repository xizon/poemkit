# @uixkit.react/components/BackToTop

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/BackToTop)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Back To Top
```js
import BackToTop from '@uixkit.react/components/BackToTop/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `speed` | number  | 500| Speed of scrolling up. Amount of time measured in milliseconds. |
| `easing` | `easeIn` \| `easeOut` \| `easeInOut` | - | Types of easing animation |
| `btnIcon` | React.ReactNode  | - | Button Icon |

It accepts all props(include data-* attributes) which native div support. Scroll the page down to preview. The button is in the bottom right corner of the screen.




## Examples

```js
import React from 'react';
import BackToTop from '@uixkit.react/components/BackToTop/index.tsx';

export default () => {
  return (
    <>

      <BackToTop speed={700} easing="easeOut" btnIcon={<><i className="fa fa-arrow-up" aria-hidden="true"></i></>} />

    </>
  );
}

```