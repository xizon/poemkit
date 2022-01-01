# @/components/DropdownMenu

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/DropdownMenu)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Dropdown Menu
```js
import DropdownMenu from '@/components/DropdownMenu/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string  | - | Set a name for the form field for this component. Name is not deprecated when used with form fields. |
| `defaultLabel` | string  | - | Specify a default label text |
| `options` | array  | - | Specify data of Dropdown Menu as a JSON string format. Such as: <br /> `[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"}]` |
| `btnIcon` | ReactNode  | - | Button Icon |
| `optionChangeCallback` | function \| null  | - | This function is called whenever the data is updated. Exposes the JSON format data about the option as an argument. You can use it like this: `(res) => console.log(res.value)` |


Array configuration properties of the `options`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | string | - | Specify the label text for each option |
| `value` | string | - | Specify the value for each option |




## Examples

```js
import React from 'react';
import DropdownMenu from '@/components/DropdownMenu/index.tsx';

export default () => {
  return (
    <>

      <h3>Dropdown Menu</h3>
      <p>Click the hyperlink to display the drop-down menu</p>
      {/* ================================================================== */} 
      <DropdownMenu 
        btnIcon={<><i className="fa fa-cog" aria-hidden="true"></i> </>}
        name="app-ddmenu-1"
        options={[
          { label: "Option 1", value: "option-1" },
          { label: "Option 2", value: "option-2" },
          { label: "Option 3", value: "option-3" }
        ]}
      />

      <DropdownMenu 
          btnIcon={<><i className="fa fa-cog" aria-hidden="true"></i> </>}
          name="app-ddmenu-2"
          defaultLabel="Click Me (contains callback function)" 
          options={[
            { label: "Boy", value: "boy" },
            { label: "Girl", value: "girl" }
          ]}
          optionChangeCallback={(res) => console.log(res.value)}
      />


    </>
  );
}

```