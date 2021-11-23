# @poemkit/components/Gallery

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/Gallery)

## Version

=> 0.0.1 (October 14, 2021)

## API

### Gallery
```js
import Gallery from '@poemkit/components/Gallery/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | array | - | Specify data of images as a JSON string format. Such as: <br />`[{"title":"Image Title 1","url":"xxx.jpg"},{"title":"Image Title 2","url":"xxx.jpg"}]` |
| `fixedColumns` | number  | 1 | Set numbers of columns on a gallery page. The value range is an integer from `1` to `8` |



Array configuration properties of the `data`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | string \| boolean | - | Specifies an alternate and title text for the image |
| `url` | string | - | Specifies the path to the image |



## Examples

```js
import React from 'react';
import Gallery from '@poemkit/components/Gallery/index.tsx';

export default () => {
  return (
    <>

      <Gallery fixedColumns={3} data={[
                      {"title":"Image Title", "url":`/path/demo.png`},
                      {"title":"Image Title", "url":`/path/demo.png`},
                      {"title":"Image Title", "url":`/path/demo.png`},
                      {"title":"Image Title", "url":`/path/demo.png`},
                      {"title":"Image Title", "url":`/path/demo.png`},
                      {"url":`/path/demo.png`}
                      ]} />

    </>
  );
}

```