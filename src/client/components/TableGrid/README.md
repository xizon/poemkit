# @uixkit.react/components/TableGrid

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/TableGrid)

## Version

=> 0.0.1


## Examples

```js
import React from 'react';
import TableGrid from '@uixkit.react/components/TableGrid/index.tsx';


const data1 = {
	"headers": ["COLUMN TITLE 1","COLUMN TITLE 2","COLUMN TITLE 3"],
	"fields": [
		{
			"target": false, 
			 "data": [
			   {"cols": 1, "content": "Row Item Alpha" },
			   {"cols": 1, "content": "Row Item Alpha" },
			   {"cols": 1, "content": "Row Item Alpha"}
			] 
		},
		{
			"target": true, 
			 "data": [
			   {"cols": 1, "content": "Row Item Bravo" },
			   {"cols": 1, "content": "Row Item Bravo" },
			   {"cols": 1, "content": "Row Item Bravo"}
			] 
		},
		{
			"target": false, 
			 "data": [
			   {"cols": 1, "content": "Row Item Charlie" },
			   {"cols": 1, "content": "Row Item Charlie" },
			   {"cols": 1, "content": "Row Item Charlie"}
			] 
		},
		{
			"target": false, 
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
	  
	    <TableGrid className="uix-table-grid" data={data1} />
				
    </>
  );
}

```