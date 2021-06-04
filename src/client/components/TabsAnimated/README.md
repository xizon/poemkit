# @uixkit.react/components/TabsAnimated

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/TabsAnimated)

## Version

=> 0.0.1

## Examples

```js
import React from 'react';
import { TabsAnimated, TabList, TabPanel } from '@uixkit.react/components/TabsAnimated/index.js';


export default () => {
  return (
    <>
	  
		<h3>Tabs Animated</h3>
	    <p>The most basic style allows you to set transition animation</p>
		{/* ================================================================== */} 

		<TabsAnimated>
			<TabList key="tab-list-1" defaultActive>Tab 1</TabList>
			<TabList key="tab-list-2">Tab 2</TabList>
			<TabList key="tab-list-3">Tab 3</TabList>

			<TabPanel key="tab-panel-1" defaultActive>
				<p>Hi, this is the first tab.</p>
			</TabPanel>
			<TabPanel key="tab-panel-2">
				<p>This is the 2nd tab.</p>
				<p>This is the 2nd tab.</p>
				<p>This is the 2nd tab.</p>
			</TabPanel>
			<TabPanel key="tab-panel-3">
				<p>And this is the 3rd tab.</p>
			</TabPanel>    
		</TabsAnimated>	


    </>
  );
}

```