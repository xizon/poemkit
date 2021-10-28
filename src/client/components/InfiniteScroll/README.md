# @uixkit.react/components/InfiniteScroll

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/InfiniteScroll)

## Version

=> 0.0.1 (October 14, 2021)

## API

### Infinite Scroll
```js
import InfiniteScroll from '@uixkit.react/components/InfiniteScroll/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `api` | string  | - | <strong>(Required)</strong> API address to receive data. |
| `perPage` | number  | 10 | The number of posts we want on the page before loading the next set. |
| `method` | `get` \| `post` | post | Request method to be used when making the request. |
| `loader` | ReactNode  | - | Set a loader component to show while the component waits for the next load of data. e.g. `<span>Loading...</span>` or any fancy loader element |
| `endMessage` | ReactNode  | - | This message is shown to the user when he has seen all the records. |
| `bottomOffset` | number  | 0 | Set an offset to scroll to the bottom |
| `refreshCallback` | function \| null  | - | This function is called whenever the data is updated, including initialization. Exposes the JSON format data about the page number as an argument. |
| `renderCallback` | function \| null  | - | Use the return function to render the data. The output HTML template uses custom HTML string in the returned JSON format data as a placeholder. Exposes each item data as an argument. You can use it like this: `(res) => {return <div key={"item" + res.id}><img src={res.avatar} />{res.name}</div>;}` |


### Create Callback 

A successful response returns the details of the callback such as Sample Request Body:

Page 1: 
```json
{
    "page": 1,
    "per_page": 3,
    "total": 5,
    "total_pages": 2,
    "data": [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "name": "George",
            "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "name": "Janet",
            "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "name": "Emma",
            "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
        }
    ]
}
```

Page 2:

```json
{
    "page": 2,
    "per_page": 3,
    "total": 5,
    "total_pages": 2,
    "data": [
        {
            "id": 4,
            "email": "george.bluth@reqres.in",
            "name": "George (Page 2)",
            "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
        },
        {
            "id": 5,
            "email": "janet.weaver@reqres.in",
            "name": "Janet (Page 2)",
            "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
        }
    ]
}
```


## Examples

```js
import React from 'react';
import InfiniteScroll from '@uixkit.react/components/InfiniteScroll/index.tsx';

const Item = ({ id, img, title, email }) => {
    return (
        <>
            <div className="row text-center text-md-left align-items-center">
                <div className="col-lg-2 col-md-2">
                    <img className="rounded mb-3" src={img} alt={title} />
                </div>
                <div className="col-lg-10 col-md-10 justify-content-center">
                    <h4 className="uix-spacing--no">{title} (ID:{id})</h4>
                    <span>Email: {email}</span>
                </div>

            </div>
            <hr />
        </>
    );
};

export default () => {
  return (
    <>

      <InfiniteScroll 
        api="https://api.url" 
        perPage={10}
        bottomOffset={0}
        loader={<><span>Loading...</span></>}
        endMessage={<><p className="uix-typo--color-sub uix-t-c">No content yet.</p></>}
        method="get"
        refreshCallback={(res) => console.log(res)}
        renderCallback={(res) => {
          return <Item key={"item" + res.id} id={res.id} img={res.avatar} title={`${res.name}`} email={res.email} />;
        }}	
      />

    </>
  );
}

```