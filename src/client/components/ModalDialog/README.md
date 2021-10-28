# @uixkit.react/components/ModalDialog

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/ModalDialog)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Modal Dialog
```js
import ModalDialog from '@uixkit.react/components/ModalDialog/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `height` | number \| string \| boolean  | false | Custom modal height whick need a unit string. Such as: `200px` |
| `width` | number \| string \| boolean  | false | Custom modal width whick need a unit string. Such as: `200px` |
| `lightbox` | boolean  | true | Whether to enable the lightbox effect |
| `closeOnlyBtn` | boolean  | false | Disable mask to close the window |
| `fullscreen` | boolean  | false | Toggles whether fullscreen should be enabled |
| `heading` | ReactNode  | - | Set a window title |
| `triggerTagName` | `a` \| `button` \| `div` \| `span`  | - | Tag name of the trigger. |
| `triggerClassName` | string  | - | Specify a class for this Node |
| `triggerContent` | ReactNode  | - | Set a piece of text or HTML code for the trigger |
| `autoClose` | number \| boolean  | false | Specify auto-close time. This function is not enabled when this value is false. If the value is `2000`, it will automatically close after 2 seconds. |
| `autoOpen` | boolean  | false | Automatically open the component, you can use it with the `autoClose` property at the same time |
| `enableVideo` | boolean  | false | Adapt the video to the window. For example, the content of the component can be written as: `<iframe width="560" height="315" src="https://www.youtube.com/xxx" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>` <br /> or <br />`<video playsInline controls poster="/assets/videos/480x270/demo.jpg" src="/assets/videos/480x270/demo.mp4"></video>` |



## Examples

```js
import React from 'react';
import ModalDialog from '@uixkit.react/components/ModalDialog/index.tsx';

export default () => {
  return (
    <>

      <h3>Modal Dialog</h3>
      <p>A modal dialog is a pop-window that forces the user to interact with it before they can go back to using the parent application.</p>
      {/* ================================================================== */}
      <ModalDialog 
      autoOpen={false}
      triggerTagName="a" 
      triggerClassName="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary" 
      triggerContent={<>
        Click Here to Open Modal
      </>}>
        <h2>Holy Crap!!!</h2>
        <p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p>
      </ModalDialog>
      
      <ModalDialog 
      fullscreen={true} 
      triggerTagName="a" 
      triggerClassName="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary" 
      triggerContent={<>
        Click Here to Open Modal (Fullscreen)
      </>}>
        <h2>Full Screen Here</h2>
        <p>p.s. Sorry for calling you a dingus earlier.</p>
      </ModalDialog>
      
      <ModalDialog 
      width="300px"
      height="200px"
      triggerTagName="a" 
      triggerClassName="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary" 
      triggerContent={<>
        Click Here to Open Modal (Custom)
      </>}>
        <h2>Holy Crap!!!</h2>
        <p>p.s. Sorry for calling you a dingus earlier.</p>
      </ModalDialog>
      

      <ModalDialog 
      lightbox={false}
      width="300px"
      height="200px"
      triggerTagName="a" 
      triggerClassName="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary" 
      triggerContent={<>
        Click Here to Open Modal (No mask)
      </>}>
        <h2>No Mask</h2>
        <p>Content here...</p>
      </ModalDialog>


      <h3>Modal Dialog (Video)</h3>
      <p>Use the following HTML code to fire video.</p>
      {/* ================================================================== */}
      <ModalDialog 
        enableVideo={true}
        triggerTagName="a" 
        triggerClassName="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary" 
        triggerContent={<>
          Click Here to Open MP4 file
        </>}>
          <video playsInline controls poster="/assets/videos/480x270/demo.jpg" src="/assets/videos/480x270/demo.mp4"></video>
        </ModalDialog>
        
        <ModalDialog 
        enableVideo={true}
        triggerTagName="a" 
        triggerClassName="uix-btn uix-btn__border--thin uix-btn__margin--b uix-btn__size--s uix-btn__bg--primary" 
        triggerContent={<>
          Click Here to Open Youtube Video
        </>}>
          <iframe width="560" height="315" src="https://www.youtube.com/xxx" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </ModalDialog>


      <h3>Automatically open the pop-up window</h3>
      {/* ================================================================== */}
      <ModalDialog 
      autoOpen={true}
      autoClose={3000}
      width="600px"
      height="300px"
      triggerTagName="a" 
      triggerClassName="d-none" 
      triggerContent={<></>}>
        <h4>This window will automatically close after 3 seconds :)</h4>
        <p>You can click the button on the page to trigger the pop-up window.</p>
      </ModalDialog>
      


    </>
  );
}

```