# @/components/HybridContentSlider

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/HybridContentSlider)

## Version

=> 0.0.1 (October 22, 2021)

## API

### Hybrid Content Slider
```js
import { HybridContentSlider } from '@/components/HybridContentSlider/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `speed` | number  | 250 | Transition speed. This setting sets how long the transition animation lasts. Amount of time measured in milliseconds. |
| `direction` | `vertical` \| `horizontal` | horizontal | The direction of the component animation |
| `auto` | boolean  | false | Setup a slider for the slider to animate automatically |
| `timing` | number  | 10000 | Autoplay interval |
| `loop` | boolean  | false | Gives the slider a seamless infinite loop |
| `paginationEnabled` | boolean  | false | Display or hide Navigation of paging control |
| `arrowEnabled` | boolean  | false | Display or hide Previous/Next arrow |
| `arrowPrevIcon` | ReactNode  | - | Previous arrow icon |
| `arrowNextIcon` | ReactNode  | - | Next arrow icon |
| `draggable` | boolean  | false | Allow drag and drop on the slider (touch devices will always work) |
| `draggableCursor` | string \| boolean  | move | Drag & Drop Change icon/cursor while dragging |
| `customPagination` | ReactNode  | - | Custom Navigation of paging control with HTML code. For buttons or links, use the `data-index` attribute to control the index. Such as: <br /> `<ul><li><a href="#"data-index="0">Go 1</a></li><li><a href="#"data-index="1">Go 2</a></li></ul>` |


### Hybrid Content Slider Item
```js
import { HybridContentSliderItem } from '@/components/HybridContentSlider/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| - | - | - | - |


## Examples

```js
import React from 'react';
import { HybridContentSlider, HybridContentSliderItem } from '@/components/HybridContentSlider/index.tsx';

export default () => {
    return (
        <>

            <h3>Horizontal Style</h3>
            {/* ================================================================== */}
            <HybridContentSlider 
                direction="horizontal"
                speed={550}
                paginationEnabled={true}
                arrowEnabled={true}
                arrowPrevIcon={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
                arrowNextIcon={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
                draggable={false}
                draggableCursor="move">
                    
                <HybridContentSliderItem>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p><img src={`/path/demo.png`} alt="Title 2" width="200" /></p>
                    <p>Vel scelerisque nisl consectetur et.</p>
                </HybridContentSliderItem>
                <HybridContentSliderItem>
                    <img src={`/path/demo.png`} alt="Title 2" />
                </HybridContentSliderItem>
                <HybridContentSliderItem>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus</p>
                </HybridContentSliderItem>
            </HybridContentSlider>


            <h3>Vertical Style</h3>
            {/* ================================================================== */}
            <HybridContentSlider 
                direction="vertical"
                speed={550}
                paginationEnabled={true}
                arrowEnabled={true}
                arrowPrevIcon={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
                arrowNextIcon={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
                draggable={true}
                draggableCursor="move">
                    
                <HybridContentSliderItem>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p><img src={`/path/demo.png`} alt="Title 2" width="200" /></p>
                    <p>Vel scelerisque nisl consectetur et.</p>
                </HybridContentSliderItem>
                <HybridContentSliderItem>
                    <img src={`/path/demo.png`} alt="Title 2" />
                </HybridContentSliderItem>
                <HybridContentSliderItem>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus</p>
                </HybridContentSliderItem>
            </HybridContentSlider>


            <h3>With Custom Pagination Buttons</h3>
            {/* ================================================================== */}
            <HybridContentSlider 
                direction="horizontal"
                speed={550}
                paginationEnabled={true}
                arrowEnabled={false}
                arrowPrevIcon={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
                arrowNextIcon={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
                draggable={true}
                draggableCursor="move"
                customPagination={<>
                    <ul className="poemkit-hybrid-content-slider__pagination--custom">
                        <li><a href="#" data-index="0">Go 1</a></li>
                        <li><a href="#" data-index="1">Go 2</a></li>
                        <li><a href="#" data-index="2">Go 3</a></li>
                        <li><a href="#" data-index="3">Go 4</a></li>
                    </ul>
                </>}>
                    
                <HybridContentSliderItem>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p><img src={`/path/demo.png`} alt="Title 2" width="200" /></p>
                    <p>Vel scelerisque nisl consectetur et.</p>
                </HybridContentSliderItem>
                <HybridContentSliderItem>
                    <img src={`/path/demo.png`} alt="Title 2" />
                </HybridContentSliderItem>
                <HybridContentSliderItem>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus</p>
                </HybridContentSliderItem>
            </HybridContentSlider>

            

            <h3>Autoplay</h3>
            <p>Using data attributes <code>auto</code>, <code>timing</code> and <code>loop</code> to autoplay and loop.</p>
            {/* ================================================================== */}
            <HybridContentSlider 
                direction="horizontal"
                speed={550}
                auto={true}
                loop={true}
                timing={5000}
                paginationEnabled={true}
                arrowEnabled={true}
                arrowPrevIcon={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
                arrowNextIcon={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
                draggable={true}
                draggableCursor="move">
                    
                <HybridContentSliderItem>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p><img src={`/path/demo.png`} alt="Title 2" width="200" /></p>
                    <p>Vel scelerisque nisl consectetur et.</p>
                </HybridContentSliderItem>
                <HybridContentSliderItem>
                    <img src={`/path/demo.png`} alt="Title 2" />
                </HybridContentSliderItem>
                <HybridContentSliderItem>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus</p>
                </HybridContentSliderItem>
            </HybridContentSlider>


        </>
    );
}

```