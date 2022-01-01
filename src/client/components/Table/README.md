# @/components/Table

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/Table)

## Version

=> 0.0.1 (October 10, 2021)


## API

### Table
```js
import Table from '@/components/Table/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | JSON Object Literals | - | Specify data of Table as a JSON string format. Such as: <br />**usage 1:**<br />`{"fields":[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }]]}` <br />**usage 2:**<br />`{"headers": ["No.","Name"],"fields":[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }]]};` <br />**usage 3:**<br />`{"fields":[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }],[{"cols": 4, "content": <><strong style={{background:"yellow"}}>A table cell that spans <span style={{color:"red"}}>4</span> columns</strong></> }]]}` |
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
| `fields` | array | - | Table rows and columns. The key `cols` identifies the column (change the value if the column is merged). The key `content` to place the content of each cell. Eg. `[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }]]` |
| `headers` | array | - | Defines a header cell in an HTML table. Eg. `["No.","Name"]` |



## Examples

```js
import React from 'react';
import Table from '@/components/Table/index.tsx';



const data1 = {
	"fields": [
		[
		   {"cols": 1, "content": "01" },
		   {"cols": 1, "content": "David Lin" },
		   {"cols": 1, "content": "Because that’s all Steve Job’ needed for a salary."}
		],
		[
		   {"cols": 1, "content": "02" },
		   {"cols": 1, "content": "Tom McFarlin" },
		   {"cols": 1, "content": "Pictures are worth a thousand words, right? So Tom x 1,000."}
		],	
		[
		   {"cols": 1, "content": "03" },
		   {"cols": 1, "content": "Chris Ames" },
		   {"cols": 1, "content": "With hair like that?! Enough said…"}
		]
	]
};

const data2 = {
	"headers": ["No.","Name",""],
	"fields": [
		[
		   {"cols": 1, "content": "01" },
		   {"cols": 1, "content": "David Lin" },
		   {"cols": 1, "content": "Because that’s all Steve Job’ needed for a salary."}
		],
		[
		   {"cols": 1, "content": "02" },
		   {"cols": 1, "content": "Tom McFarlin" },
		   {"cols": 1, "content": "Pictures are worth a thousand words, right? So Tom x 1,000."}
		],	
		[
		   {"cols": 1, "content": "03" },
		   {"cols": 1, "content": "Chris Ames" },
		   {"cols": 1, "content": "With hair like that?! Enough said…"}
		]
	],
	"summaries": ["Text 1","Text 2","Text 3"],
};

const data3 = {
	"headers": ["No.","Name","Email"],
	"fields": [
		[
		   {"cols": 1, "content": "01" },
		   {"cols": 1, "content": "David Lin" },
		   {"cols": 1, "content": "aaa@gmail.com"}
		],
		[
		   {"cols": 1, "content": "02" },
		   {"cols": 1, "content": "Tom McFarlin" },
		   {"cols": 1, "content": "bbb@gmail.com"}
		],	
		[
		   {"cols": 1, "content": "03" },
		   {"cols": 1, "content": "Chris Ames" },
		   {"cols": 1, "content": "ccc@gmail.com"}
		],	
		[
		   {"cols": 1, "content": "04" },
		   {"cols": 1, "content": "Dr. Wolverine Longer Text Test" },
		   {"cols": 1, "content": "ddd@gmail.com"}
		],	
		[
		   {"cols": 1, "content": "05" },
		   {"cols": 1, "content": "Foristin" },
		   {"cols": 1, "content": "eee@gmail.com"}
		]
	]
};


const data4 = {
	"headers": ["No.","Name","Email","Phone"],
	"fields": [
		[
		   {"cols": 1, "content": "01" },
		   {"cols": 1, "content": "David Lin" },
		   {"cols": 1, "content": "aaa@gmail.com"},
		   {"cols": 1, "content": "767 929 1212"}
		],
		[
		   {"cols": 1, "content": "02" },
		   {"cols": 1, "content": "Tom McFarlin" },
		   {"cols": 1, "content": "bbb@gmail.com"},
		   {"cols": 1, "content": "188 928 9999"}
		],	
		[
		   {"cols": 1, "content": "03" },
		   {"cols": 1, "content": "Chris Ames" },
		   {"cols": 1, "content": "ccc@gmail.com"},
		   {"cols": 1, "content": "188 928 2324"}
		],	
		[
		   {"cols": 1, "content": <><strong style={{background:"yellow"}}>A table cell that spans <span style={{color:"red"}}>1</span> columns</strong></> },
		   {"cols": 3, "content": <><strong style={{background:"yellow"}}>A table cell that spans <span style={{color:"red"}}>3</span> columns</strong></> }
		],	
		[
		   {"cols": 4, "content": <><strong style={{background:"yellow"}}>A table cell that spans <span style={{color:"red"}}>4</span> columns</strong></> }
		]	
	]
};


const data5 = {
	"fields": [
		[
		    {"cols": 1, "content": "Jan" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],
		[
		    {"cols": 1, "content": "Feb" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],	
		[
		    {"cols": 1, "content": "Mar" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],	
		[
		    {"cols": 1, "content": "Apr" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],	
		[
		    {"cols": 1, "content": "May" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],	
		[
		    {"cols": 1, "content": "Jun" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		]
	]
};


export default () => {
  return (
    <>

		<h3>Table Series</h3>
		<p>Provides some common styles of table.</p>
		{/* ================================================================== */} 
		<Table bordered={true} data={data1} />
		
		<Table data={data2} />

		<Table horizontal={true} data={data3} />

		<Table noborder={true} horizontal={true} data={data3} />	

		<Table horizontal={true} alternantRow={true} data={data3} />

		<Table perLine={true} data={data3} />

		<Table perLine={true} data={data4} />

		<Table alternantCol={true} data={data5} />


		<h3>Responsive Table</h3>
		<p>Change window size to watch.</p>
		{/* ================================================================== */} 


		<Table noborder={true} horizontal={true} responsive={true} data={data3} />


		<h3>Responsive Table with Scroll Bars</h3>
		<p>The scroll bar is displayed when the response is triggered.</p>
		{/* ================================================================== */} 

	   <Table bordered={true} responsiveWithScrollBar={true} data={data3} />

	  
	  
    </>
  );
}

```