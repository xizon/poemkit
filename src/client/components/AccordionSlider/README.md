# @poemkit/components/AccordionSlider

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/AccordionSlider)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Accordion Slider
```js
import { AccordionSlider } from '@poemkit/components/AccordionSlider/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `displayTheFirstItem` | boolean | false | Display the only first item of a list |
| `triggerType` | `click` \| `mouseover`  | click | One event type |
| `autoReset` | boolean | true | Reset the initial state when the mouse moves out of the component area |
| `displayRatio` | string | 60% | Display ratio measures the activated item's percentage of the component in the entire area |
| `direction` | `horizontal` \| `verticle` | horizontal | The direction of the component animation, if it is `horizontal`, it means changing the width, otherwise changing the height |
| `closeBtn` | string \| boolean | false | The button that triggers the restoration of the initial state, represented by class, such as `.poemkit-accordion-img__close` |
| `duration` | number | 200 | The number of milliseconds(ms) each iteration of the animation takes to complete |



### Accordion Slider Item
```js
import { AccordionSliderItem } from '@poemkit/components/AccordionSlider/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultActive` | boolean | false | Set an item to activate by default |
| `bg` | string | - | The URL or color of the background image. Eg. `http://example/demo.jpg`, `#f60` |
| `boxToggleEv` | function | - | Handling events for collapsing item |
| `elAnimEndEv` | function | - | Handling events when the animation execution is complete |
| `elAnimLeaveEv` | function | - | Handling events when the mouse leaves the element |
| `triggerType` | `click` \| `mouseover`  | click | One event type |




## Examples

```js
import React from 'react';
import { AccordionSlider, AccordionSliderItem } from '@poemkit/components/AccordionSlider/index.tsx';


export default () => {
  return (
    <>


      <h3>Accordion Slider 1</h3>
      <p>Show hidden divs on mouse event.</p>
      {/* ================================================================== */}
      <AccordionSlider triggerType="mouseover" displayTheFirstItem={true} autoReset={true} displayRatio="50%" direction="horizontal" closeBtn={false}>
        <AccordionSliderItem bg={`/path/demo.png`}>
          <h3 className="poemkit-typo--color-white">Lorem Ipsum</h3>
          <p className="poemkit-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </AccordionSliderItem>
        <AccordionSliderItem bg={`/path/demo.png`}>
          <h3 className="poemkit-typo--color-white">Lorem Ipsum</h3>
          <p className="poemkit-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </AccordionSliderItem>
        <AccordionSliderItem bg={`/path/demo.png`}>
          <h3 className="poemkit-typo--color-white">Lorem Ipsum</h3>
          <p className="poemkit-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </AccordionSliderItem>
      </AccordionSlider>


      <h3>Accordion Slider 2</h3>
      <p>Click the item to show it. Hidden divs when you click the close button.</p>
      {/* ================================================================== */}
      <AccordionSlider triggerType="click" displayTheFirstItem={false} autoReset={false} displayRatio="60%" direction="horizontal" closeBtn=".poemkit-accordion-slider__close">
        <AccordionSliderItem bg={`/path/demo.png`}>
          <h3 className="poemkit-typo--color-white">Lorem Ipsum</h3>
          <p className="poemkit-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <a className="poemkit-accordion-slider__close" href="#">Close</a>
        </AccordionSliderItem>
        <AccordionSliderItem bg={`/path/demo.png`}>
          <h3 className="poemkit-typo--color-white">Lorem Ipsum</h3>
          <p className="poemkit-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <a className="poemkit-accordion-slider__close" href="#">Close</a>
        </AccordionSliderItem>
        <AccordionSliderItem bg={`/path/demo.png`}>
          <h3 className="poemkit-typo--color-white">Lorem Ipsum</h3>
          <p className="poemkit-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <a className="poemkit-accordion-slider__close" href="#">Close</a>
        </AccordionSliderItem>
        <AccordionSliderItem bg={`/path/demo.png`}>
          <h3 className="poemkit-typo--color-white">Lorem Ipsum</h3>
          <p className="poemkit-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <a className="poemkit-accordion-slider__close" href="#">Close</a>
        </AccordionSliderItem>
      </AccordionSlider>

    </>
  );
}

```