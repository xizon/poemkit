# @/components/TableGrid

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/TableGrid)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Table Grid
```js
import TableGrid from '@/components/TableGrid/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | JSON Object Literals | - | Specify data of Table as a JSON string format. Such as: **usage:**<br />`{"headers": ["COLUMN TITLE 1","COLUMN TITLE 2"],"fields":[{"selected": false,"data": [{"cols": 1, "content": "Row Item Alpha" },{"cols": 1, "content": "Row Item Alpha" }]},{"selected": true,"data": [{"cols": 1, "content": "Row Item Bravo" },{"cols": 1, "content": "Row Item Bravo" }]}]}` |



JSON configuration properties of the `data`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `fields` | array | - | Table rows and columns. The key `cols` identifies the column (change the value if the column is merged). The key `content` to place the content of each cell. The key `selected` is used to activate a row. The key `data` is used to load the data of each column in each row. Eg. `[{"selected": false,"data": [{"cols": 1, "content": "Row Item Alpha" },{"cols": 1, "content": "Row Item Alpha" }]},{"selected": true,"data": [{"cols": 1, "content": "Row Item Bravo" },{"cols": 1, "content": "Row Item Bravo" }]}]` |
| `headers` | array | - | Defines a header cell in an HTML table. Eg. `["COLUMN TITLE 1","COLUMN TITLE 2"]` |



## Examples

```js
import React from 'react';
import TableGrid from '@/components/TableGrid/index.tsx';


const data1 = {
	"headers": ["COLUMN TITLE 1","COLUMN TITLE 2","COLUMN TITLE 3"],
	"fields": [
		{  
			 "selected": false, 
			 "data": [
			   {"cols": 1, "content": "Row Item Alpha" },
			   {"cols": 1, "content": "Row Item Alpha" },
			   {"cols": 1, "content": "Row Item Alpha"}
			] 
		},
		{
			 "selected": true, 
			 "data": [
			   {"cols": 1, "content": "Row Item Bravo" },
			   {"cols": 1, "content": "Row Item Bravo" },
			   {"cols": 1, "content": "Row Item Bravo"}
			] 
		},
		{
			 "selected": false, 
			 "data": [
			   {"cols": 1, "content": "Row Item Charlie" },
			   {"cols": 1, "content": "Row Item Charlie" },
			   {"cols": 1, "content": "Row Item Charlie"}
			] 
		},
		{
			 "selected": false, 
			 "data": [
			   {"cols": 1, "content": "Row Item Delta" },
			   {"cols": 1, "content": "Row Item Delta" },
			   {"cols": 1, "content": "Row Item Delta"}
			] 
		}
	]
};



export default () => {
  return (
    <>
		<h3>Row Dropzone</h3>
		<p>Not applicable to tables with <code>&lt;table&gt;</code></p>
		{/* ================================================================== */} 
	  
	    <TableGrid data={data1} />
				
    </>
  );
}

```