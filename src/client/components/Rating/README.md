# @poemkit/components/Rating

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/Rating)

## Version

=> 0.0.1 (November 27, 2021)

## API

### Rating
```js
import Rating from '@poemkit/components/Rating/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string  | - | Set a name for the form field for this component |
| `activeColor` | string  | #ff851b | Active color for shape |
| `inactiveColor` | string  | #333 | Inactive color for shape |
| `repeated` | boolean  | false | When true, do not allow repeated selection |
| `stars` | number  | 0 | Specify a rating number, an integer `0` to `5` |
| `refreshCallback` | function \| null  | - | This function is called whenever the data is updated. Exposes the JSON format data about the page number as an argument. |


## Examples

```js
import React from 'react';
import Rating from '@poemkit/components/Rating/index.tsx';

export default () => {
  return (
    <>

      <Rating name="app-rating-0" />
      <Rating name="app-rating-1" stars={1} refreshCallback={ (newRating) => { console.log(`The new rating is: ${newRating}`) } } /> (contains callback function)
      <Rating name="app-rating-2" stars={2} />
      <Rating name="app-rating-3" stars={3} repeated={true} /> (can be selected multiple times)
      <Rating name="app-rating-4" stars={4} repeated={true} /> (can be selected multiple times)
      <Rating name="app-rating-5" stars={3} activeColor="blue" inactiveColor="#ddd" /> (custom colors)

    </>
  );
}

```