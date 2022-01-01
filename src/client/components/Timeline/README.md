# @/components/Timeline

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/Timeline)

## Version

=> 0.0.1 (October 22, 2021)

## API

### Timeline
```js
import Timeline from '@/components/Timeline/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `interactiveEnabled` | boolean  | false | When true, the click event will be used to control the display effect of the timeline. |
| `focusEnabled` | boolean  | false | With the focus effect enabled, only one Item will be displayed each time you switch. Only available when `interactiveEnabled` is true. |
| `focusCenteredEnabled` | boolean  | false | Let the focus of the entire interaction always be displayed in the center. Only available when `focusEnabled` is true. |
| `speed` | number  | 500 | Transition speed. This setting sets how long the transition animation lasts. Amount of time measured in milliseconds. |
| `easing` | `linear` \| `easeIn` \| `easeOut` \| `easeInOut` | - | Types of easing animation |
| `direction` | string  | horizontal | The direction of the component animation, the value can be `vertical` and `horizontal` |
| `centered` | boolean  | false | Centered vertical or horizontal timelines. In this layout, the timeline runs right down the center of the page, with branches coming off of alternate sides of the timeline. When `focusEnabled` is true, this setting is invalid. |
| `data` | array  | - | Specify data of items as a JSON string format. Such as: <br />`[{"url":"xxx.jpg","title":<>Title 1</>,"content":"<><p>content here</p></>","node":"<>Feb 19</>},{"url":"xxx.jpg","title":<>Title 1</>,"content":"<><p>content here</p></>","node":"<>Jan 2</>}]` |
| `arrowPrevIcon` | ReactNode  | - | Previous arrow icon |
| `arrowNextIcon` | ReactNode  | - | Next arrow icon |


Array configuration properties of the `data`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | string | - | Specifies the path to the image |
| `title` | ReactNode | - | Specifies a title for each item |
| `content` | ReactNode | - | Specifies a content for each item |
| `node` | ReactNode | - | Specifies a time-node for each item |



## Examples

```js
import React from 'react';
import Timeline from '@/components/Timeline/index.tsx';


const data = [
	{
		"url": "/path/demo.png",
		"title": <>Timeline Title Here 1</>,
		"content": <><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p></>,
		"node": <>Feb 19</>
	},
	{
		"url": "/path/demo.png",
		"title": <>Timeline Title Here 2</>,
		"content": <><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></>,
		"node": <>Jan 15</>
	},
	{
		"url": "/path/demo.png",
		"title": <>Timeline Title Here 3</>,
		"content": <><p>Gaudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p></>,
		"node": <>Jan 8</>
	},
	{
		"url": "/path/demo.png",
		"title": <>Timeline Title Here 4</>,
		"content": <><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p></>,
		"node": <>Jan 7</>
	},
	{
		"url": "/path/demo.png",
		"title": <>Timeline Title Here 5</>,
		"content": <><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p></>,
		"node": <>Jan 5</>
	},
	{
		"url": "/path/demo.png",
		"title": <>Timeline Title Here 6</>,
		"content": <><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></>,
		"node": <>Jan 3</>
	},
	{
		"url": "/path/demo.png",
		"title": <>Timeline Title Here 7</>,
		"content": <><p>Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde</p></>,
		"node": <>Jan 1</>
	}
];


export default () => {
  return (
    <>

      <h3>Timeline (Vertical)</h3>
      {/* ================================================================== */}
      <Timeline 
        speed={500} 
        easing="easeInOut" 
        direction="vertical"
        data={data}
      />

      <h3>Timeline (Vertical & Centered)</h3>
      {/* ================================================================== */}
      <Timeline 
        speed={500} 
        easing="easeInOut" 
        direction="vertical"
        centered={true}
        data={data}
      />


      <h3>Timeline Interaction (Horizontal)</h3>
      {/* ================================================================== */}
      <Timeline 
        interactiveEnabled={true} 
        speed={500} 
        easing="easeInOut" 
        direction="horizontal"
        data={data}
        arrowPrevIcon={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
        arrowNextIcon={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
      />

      <h3>Timeline Interaction (Horizontal & Centered)</h3>
      {/* ================================================================== */}
      <Timeline 
        interactiveEnabled={true} 
        speed={500} 
        easing="easeInOut" 
        direction="horizontal"
        centered={true}
        data={data}
        arrowPrevIcon={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
        arrowNextIcon={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
      />


      <h3>Timeline Interaction (Horizontal & Only 1 Description Block Display)</h3>
      <p>Only one Item will be displayed each time you switch. Only available when <code>interactiveEnabled</code> is true.</p>
      {/* ================================================================== */}
      <Timeline 
        interactiveEnabled={true} 
        focusEnabled={true} 
        speed={500} 
        easing="easeInOut" 
        direction="horizontal"
        data={data}
        arrowPrevIcon={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
        arrowNextIcon={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
      />

      {/*    /////////////////////////   */} 

      <Timeline 
        interactiveEnabled={true} 
        focusEnabled={true} 
        focusCenteredEnabled={true} 
        speed={500} 
        easing="easeInOut" 
        direction="horizontal"
        data={data}
        arrowPrevIcon={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
        arrowNextIcon={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
      />



      <h3>Timeline Interaction (Vertical & Only 1 Description Block Display)</h3>
      <p>Only one Item will be displayed each time you switch. Only available when <code>interactiveEnabled</code> is true.</p>
      {/* ================================================================== */}
      <Timeline 
        interactiveEnabled={true} 
        focusEnabled={true} 
        speed={500} 
        easing="easeInOut" 
        direction="vertical"
        data={data}
        arrowPrevIcon={<><i className="fa fa-angle-up" aria-hidden="true"></i></>}
        arrowNextIcon={<><i className="fa fa-angle-down" aria-hidden="true"></i></>}
      />

      {/*    /////////////////////////   */}

      <Timeline 
        interactiveEnabled={true} 
        focusEnabled={true} 
        speed={500} 
        easing="easeInOut" 
        direction="vertical"
        centered={true}
        data={data}
        arrowPrevIcon={<><i className="fa fa-angle-up" aria-hidden="true"></i></>}
        arrowNextIcon={<><i className="fa fa-angle-down" aria-hidden="true"></i></>}
      />


    </>
  );
}

```