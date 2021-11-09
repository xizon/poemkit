# @poemkit/components/SeamlessScrollingElement

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/SeamlessScrollingElement)

## Version

=> 0.0.1 (October 22, 2021)

## API

### Seamless Scrolling Element
```js
import { SeamlessScrollingElement } from '@poemkit/components/SeamlessScrollingElement/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `speed` | number  | 3000 | Speed of animation. Amount of time measured in milliseconds. |
| `gap` | number  | 20 | The separation distance between each item in pixels. |


### Seamless Scrolling Element Item
```js
import { SeamlessScrollingElementItem } from '@poemkit/components/SeamlessScrollingElement/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| - | - | - | - |


## Examples

```js
import React from 'react';
import { SeamlessScrollingElement, SeamlessScrollingElementItem } from '@poemkit/components/SeamlessScrollingElement/index.tsx';

export default () => {
  return (
    <>

      <SeamlessScrollingElement speed={3000} gap={20}>
        <SeamlessScrollingElementItem>This is list item 1</SeamlessScrollingElementItem>
        <SeamlessScrollingElementItem>This is list item 2</SeamlessScrollingElementItem>
        <SeamlessScrollingElementItem>This is list item 3</SeamlessScrollingElementItem>
        <SeamlessScrollingElementItem>This is list item 4 (last)</SeamlessScrollingElementItem>
      </SeamlessScrollingElement>

    </>
  );
}

```