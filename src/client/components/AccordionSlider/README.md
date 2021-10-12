# @uixkit.react/components/AccordionSlider

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/AccordionSlider)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Accordion Slider
```js
import { AccordionSlider } from '@uixkit.react/components/AccordionSlider/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `triggerType` | string \| `click` \| `mouseenter`  | click | One event type, such as `click` or `mouseenter` |
| `displayTheFirstItem` | boolean | false | Display the only first item of a list |
| `autoReset` | boolean | true | Reset the initial state when the mouse moves out of the component area |
| `displayRatio` | string | 60% | Display ratio measures the activated item's percentage of the component in the entire area |
| `direction` | `horizontal` \| `verticle` | horizontal | The direction of the slider animation, if it is `horizontal`, it means changing the width, otherwise changing the height |
| `closeBtn` | string \| boolean | false | The button that triggers the restoration of the initial state, represented by class, such as `.uix-accordion-img__close` |



### Accordion Slider Item
```js
import { AccordionSliderItem } from '@uixkit.react/components/AccordionSlider/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultActive` | boolean | false | Set an item to activate by default |
| `bg` | string | - | The URL or color of the background image. Eg. `http://example/demo.jpg`, `#f60` |



## Examples

```js
import React from 'react';
import { AccordionSlider, AccordionSliderItem } from '@uixkit.react/components/AccordionSlider/index.tsx';


export default () => {
  return (
    <>


      <h3>Accordion Slider 1</h3>
      <p>Show hidden divs on mouse event.</p>
      {/* ================================================================== */}
      <AccordionSlider triggerType="mouseover" displayTheFirstItem={true} autoReset={true} displayRatio="50%" direction="horizontal" closeBtn={false}>
        <AccordionSliderItem bg={`/assets/images/demo/test-img-big-1.jpg`}>
          <h3 className="uix-typo--color-white">Lorem Ipsum</h3>
          <p className="uix-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </AccordionSliderItem>
        <AccordionSliderItem bg={`/assets/images/demo/test-img-big-2.jpg`}>
          <h3 className="uix-typo--color-white">Lorem Ipsum</h3>
          <p className="uix-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </AccordionSliderItem>
        <AccordionSliderItem bg={`/assets/images/demo/test-img-big-4.jpg`}>
          <h3 className="uix-typo--color-white">Lorem Ipsum</h3>
          <p className="uix-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </AccordionSliderItem>
      </AccordionSlider>


      <h3>Accordion Slider 2</h3>
      <p>Click the item to show it. Hidden divs when you click the close button.</p>
      {/* ================================================================== */}
      <AccordionSlider triggerType="click" displayTheFirstItem={false} autoReset={false} displayRatio="60%" direction="horizontal" closeBtn=".uix-accordion-slider__close">
        <AccordionSliderItem bg={`/assets/images/demo/test-img-big-1.jpg`}>
          <h3 className="uix-typo--color-white">Lorem Ipsum</h3>
          <p className="uix-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <a className="uix-accordion-slider__close" href="#">Close</a>
        </AccordionSliderItem>
        <AccordionSliderItem bg={`/assets/images/demo/test-img-big-2.jpg`}>
          <h3 className="uix-typo--color-white">Lorem Ipsum</h3>
          <p className="uix-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <a className="uix-accordion-slider__close" href="#">Close</a>
        </AccordionSliderItem>
        <AccordionSliderItem bg={`/assets/images/demo/test-img-big-4.jpg`}>
          <h3 className="uix-typo--color-white">Lorem Ipsum</h3>
          <p className="uix-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <a className="uix-accordion-slider__close" href="#">Close</a>
        </AccordionSliderItem>
        <AccordionSliderItem bg={`/assets/images/demo/test-img-big-5.jpg`}>
          <h3 className="uix-typo--color-white">Lorem Ipsum</h3>
          <p className="uix-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <a className="uix-accordion-slider__close" href="#">Close</a>
        </AccordionSliderItem>
      </AccordionSlider>

    </>
  );
}

```