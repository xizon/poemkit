# @/components/ImageShapes

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/ImageShapes)

## Version

=> 0.0.1 (October 22, 2021)

## API

### Image Shapes
```js
import ImageShapes from '@/components/ImageShapes/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `path` | string  | - | Set a element path to create lines, curves, arcs, and more. |
| `src` | string  | - | Specifies the path to the image |
| `containerWidth` | number  | - | Set a specified width for the container that it is not the size of the image. Measured in pixels |
| `containerHeight` | number  | - | Set a specified height for the container that it is not the size of the image. Measured in pixels |
| `imgExpectedWidth` | number  | - | Set a desired width value for the image |


### Custom Image Shapes
Use **Adobe Illustrator** to make SVG file and copy its code. **File > Export > Export for Screens**.
Note: SVG code must be a single path, the `containerWidth` and `containerHeight` attributes is the original size of the SVG graphics, `imgExpectedWidth` attribute is wanted the size of the displayed image which it cannot be smaller than the width of the SVG.

```html
<svg fill-rule="evenodd" clip-rule="evenodd" width="300px" height="300px" viewBox="0 0 300 300">
    <path fill="#191616" d="M105.1,18.4l154.2,184.3C259.3,202.7,49.7,208.7,105.1,18.4z"/>
</svg>
```



## Examples

```js
import React from 'react';
import ImageShapes from '@/components/ImageShapes/index.tsx';

export default () => {
  return (
    <>

        <ImageShapes
          containerWidth={200}
          containerHeight={200}
          imgExpectedWidth={400}
          path="M100,0L0,200c0,0,0,0,0,0h200c0,0,0,0,0,0L100,0C100,0,100,0,100,0z"
          src={`/path/demo.png`} />

    </>
  );
}

```