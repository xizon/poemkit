# @/components/PeriodicalScroll

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/PeriodicalScroll)

## Version

=> 0.0.1 (October 22, 2021)

## API

### Periodical Scroll
```js
import { PeriodicalScroll } from '@/components/PeriodicalScroll/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `speed` | number  | 600 | Speed of scrolling up. Amount of time measured in milliseconds. |
| `timing` | number  | 2000 | Autoplay interval |


### Periodical Scroll Item
```js
import { PeriodicalScrollItem } from '@/components/PeriodicalScroll/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `elAnimLeaveEv` | function  | - | Handling events when the mouse leaves the element |




## Examples

```js
import React from 'react';
import { PeriodicalScroll, PeriodicalScrollItem } from '@/components/PeriodicalScroll/index.tsx';

export default () => {
  return (
    <>


      <PeriodicalScroll speed={600} timing={4000}>
          <PeriodicalScrollItem><span>February 8, 2018</span><a href="#" target="_blank">An underlying front-end system that makes it easy to extend and modify core files.</a></PeriodicalScrollItem>
          <PeriodicalScrollItem><span>February 3, 2018</span><a href="#" target="_blank">This spec is a living document that will be updated.</a></PeriodicalScrollItem>
          <PeriodicalScrollItem><span>July 22, 2017</span><a href="#" target="_blank">We continue to develop the tenets and specifics of this project.</a></PeriodicalScrollItem>
          <PeriodicalScrollItem><span>April 5, 2020</span><a href="#" target="_blank">Hello World! (Last)</a></PeriodicalScrollItem>
      </PeriodicalScroll>

    </>
  );
}

```