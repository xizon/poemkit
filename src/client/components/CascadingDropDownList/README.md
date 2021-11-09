# @poemkit/components/CascadingDropDownList

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/CascadingDropDownList)

## Version

=> 0.0.1 (October 14, 2021)

## API

### Cascading DropDown List
```js
import CascadingDropDownList from '@poemkit/components/CascadingDropDownList/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `api` | string  | - | <strong>(Required)</strong>API address to receive data |
| `name` | string  | - | Set a name for the form field for this component |
| `depth` | number  | 1 | Set the depth value of the control to control the display of the pop-up layer appear above. Please set it when multiple controls are used at the same time. |
| `method` | string  | post | Request method to be used when making the request. |
| `loader` | ReactNode  | - | Set a loader component to show while the component waits for the next load of data. e.g. `<span>Loading...</span>` or any fancy loader element |
| `value` | string  | - | Set a default value |
| `triggerTagName` | `a` \| `button` \| `div` \| `span`  | - | Tag name of the trigger. |
| `triggerClassName` | string  | - | Specify a class for this Node |
| `triggerContent` | ReactNode  | - | Set a piece of text or HTML code for the trigger |


### Create Callback 

A successful response returns the details of the callback such as Sample Request Body:

```json
[
    {
        "id": 1, 
        "name": "Text 1", 
        "children": [
            {
                "id": "1_1", 
                "name": "Text 1_1", 
                "children": [
                    {
                        "id": "1_1_1", 
                        "name": "Text 1_1_1"
                    },
                    {
                        "id": "1_1_2", 
                        "name": "Text 1_1_2"
                    },
                    {
                        "id": "1_1_3", 
                        "name": "Text 1_1_3"
                    }
                ]
            }, 
            {
                "id": "1_2", 
                "name": "Text 1_2", 
                "children": [
                    {
                        "id": "1_2_1", 
                        "name": "Text 1_2_1", 
                        "children": [
                            {
                                "id": "1_2_1_1", 
                                "name": "Text 1_2_1_1"
                            },
                            {
                                "id": "1_2_1_2", 
                                "name": "Text 1_2_1_2"
                            }
                        ]
                    }
                ]
            }
        ]
    }, 
    {
        "id": 2, 
        "name": "Text 2", 
        "children": [
            {
                "id": "2_1", 
                "name": "Text 2_1", 
                "children": [
                    {
                        "id": "2_1_1", 
                        "name": "Text 2_1_1"
                    }
                ]
            }, 
            {
                "id": "2_2", 
                "name": "Text 2_2", 
                "children": [
                    {
                        "id": "2_2_1", 
                        "name": "Text 2_2_1"
                    }
                ]
            }
        ]
    }, 
	{
		"id": 3, 
		"name": "Text 3", 
		"children": [
			{
				"id": "3_1", 
				"name": "Text 3_1"
			}, 
			{
				"id": "3_2", 
				"name": "Text 3_2"
			}, 
			{
				"id": "3_3", 
				"name": "Text 3_3"
			}
		]
	},
    {
        "id": 4, 
        "name": "Text 4"
    },
    {
        "id": 5, 
        "name": "Text 5"
    },
    {
        "id": 6, 
        "name": "Text 6"
    }
]
```



## Examples

```js
import React from 'react';
import CascadingDropDownList from '@poemkit/components/CascadingDropDownList/index.tsx';

export default () => {
  return (
    <>


      <CascadingDropDownList 
        depth={2}
        name="dd-menu-name-1"
        api="https://api.url" 
        loader={<><span>Loading...</span></>}
        method="get"
        triggerTagName="a" 
        triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__size--s poemkit-btn__bg--secondary is-pill is-fill-white" 
        triggerContent={<>
          Select
        </>}
      />
      <br /><br />


      <CascadingDropDownList 
        depth={1}
        name="dd-menu-name-2"
        api="https://api.url" 
        loader={<><span>Loading...</span></>}
        method="get"
        value="YourDefaultValue"
        triggerTagName="a" 
        triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__size--s poemkit-btn__bg--secondary is-pill is-fill-white" 
        triggerContent={<>
          Select
        </>}
      />

    </>
  );
}

```