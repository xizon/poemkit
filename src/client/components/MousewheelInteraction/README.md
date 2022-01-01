# @/components/MousewheelInteraction

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/MousewheelInteraction)

## Version

=> 0.0.1 (October 22, 2021)

## API

### Mousewheel Interaction
```js
import MousewheelInteraction from '@/components/MousewheelInteraction/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `interval` | number  | 500 | Set a interval to fix an issue for mousewheel event is too fast. Amount of time measured in milliseconds. |
| `actionTransitionDuration` | number  | 1000 | The transition duration of each action. According to page transition animation changes. Amount of time measured in milliseconds. |
| `refreshCallback` | function \| null  | - | his function is called whenever the data is updated, including initialization. Exposes the JSON format data about the Mousewheel as an argument. You can use it like this: `(res) => {if(res.direction=='down'){console.log('down');}else{console.log('up');}}` |


## Examples

```js
import React from 'react';
import MousewheelInteraction from '@/components/MousewheelInteraction/index.tsx';

export default () => {
  return (
    <>


      <MousewheelInteraction 
        interval={500} 
        actionTransitionDuration={1000} 
        refreshCallback={(res) => {
          if ( res.direction == 'down' ) {
            //scroll down
            console.log( 'down' );
          } else {
            //scroll up
            console.log( 'up' );
          }	
        }}
      />

    </>
  );
}

```