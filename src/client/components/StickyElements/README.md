# @uixkit.react/components/StickyElements

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/StickyElements)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Sticky Elements
```js
import Sticky from '@uixkit.react/components/StickyElements/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `stopTrigger` | string \| boolean  | false | Set a trigger to stop the sticky action, use the class name or ID, for example: `.app-sticky-stoptrigger`. Sticky state will be triggered when the top of the element is 0 pixels from the top of the scrollElement automatically. |
| `stopTriggerOffset` | string \| boolean  | 0 | Sticky state will be canceled trigger when the bottom of the element is `stopTriggerOffset` pixels from the bottom of the scroll element. You can use `%h` or `%w` to represent the height and width of the window, set this value with mathematical expressions, please do not bring any units. Such as: `%h/3`, `100/3`, `30*2`, `220` |


The elements you actually want to stick should be wrapped in the `<Sticky />` tag. Set `stopTrigger` and `stopTriggerOffset` properties to turn off sticky.


## Examples

```js
import React from 'react';
import Sticky from '@uixkit.react/components/StickyElements/index.tsx';

export default () => {
  return (
    <>

        <Sticky stopTrigger=".app-sticky-stoptrigger" stopTriggerOffset="%h/3">
            <h4>Sticky Title Here</h4>
            <div style={{height:"500px",background:"#f2f2f2",marginBottom:"50px"}}></div>
        </Sticky>

    </>
  );
}

```