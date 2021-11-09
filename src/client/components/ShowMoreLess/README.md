# @poemkit/components/ShowMoreLess

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/ShowMoreLess)

## Version

=> 0.0.1 (October 22, 2021)

## API

### Show More Less
```js
import ShowMoreLess from '@poemkit/components/ShowMoreLess/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultHeight` | string  | 8.5rem | Set a default height to hide the remaining content. Please include the length unit, such as `em`, `px` |
| `speed` | number  | 500| Speed of scrolling up. Amount of time measured in milliseconds. |
| `easing` | `linear` \| `easeIn` \| `easeOut` \| `easeInOut` | - | Types of easing animation |
| `triggerTagName` | `a` \| `button` \| `div` \| `span`  | - | Tag name of the trigger. |
| `triggerClassName` | string  | - | Specify a class for this Node |
| `showTriggerContent` | ReactNode  | - | Set a piece of text or HTML code for the show trigger |
| `hideTriggerContent` | ReactNode  | - | Set a piece of text or HTML code for the hide trigger |



## Examples

```js
import React from 'react';
import ShowMoreLess from '@poemkit/components/ShowMoreLess/index.tsx';

export default () => {
  return (
    <>

      <ShowMoreLess 
          speed={350}
        easing="easeOut"
          defaultHeight="8.5rem"
        triggerTagName="a" 
        triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__size--s poemkit-btn__bg--secondary is-pill is-fill-white" 
        showTriggerContent={<>
          Show More
        </>}
        hideTriggerContent={<>
          Hide
        </>}>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>	

          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
      </ShowMoreLess>


    </>
  );
}

```