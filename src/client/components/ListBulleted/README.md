# @/components/ListBulleted

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/ListBulleted)

## Version

=> 0.0.1 (November 22, 2021)

## API

### List Bulleted
```js
import { ListBulleted } from '@/components/ListBulleted/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `icon` \| `dot` \| `numbered` \| `numbered-large` \| `numbered-large-bg` \| `numbered-step` | - | <strong>(Required)</strong> Sets the marker (such as a disc, character, or custom counter style) of a list item element. |
| `leadingZero` | boolean  | false | Add a leading zero is any 0 digit that comes before the first nonzero digit in a number string in positional notation. Only valid for lists with numbered type. |


### List Bulleted Item
```js
import { ListBulletedItem } from '@/components/ListBulleted/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `icon` \| `dot` \| `numbered` \| `numbered-large` \| `numbered-large-bg` \| `numbered-step`  | - | Sets the marker (such as a disc, character, or custom counter style) of a list item element. |
| `marker` | ReactNode | - | Set the display content of the marker, it will change according to different types. |


## Examples

```js
import React from 'react';
import { ListBulleted, ListBulletedItem } from '@/components/ListBulleted/index.tsx';

export default () => {
  return (
    <>

      <h3>Icons Ordered List</h3>
      {/* ================================================================== */}
      
      <ListBulleted type="icon">
        <ListBulletedItem marker={<><i className="fa fa-check-square-o" aria-hidden="true"></i></>}>Here's bullet point number one</ListBulletedItem>
        <ListBulletedItem marker={<><i className="fa fa-check-square-o" aria-hidden="true"></i></>}>Now for the second point</ListBulletedItem>
        <ListBulletedItem marker={<><i className="fa fa-check-square-o" aria-hidden="true"></i></>}>You guessed it, here comes the third</ListBulletedItem>
        <ListBulletedItem marker={<><i className="fa fa-check-square-o" aria-hidden="true"></i></>}>A fourth bullet point just to be safe</ListBulletedItem>		
      </ListBulleted>


      <h3>Custom Bullets Ordered List</h3>
      {/* ================================================================== */}
      
      <ListBulleted type="dot">
        <ListBulletedItem>Line Item #1</ListBulletedItem>
        <ListBulletedItem>Line Item #2</ListBulletedItem>
        <ListBulletedItem>Line Item #3</ListBulletedItem>
        <ListBulletedItem>Line Item #4</ListBulletedItem>
        <ListBulletedItem>Line Item #5</ListBulletedItem>
      </ListBulleted>


      <h3>Numbers Ordered List</h3>
      {/* ================================================================== */}
      
      <ListBulleted type="numbered">
        <ListBulletedItem>Line Item #1</ListBulletedItem>
        <ListBulletedItem>Line Item #2</ListBulletedItem>
        <ListBulletedItem>Line Item #3</ListBulletedItem>
        <ListBulletedItem>Line Item #4</ListBulletedItem>
        <ListBulletedItem>Line Item #5</ListBulletedItem>
      </ListBulleted>

    
      <ListBulleted type="numbered" leadingZero={true}>
        <ListBulletedItem>Line Item #1</ListBulletedItem>
        <ListBulletedItem>Line Item #2</ListBulletedItem>
        <ListBulletedItem>Line Item #3</ListBulletedItem>
        <ListBulletedItem>Line Item #4</ListBulletedItem>
        <ListBulletedItem>Line Item #5</ListBulletedItem>
      </ListBulleted>


      <ListBulleted type="numbered-large">
        <ListBulletedItem marker={<>This is the First Heading</>}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </ListBulletedItem>
        <ListBulletedItem marker={<>This is the Second Heading</>}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque tortor non erat sodales, in tristique dui convallis.</p>
        </ListBulletedItem>
        <ListBulletedItem marker={<>This is the Third Heading</>}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque tortor non erat sodales, in tristique dui convallis. Mauris sed mi nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </ListBulletedItem>
      </ListBulleted>


      <ListBulleted type="numbered-large-bg" leadingZero={true}>
        <ListBulletedItem><p>Consectetur adipiscing elit.</p></ListBulletedItem>
        <ListBulletedItem><p>This is the Second heading</p></ListBulletedItem>
        <ListBulletedItem><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></ListBulletedItem>
      </ListBulleted>
      


      <h3>Step Timeline By Numbers</h3>
      {/* ================================================================== */}
      
      <ListBulleted type="numbered-step">
        <ListBulletedItem marker={<>Step 1</>}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </ListBulletedItem>
        <ListBulletedItem marker={<>Step 2</>}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque tortor non erat sodales, in tristique dui convallis. Mauris sed mi nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </ListBulletedItem>
        <ListBulletedItem marker={<>Step 3</>}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </ListBulletedItem>
        <ListBulletedItem marker={<>Step 4</>}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </ListBulletedItem>
        <ListBulletedItem marker={<>Step 5</>}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </ListBulletedItem>
      </ListBulleted>

						

    </>
  );
}

```