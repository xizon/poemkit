# @/components/Lightbox

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/Lightbox)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Lightbox
```js
import Lightbox from '@/components/Lightbox/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | boolean \| string \| array | - | The address of the image, you can use an array to lay out the image sequence, such as `[{"thumb":"path/1.jpg","large":"path/1.jpg"},{"thumb":"path/2.jpg","large":"path/2.jpg"}]` |
| `fixed` | boolean  | true | Whether to fix the pop-up window |
| `ajax` | boolean \| JSON Object Literals | 0 | A set of key/value pairs that configure the Ajax request, such as `{"target":"#my-ajax-demo-target-button","method":"POST","url":"https://xxx.com"}` |
| `triggerTagName` | `a` \| `button` \| `div` \| `span`  | - | Tag name of the trigger. |
| `triggerClassName` | string  | - | Specify a class for this Node |
| `triggerContent` | ReactNode  | - | Set a piece of text or HTML code for the trigger |
| `htmlContent` | ReactNode  | - | A string of HTML to set as the content |



## Examples

```js
import React from 'react';
import Lightbox from '@/components/Lightbox/index.tsx';

export default () => {
  return (
    <>

      <h3>Display Images</h3>
      {/* ================================================================== */} 

      <Lightbox 
        src={`/path/demo.png`}
        triggerTagName="a" 
        triggerClassName="d-inline-block" 
        triggerContent={<>
          <img height="120" className="rounded p-1 m-2 border border-primary" src={`/path/demo.png`} alt="Click Me To Show Image" />
        </>} />

      <Lightbox 
        src={`[
          {"thumb":"/path/demo.png","large":"/path/demo.png"}, 
          {"thumb":"/path/demo.png","large":"/path/demo.png"}, 
          {"thumb":"/path/demo.png","large":"/path/demo.png"}
          ]`}
        triggerTagName="a" 
        triggerClassName="d-inline-block" 
        triggerContent={<>
          <img height="120" className="rounded p-1 m-2 border border-primary" src={`/path/demo.png`} alt="Click Me To Show Multiple Image" />
        </>} />

      <Lightbox 
        fixed={false}
        src={`/path/demo.png`}
        triggerTagName="a" 
        triggerClassName="d-inline-block" 
        triggerContent={<>
          <img height="120" className="rounded p-1 m-2 border border-primary" src={`/path/demo.png`} alt="Click Me To Show Image (Not Fixed)" />
        </>} />


      <h3>Display HTML Code</h3>
      {/* ================================================================== */} 
  
      <Lightbox 
        triggerTagName="a" 
        triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--primary" 
        triggerContent={<>
          Click Me To Show HTML Code
        </>}
        htmlContent={<>
          <div className="text-left">
            <p>
              <h5>Title 1</h5>
            </p>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <a href="https://example.com" target="_blank">This is link</a></p>

            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. <a href="https://example.com" target="_blank">Curabitur blandit tempus porttitor</a>. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Super/Duper/Long/NonBreaking/Path/Name/To/A/File/That/Is/Way/Deep/Down/In/Some/Mysterious/Remote/Desolate/Part/Of/The/Operating/System/To/A/File/That/Just/So/Happens/To/Be/Strangely/Named/Supercalifragilisticexpialidocious.txt</p>

          </div>
        </>} />
          
    
      <Lightbox 
        fixed={false}
        triggerTagName="a" 
        triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--primary" 
        triggerContent={<>
          Click Me To Show HTML Code (Not Fixed)
        </>}
        htmlContent={<>
          <div className="text-left">
            <p>
              <h5>Title 2</h5>
            </p>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <a href="https://example.com" target="_blank">This is link</a></p>

            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. <a href="https://example.com" target="_blank">Curabitur blandit tempus porttitor</a>. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Super/Duper/Long/NonBreaking/Path/Name/To/A/File/That/Is/Way/Deep/Down/In/Some/Mysterious/Remote/Desolate/Part/Of/The/Operating/System/To/A/File/That/Just/So/Happens/To/Be/Strangely/Named/Supercalifragilisticexpialidocious.txt</p>
          </div>

        </>} />
        
    
      <h3>AJAX Request</h3>
      {/* ================================================================== */} 
    
      <Lightbox 
        fixed={false}
        ajax={`{"target":"#app-home-description","method":"GET","url":"/index"}`}
        triggerTagName="a" 
        triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--primary" 
        triggerContent={<>
          Click Me To Add <strong>"Home"</strong> Elements
        </>} />


    </>
  );
}

```