# @/components/Grid

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/Grid)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Grid
```js
import { Grid } from '@/components/Grid/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `noBreak` | boolean | false | Permanent non-breaking all columns |
| `noGutters` | boolean | false | Remove column spacing |
| `equalWidth` | boolean | false | Per-column will be the same width automatically |
| `loop` | boolean | false | Multi-line layout correction |


### GridColumn
```js
import { GridColumn } from '@/components/Grid/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `ratio` | `1/1` \| `1/2` \| `1/3` \| `2/3` \| `1/4` \| `3/4` \| `1/5` \| `2/5` \| `3/5` \| `4/5` \| `1/6` \| boolean | - | The ratio of each column |
| `stackRatio` | `1/1` \| `1/2` \| `1/3` \| `2/3` \| `1/4` \| `3/4` \| `1/5` \| `2/5` \| `3/5` \| `4/5` \| `1/6` \| boolean | - | The ratio of stacked breakpoints. <br /> You can set breakpoints for the `stackSize` and `stackRatio` props that starts out stacked before becoming horizontal with at the small breakpoint. Setting it to a breakpoint (`sm, md, lg, xl`) of the `stackSize` prop will set the `<GridColumn>...</Grid>`as fluid until the specified breakpoint |
| `stackSize` | `sm` \| `md` \| `lg` \| `xl` \| boolean | - | The size of stacked breakpoints |
| `inline` | boolean | false | This attribute will make the column in a separate block, there is no float, and its centering can be controlled |




## Examples

```js
import React from 'react';
import { Grid, GridColumn } from '@/components/Grid/index.tsx';

export default () => {
  return (
    <>


        <h3>PoemKit Grid</h3>
        <p>
          It can be used for fluid layout for multiple projects and <strong>Bootstrap</strong> grid system. Its biggest feature is its support for <strong>loop</strong> lists.
        </p>
        {/* ================================================================== */} 

        <Grid equalWidth={true}>
          <GridColumn>
            <div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5 (equal width)</div>
          </GridColumn>
          <GridColumn>
            <div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5 (equal width)</div>
          </GridColumn>
          <GridColumn>
            <div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5 (equal width)</div>
          </GridColumn>
          <GridColumn>
            <div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5 (equal width)</div>
          </GridColumn>
          <GridColumn>
            <div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5 (equal width)</div>
          </GridColumn>		
        </Grid>




        <Grid>
          <GridColumn ratio="1/6">
            <div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6</div>
          </GridColumn>
          <GridColumn ratio="1/6">
            <div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6</div>
          </GridColumn>	
          <GridColumn ratio="1/6">
            <div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6</div>
          </GridColumn>
          <GridColumn ratio="1/6">
            <div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6</div>
          </GridColumn>
          <GridColumn ratio="1/6">
            <div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6</div>
          </GridColumn>
          <GridColumn ratio="1/6">
            <div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6</div>
          </GridColumn>						
        </Grid>

      

        <Grid>
          <GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
            <div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols)</div>
          </GridColumn>
          <GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
            <div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols)</div>
          </GridColumn>
          <GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
            <div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols)</div>
          </GridColumn>					
          <GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
            <div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols)</div>
          </GridColumn>
          <GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
            <div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols)</div>
          </GridColumn>
          <GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
            <div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols)</div>
          </GridColumn>	
        </Grid>

      

        <Grid loop={true}>
          <GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
              <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
          </GridColumn>
          <GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
              <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
          </GridColumn>
          <GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
              <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
          </GridColumn>
          <GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
              <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
          </GridColumn>	
          <GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
              <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
          </GridColumn>
          <GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
              <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
          </GridColumn>
          <GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
              <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
          </GridColumn>
          <GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
              <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
          </GridColumn>	
        </Grid>


        <Grid loop={true}>
          <GridColumn ratio="1/6">
            <div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/6">
            <div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/6">
            <div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/6">
            <div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/6">
            <div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/6">
            <div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/6">
            <div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/6">
            <div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
          </GridColumn>	
          <GridColumn ratio="1/6">
            <div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
          </GridColumn>		
        </Grid>


      
        <Grid>
          <GridColumn ratio="1/4">
            <div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
          </GridColumn>
          <GridColumn ratio="1/4">
            <div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
          </GridColumn>
          <GridColumn ratio="1/4">
            <div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
          </GridColumn>
          <GridColumn ratio="1/4">
            <div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
          </GridColumn>			
        </Grid>



        <Grid loop={true}>
          <GridColumn ratio="1/4">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/4">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/4">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/4">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
          </GridColumn>			
          <GridColumn ratio="1/4">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/4">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/4">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/4">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
          </GridColumn>	
          <GridColumn ratio="1/4">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/4">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
          </GridColumn>		
        </Grid>



        <Grid>
          <GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
            <div style={{background:"lime",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols)</div>
          </GridColumn>
          <GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
            <div style={{background:"lime",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols)</div>
          </GridColumn>
          <GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
            <div style={{background:"lime",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols)</div>
          </GridColumn>
          <GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
            <div style={{background:"lime",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols)</div>
          </GridColumn>			
        </Grid>



        <Grid loop={true}>
          <GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
            <div style={{background:"olive",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols & loop)</div>
          </GridColumn>
          <GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
            <div style={{background:"olive",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols & loop)</div>
          </GridColumn>
          <GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
            <div style={{background:"olive",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols & loop)</div>
          </GridColumn>
          <GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
            <div style={{background:"olive",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols & loop)</div>
          </GridColumn>
          <GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
            <div style={{background:"olive",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols & loop)</div>
          </GridColumn>	
        </Grid>
      

      
        <Grid>
          <GridColumn ratio="1/3">
            <div style={{background:"yellow",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3</div>
          </GridColumn>
          <GridColumn ratio="1/3">
            <div style={{background:"yellow",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3</div>
          </GridColumn>
          <GridColumn ratio="1/3">
            <div style={{background:"yellow",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3</div>
          </GridColumn>		
        </Grid>


        <Grid loop={true}>
          <GridColumn ratio="1/3">
            <div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/3">
            <div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/3">
            <div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/3">
            <div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/3">
            <div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/3">
            <div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/3">
            <div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/3">
            <div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
          </GridColumn>
        </Grid>

        <Grid loop={true}>
          <GridColumn ratio="1/2">
            <div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/2 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/2">
            <div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/2 (loop)</div>
          </GridColumn>
          <GridColumn ratio="1/2">
            <div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/2 (loop)</div>
          </GridColumn>
        </Grid>
  

        <Grid>
          <GridColumn ratio="1/2">
            <div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/2</div>
          </GridColumn>
          <GridColumn ratio="1/2">
            <div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/2</div>
          </GridColumn>
        </Grid>



        <Grid>
          <GridColumn ratio="2/3">
            <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/3</div>
          </GridColumn>
          <GridColumn ratio="1/3">
            <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3</div>
          </GridColumn>
        </Grid>

      
        <Grid>
          <GridColumn ratio="3/4">
            <div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>3/4</div>
          </GridColumn>
          <GridColumn ratio="1/4">
            <div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
          </GridColumn>
        </Grid>

        

        <Grid>
          <GridColumn ratio="4/5">
            <div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>4/5</div>
          </GridColumn>
          <GridColumn ratio="1/5">
            <div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5</div>
          </GridColumn>
        </Grid>


        <Grid>
          <GridColumn ratio="3/5">
            <div style={{background:"aqua",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>3/5</div>
          </GridColumn>
          <GridColumn ratio="2/5">
            <div style={{background:"aqua",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/5</div>
          </GridColumn>
        </Grid>



        <Grid>
          <GridColumn ratio="1/4">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
          </GridColumn>
          <GridColumn ratio="1/2">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/2</div> 
          </GridColumn>
          <GridColumn ratio="1/4">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
          </GridColumn>
        </Grid>




        <Grid>
          <GridColumn ratio="1/3">
            <div style={{background:"aqua",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3</div>
          </GridColumn>
          <GridColumn ratio="1/2">
            <div style={{background:"aqua",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/2</div> 
          </GridColumn>
          <GridColumn ratio="1/6">
            <div style={{background:"aqua",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6</div>
          </GridColumn>
        </Grid>


        <Grid>
          <GridColumn ratio="1/5">
            <div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5</div>
          </GridColumn>
          <GridColumn ratio="2/5">
            <div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/5</div> 
          </GridColumn>
          <GridColumn ratio="2/5">
            <div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/5</div> 
          </GridColumn>
        </Grid>	


        <Grid>
          <GridColumn ratio="2/3">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/3</div>
          </GridColumn>
          <GridColumn ratio="1/5">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5</div> 
          </GridColumn>
          <GridColumn ratio="1/5">
            <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5</div>
          </GridColumn>
        </Grid>				




        <h3>No Gutter Column For PoemKit Grid</h3>
        <p>
          Set the <code>noGutters</code> attribute of <code>&lt;Grid&gt;</code> markup.<code>true</code> will remove all the columns spacing.
        </p>		
        {/* ================================================================== */} 
    
        <Grid noGutters={true}>
            ...
        </Grid>


        <h3>PoemKit Grid (No line breaks)</h3>
        <p>
        Set the <code>noBreak</code> attribute of <code>&lt;Grid&gt;</code> markup.<code>true</code> will prevent the columns from automatically wrapping across multiple lines. <em>Please simulate mobile viewing after zooming out your viewport.</em> 
        </p>
        {/* ================================================================== */} 
    
        <Grid noBreak={true} equalWidth={true}>
          <GridColumn>
            <div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
          </GridColumn>
          <GridColumn>
            <div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
          </GridColumn>
          <GridColumn>
            <div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
          </GridColumn>
          <GridColumn>
            <div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
          </GridColumn>
          <GridColumn>
            <div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
          </GridColumn>
        </Grid>


        <Grid noBreak={true}>
          <GridColumn ratio="3/4">
            <div style={{background:"olive",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>3/4</div>
          </GridColumn>		
          <GridColumn ratio="1/4">
            <div style={{background:"olive",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
          </GridColumn>			

        </Grid>


        <h3>Inline Block</h3>
        <p>
          Only use <code>&lt;GridColumn&gt;</code>markup without using<code>&lt;Grid&gt;</code> to wrap them.
        </p>
        {/* ================================================================== */} 
        
        <GridColumn ratio="1/6">
          <div style={{ background: "blue", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6</div>
        </GridColumn>
    
        <div className="poemkit-clearfix"></div>
        

        <div className="text-center">
          <GridColumn ratio="2/5" inline={true}>
            <div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/5, Center alignment.</div>
          </GridColumn>		
        </div>

        <div className="poemkit-clearfix"></div>


        <GridColumn ratio="2/5" stackRatio="1/2" stackSize="md">
          <div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/5, The width becomes 50% on mobile.</div>
        </GridColumn>		

        <div className="poemkit-clearfix"></div>


    </>
  );
}

```