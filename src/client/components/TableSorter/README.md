# @uixkit.react/components/TableSorter

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/TableSorter)

## Version

=> 0.0.1


## API

### Table Sorter
```js
import TableSorter from '@uixkit.react/components/TableSorter/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | JSON Object Literals | - | Specify data of Table as a JSON string format. Such as: <br />**usage:**<br />`{"headers": [{"type": false, "content": "Index" },{"type": "number", "content": "Money" },{"type": "text", "content": "Name" },{"type": "number", "content": "No." },{"type": "date", "content": "Date1" },{"type": "date", "content": "Date2" }],"fields":[[{"cols":1,"content":"1"},{"cols":1,"content":"$55.134"},{"cols":1,"content":"David Lin"},{"cols":1,"content":"3453434"},{"cols":1,"content":"2012-09-25T12:10:46+00:00"},{"cols":1,"content":"May 22, 2003"}],[{"cols":1,"content":"2"},{"cols":1,"content":"$255.12"},{"cols":1,"content":"Co Cheey"},{"cols":1,"content":"-2324.343"},{"cols":1,"content":"2013-09-10T12:10:46+00:00"},{"cols":1,"content":"September 13, 2013"}]]};` |
| `bordered` | boolean  | false | Adds borders on all sides of the table and cells |
| `noborder` | boolean  | false | Removes all borders on the table and cells, including table header |
| `horizontal` | boolean  | false | Use the horizontal split effect for each row. Includes a header cell(\<th\> tag) with this attribute. |
| `alternantRow` | boolean  | false | Apply alternating row color in dynamically created table |
| `alternantCol` | boolean  | false | Apply alternating column color in dynamically created table |
| `perLine` | boolean  | false | Only use the horizontal splitting effect for each row. |
| `responsive` | boolean  | false | Create responsive tables up to a particular breakpoint. |
| `responsiveWithScrollBar` | boolean  | false | Create responsive tables up to a particular breakpoint. This property allows scroll bars to be created automatically in the table. <br />**Only one of the `responsive` and `responsiveWithScrollBar` properties is allowed, and both are invalid if set to true.** |



JSON configuration properties of the `data`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `fields` | array | - | Table rows and columns. The key `cols` identifies the column (change the value if the column is merged). The key `content` to place the content of each cell. Eg. `[[{"cols":1,"content":"1"},{"cols":1,"content":"$55.134"},{"cols":1,"content":"David Lin"},{"cols":1,"content":"3453434"},{"cols":1,"content":"2012-09-25T12:10:46+00:00"},{"cols":1,"content":"May 22, 2003"}],[{"cols":1,"content":"2"},{"cols":1,"content":"$255.12"},{"cols":1,"content":"Co Cheey"},{"cols":1,"content":"-2324.343"},{"cols":1,"content":"2013-09-10T12:10:46+00:00"},{"cols":1,"content":"September 13, 2013"}]]` |
| `headers` | array | - | Defines a header cell in an HTML table. The key `type` is used to specify the type of sorting for each column (Type of sorted values: `false`, `'number'`, `'text'` or `'date'`). The key `content` is the value of each field. Eg. `[{"type": false, "content": "Index" },{"type": "number", "content": "Money" },{"type": "text", "content": "Name" },{"type": "number", "content": "No." },{"type": "date", "content": "Date1" },{"type": "date", "content": "Date2" }]` |


## Examples

```js
import React from 'react';
import TableSorter from '@uixkit.react/components/TableSorter/index.tsx';



const data1 = {
	"headers": [
		{"type": false, "content": "Index" },
	    {"type": "number", "content": "Money" },
		{"type": "text", "content": "Name" },
		{"type": "number", "content": "No." },
		{"type": "date", "content": "Date1" },
		{"type": "date", "content": "Date2" }
	],
	"fields": [
		[
			{"cols": 1, "content": "1" },
			{"cols": 1, "content": "$55.134" },
			{"cols": 1, "content": "David Lin" },
			{"cols": 1, "content": "3453434"},
			{"cols": 1, "content": "2012-09-25T12:10:46+00:00"},
			{"cols": 1, "content": "May 22, 2003"}
			
		],
		[
			{"cols": 1, "content": "2" },
			{"cols": 1, "content": "$255.12" },
			{"cols": 1, "content": "Co Cheey" },
			{"cols": 1, "content": "-2324.343"},
			{"cols": 1, "content": "2013-09-10T12:10:46+00:00"},
			{"cols": 1, "content": "September 13, 2013"}
		],	
		[
			{"cols": 1, "content": "3" },
			{"cols": 1, "content": "$21.134" },
			{"cols": 1, "content": "Foristin" },
			{"cols": 1, "content": "-34789.34"},
			{"cols": 1, "content": "2018-09-24T12:10:46+00:00"},
			{"cols": 1, "content": "January 2, 2019"}
		],	
		[
			{"cols": 1, "content": "4" },
			{"cols": 1, "content": "$3454.134" },
			{"cols": 1, "content": "Alice" },
			{"cols": 1, "content": "+224.5"},
			{"cols": 1, "content": "2011-09-21T12:10:46+00:00"},
			{"cols": 1, "content": "December 1, 2018"}
		],	
		[
			{"cols": 1, "content": "5" },
			{"cols": 1, "content": "$224.0" },
			{"cols": 1, "content": "Wooli" },
			{"cols": 1, "content": "+33.6"},
			{"cols": 1, "content": "2011-02-26T12:10:46+00:00"},
			{"cols": 1, "content": "July 22, 2017"}
		],	
		[
			{"cols": 1, "content": "6" },
			{"cols": 1, "content": "$356.2" },
			{"cols": 1, "content": "Spiter Low" },
			{"cols": 1, "content": "278.23487"},
			{"cols": 1, "content": "2019-01-01T12:10:46+00:00"},
			{"cols": 1, "content": "July 28, 2017"}
		]
		
	]
};


export default () => {
  return (
    <>

		<h3>Table Sorter</h3>
		<p>Users can filter and limit the data displayed within a long data table.</p>
		{/* ================================================================== */}      

		<TableSorter horizontal={true} alternantRow={true} data={data1} />

	  
	  
    </>
  );
}

```