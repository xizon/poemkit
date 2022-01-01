# @/components/Toaster

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/Toaster)

## Version

=> 0.0.1 (November 27, 2021)

## API

### Toaster
```js
import Toaster from '@/components/Toaster/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `left` \| `center` \| `right`  | center | The direction of the toaster |
| `autoCloseTime` | boolean \| number  | false | Set an automatic closing time, multiple items will be accumulated in order. Amount of time measured in milliseconds. If false or without this attribute, Auto-Close will be disabled. |
| `data` | array | - | Specify data of toasts as a JSON string format. Such as: <br />`[{"title":"Title 1","message":"description..."},{"title":"Title 2","message":"description..."}]` |



Array configuration properties of the `data`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | string \| boolean | - | Specifies an alternate and title text for the toast |
| `message` | ReactNode | - | Specifies the content, or HTML elements to the toast |



## Examples

```js
import React from 'react';
import Toaster from '@/components/Toaster/index.tsx';

export default () => {
  return (
    <>

      <Toaster direction="right" autoCloseTime={3000} data={[
        { title: "Toast one", message: "First..." },
        { title: "Toast two", message: "Source of radiant heat." },
        { title: "Toast three", message: "ok!" },
        { title: "Toast four", message: "Last item here..." }
      ]} />
            
      <Toaster direction="center" autoCloseTime={false} data={[
        { title: false, message: <><div style={{fontSize:"14px"}}>This is <span style={{color:"orange"}}>orange</span> text</div></> }
      ]} />	

    </>
  );
}

```