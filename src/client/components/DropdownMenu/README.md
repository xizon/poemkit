# @uixkit.react/components/DropdownMenu

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/DropdownMenu)

## Version

=> 0.0.1

## API

### Dropdown Menu
```js
import DropdownMenu from '@uixkit.react/components/DropdownMenu/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string  | - | Set a name for the form field for this component. Name is not deprecated when used with form fields. |
| `defaultLabel` | string  | - | Specify a default label text |
| `options` | array  | - | Specify data of Dropdown Menu as a JSON string format. Such as: <br /> `[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"}]` |



## Examples

```js
import React from 'react';
import DropdownMenu from '@uixkit.react/components/DropdownMenu/index.tsx';

export default () => {
  return (
    <>

      <h3>Dropdown Menu</h3>
      <p>Click the hyperlink to display the drop-down menu</p>
      {/* ================================================================== */} 
      <DropdownMenu 
        name="app-ddmenu-1"
        options={[
          { label: "Option 1", value: "option-1" },
          { label: "Option 2", value: "option-2" },
          { label: "Option 3", value: "option-3" }
        ]}
      />

      <DropdownMenu 
          name="app-ddmenu-2"
        defaultLabel="Click Me" 
        options={[
          { label: "Boy", value: "boy" },
          { label: "Girl", value: "girl" }
        ]}
      />


    </>
  );
}

```