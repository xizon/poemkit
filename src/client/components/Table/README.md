# @uixkit.react/components/Table

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Table)

## Version

=> 0.0.1


## Examples

```js
import React from 'react';
import Table from '@uixkit.react/components/Table/index.js';



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
		<hr />


		<Table className="uix-table uix-table--bordered" data={data1} />

		<Table className="uix-table" data={data2} />

		<Table className="uix-table is-horizontal" data={data3} />

		<Table className="uix-table uix-table--noborder is-horizontal" data={data3} />	

		<Table className="uix-table is-horizontal uix-table--alternant-row" data={data3} />

		<Table className="uix-table uix-table--per-line" data={data3} />

		<Table className="uix-table uix-table--per-line" data={data4} />

		<Table className="uix-table uix-table--alternant-col" data={data5} />


		<h3>Responsive Table</h3>
		<p>Change window size to watch. The class <code>.is-responsive.js-uix-table--responsive</code> used here will be applied <code>.uix-table</code></p>
		<hr />


		<Table className="uix-table uix-table--noborder is-horizontal is-responsive js-uix-table--responsive" data={data3} />


		<h3>Responsive Table with Scroll Bars</h3>
		<p>Change window size to watch. The class <code>.js-uix-table--responsive-scrolled</code> used here will be applied <code>.uix-table</code></p>
		<hr />

	   <Table className="uix-table uix-table--bordered js-uix-table--responsive-scrolled" data={data3} />

	  
	  
    </>
  );
}

```