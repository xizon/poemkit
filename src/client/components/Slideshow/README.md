# @poemkit/components/Slideshow

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/Slideshow)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Slideshow
```js
import { Slideshow } from '@poemkit/components/Slideshow/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `effect` | `scale` \| `slide` \| `fade`  | fade | Transition effects |
| `auto` | boolean  | false | Setup a slideshow for the slider to animate automatically |
| `timing` | number  | 10000 | Autoplay interval |
| `loop` | boolean  | false | Gives the slider a seamless infinite loop |
| `paginationEnabled` | boolean  | false | Display or hide Navigation of paging control |
| `arrowEnabled` | boolean  | false | Display or hide Previous/Next arrow |
| `arrowPrevIcon` | ReactNode  | - | Previous arrow icon |
| `arrowNextIcon` | ReactNode  | - | Next arrow icon |
| `draggable` | boolean  | false | Allow drag and drop on the slider (touch devices will always work) |
| `draggableCursor` | string \| boolean  | move | Drag & Drop Change icon/cursor while dragging |



### Slideshow Item
```js
import { SlideshowItem } from '@poemkit/components/Slideshow/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | string  | - | Specify URL each item. Support image and video |


---

If you want to modify the transition-duration property, please directly modify the <code>.poemkit-slideshow__item</code> in the CSS file. <strong>All effects are controlled by CSS styles.</strong>



## Examples

```js
import React from 'react';
import { Slideshow, SlideshowItem } from '@poemkit/components/Slideshow/index.tsx';

export default () => {
    return (
        <>
            <h3>Scale Effect</h3>
            {/* ================================================================== */}
            <Slideshow
                effect="scale"
                auto={true}
                loop={true}
                timing={10000}
                paginationEnabled={true}
                arrowEnabled={true}
                arrowPrevIcon={<><i className="fa fa-long-arrow-left" aria-hidden="true"></i></>}
                arrowNextIcon={<><i className="fa fa-long-arrow-right" aria-hidden="true"></i></>}
                draggable={false}
                draggableCursor="move">

                <SlideshowItem url={`/path/demo.png`}>
                    <div className="poemkit-typo--color-white">
                        <h3>Beautiful Free &amp; Premium Responsive WordPress Themes</h3>
                        <p>Responsive Web UI Frameworks</p>
                        <a href="#" className="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--secondary is-pill is-fill-white">Link To</a>
                    </div>
                </SlideshowItem>
                <SlideshowItem url={`/path/demo.png`}>
                    <div className="poemkit-typo--color-white">
                        <h3>Hello World</h3>
                        <p>UIUX Lab carefully crafts original design assets and publishes articles about UI/UX trends!</p>
                        <a href="#" className="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--secondary is-pill is-fill-white">Link To</a>
                    </div>
                </SlideshowItem>
                <SlideshowItem url={`/path/demo.png`}>
                    <div className="poemkit-typo--color-white">
                        <h3>Title 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </SlideshowItem>
                <SlideshowItem url={`/path/demo.mp4`}></SlideshowItem>

            </Slideshow>


            <h3>Sliding Effect</h3>
            {/* ================================================================== */}
            <Slideshow
                effect="slide"
                auto={false}
                loop={false}
                timing={10000}
                paginationEnabled={true}
                arrowEnabled={false}
                arrowPrevIcon={<><i className="fa fa-long-arrow-left" aria-hidden="true"></i></>}
                arrowNextIcon={<><i className="fa fa-long-arrow-right" aria-hidden="true"></i></>}
                draggable={false}
                draggableCursor="move">

                <SlideshowItem url={`/path/demo.png`}>
                    <div className="poemkit-typo--color-white">
                        <h3>Beautiful Free &amp; Premium Responsive WordPress Themes</h3>
                        <p>Responsive Web UI Frameworks</p>
                        <a href="#" className="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--secondary is-pill is-fill-white">Link To</a>
                    </div>
                </SlideshowItem>
                <SlideshowItem url={`/path/demo.png`}>
                    <div className="poemkit-typo--color-white">
                        <h3>Hello World</h3>
                        <p>UIUX Lab carefully crafts original design assets and publishes articles about UI/UX trends!</p>
                        <a href="#" className="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--secondary is-pill is-fill-white">Link To</a>
                    </div>
                </SlideshowItem>
                <SlideshowItem url={`/path/demo.png`}>
                    <div className="poemkit-typo--color-white">
                        <h3>Title 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </SlideshowItem>
            </Slideshow>




            <h3>Fade Effect</h3>
            {/* ================================================================== */}
            <Slideshow
                effect="fade"
                auto={false}
                loop={false}
                timing={10000}
                paginationEnabled={true}
                arrowEnabled={true}
                arrowPrevIcon={<><i className="fa fa-long-arrow-left" aria-hidden="true"></i></>}
                arrowNextIcon={<><i className="fa fa-long-arrow-right" aria-hidden="true"></i></>}
                draggable={true}
                draggableCursor="move">

                <SlideshowItem url={`/path/demo.png`}>
                    <div className="poemkit-typo--color-white">
                        <h3>Beautiful Free &amp; Premium Responsive WordPress Themes</h3>
                        <p>Responsive Web UI Frameworks</p>
                        <a href="#" className="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--secondary is-pill is-fill-white">Link To</a>
                    </div>
                </SlideshowItem>
                <SlideshowItem url={`/path/demo.png`}>
                    <div className="poemkit-typo--color-white">
                        <h3>Hello World</h3>
                        <p>UIUX Lab carefully crafts original design assets and publishes articles about UI/UX trends!</p>
                        <a href="#" className="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--secondary is-pill is-fill-white">Link To</a>
                    </div>
                </SlideshowItem>
                <SlideshowItem url={`/path/demo.png`}>
                    <div className="poemkit-typo--color-white">
                        <h3>Title 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </SlideshowItem>
            </Slideshow>

        </>
    );
}

```