# @/components/Tooltip

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/Tooltip)

## Version

=> 0.0.1 (November 22, 2021)

## API

### Tooltip
```js
import Tooltip from '@/components/Tooltip/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `top` \| `top-right` \| `top-left` \| `bottom` \| `bottom-right` \| `bottom-left`  | top | The direction of the tip. Defaults to `top`. |
| `size` | `auto` \| `large` \| `medium` \| `small`  | auto | The size of the content area. Defaults to `auto`. |
| `hoverDelay` | number  | 200 | The number of milliseconds to determine hover intent |
| `mouseOutDelay` | number  | - | The number of milliseconds to determine hover-end intent, defaults to the hoverDelay value |
| `showTriggerContent` | ReactNode  | - | Set a piece of text or HTML code for the show trigger |
| `hideTriggerContent` | ReactNode  | - | Set a piece of text or HTML code for the hide trigger |


## Examples

```js
import React from 'react';
import Tooltip from '@/components/Tooltip/index.tsx';

export default () => {
  return (
    <>

        <Tooltip
          hoverDelay={300}
          direction="top"
          size="auto"
          showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Top</>}
          hideTriggerContent={<><div className="text-center">Hi, there. I am here.</div></>}
        />

    </>
  );
}

```