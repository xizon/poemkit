# @uixkit.react/components/ProgressBar

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/ProgressBar)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Progress Bar
```js
import ProgressBar from '@uixkit.react/components/ProgressBar/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | `circle` \| `annulus` \| `rectangle`  | - | Set a shape that circle, annulus or rectangle shaped progress bar |
| `unit` | string  | - | Set a unit that is percentage for progress bar, such as `%` |
| `value` | number  | 0 | Set a percentage you want to show |
| `label` | React.ReactNode  | 0 | Reference to div element which presents the text label for progress bar. Returns empty if text is not defined. |
| `displayPercentage` | boolean  | false | Whether to display percentage |



## Examples

```js
import React from 'react';
import ProgressBar from '@uixkit.react/components/ProgressBar/index.tsx';

export default () => {
  return (
    <>

      <h3>Radial Progress Bar</h3>
      <p>Scroll the page down to preview</p>
      {/* ================================================================== */} 
      
      <ProgressBar shape="circle" unit="%" value={30} label="Title 1" displayPercentage={true} />
      <ProgressBar shape="circle" unit="%" value={45} label="Title 2" displayPercentage={true} />
      <ProgressBar shape="circle" unit="%" value={66} label="Title 3" displayPercentage={true} />

      <h3>Hollow Circle (Annulus) Progress Bar</h3>
      {/* ================================================================== */} 
      
      <ProgressBar shape="annulus" unit="%" value={100} label="Title 1" displayPercentage={true} />
      <ProgressBar shape="annulus" unit="%" value={55} label="Title 2" displayPercentage={true} />
      <ProgressBar shape="annulus" unit="%" value={18} label="Title 3" displayPercentage={true} />

      <h3>Horizontal Rectangle Progress Bar</h3>
      {/* ================================================================== */} 

      <ProgressBar shape="rectangle" unit="%" value={30} label="Title 1" displayPercentage={true} />
      <ProgressBar shape="rectangle" unit="%" value={57} label="Title 2" displayPercentage={true} />
      <ProgressBar shape="rectangle" unit="%" value={100} label="Title 3" displayPercentage={true} />

    </>
  );
}

```