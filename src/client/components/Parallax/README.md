# @/components/Parallax

[Source](https://github.com/xizon/poemkit/tree/main/src/client/components/Parallax)

## Version

=> 0.0.1 (October 10, 2021)

## API

### Parallax
```js
import Parallax from '@/components/Parallax/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `parallaxElements` | boolean | false | <strong>(Required)</strong> Pure parallax scrolling effect without other embedded HTML elements |
| `parallaxElementsTransition` | string  | all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s | Transition of parallax when `parallaxElements` is true |
| `img` | string  | - | Background image URL |
| `heightClass` | string \| `poemkit-height--100` \| `poemkit-height--90` \| `poemkit-height--80` \| `poemkit-height--70` \| `poemkit-height--60` \| `poemkit-height--50` \| `poemkit-height--40` \| `poemkit-height--30` \| `poemkit-height--20` \| `poemkit-height--10`  | - | Class name of default height |
| `fullyVisible` | boolean  | false | Whether to display all pictures, including the edges |
| `offsetTop` | number  | 0 | Offset top of background |
| `overlay` | boolean \| string  | false | Background overlay. You can set it to the color value, for example `rgba(0,0,0,.6)` |
| `skew` | number  | 0 | Skew of background |
| `speed` | number  | 0 | Speed of parallax animation. Recommended value: `-10.00` to `10.00` |



## Examples

```js
import React from 'react';
import Parallax from '@/components/Parallax/index.tsx';

export default () => {
  return (
    <>

      <h3>Background Parallax</h3>
      {/* ================================================================== */} 
			<Parallax img={`/path/demo.png`} heightClass="poemkit-height--100" fullyVisible={false} offsetTop={0} overlay={false} skew={0} speed={0.1}>
				<h2>Fulscreen + Vertically Centered Text</h2>
			</Parallax>



			<Parallax img={`/path/demo.png`} heightClass="poemkit-height--100" fullyVisible={false} offsetTop={150} overlay={false} skew={0} speed={0.2}>
				<h2>The top offset is 150px.</h2>
			</Parallax>


			<Parallax img={`/path/demo.png`} heightClass="poemkit-height--30" fullyVisible={false} offsetTop={0} overlay={false} skew={0} speed={0.1}>
				<h2>Has class "poemkit-height--30"</h2>
			</Parallax>


			<Parallax img={`/path/demo.png`} heightClass={null} fullyVisible={false} offsetTop={150} overlay="rgba(0,0,0,.6)" skew={0} speed={0.3}>
				<div className="row poemkit-typo--color-white">
					<div className="col-12">
						<h2>
							Small Image 1920 x 309
							<p className="poemkit-typo--h4">Has Overlay Background</p>
						</h2>
					</div>
				</div>
				{/*<!-- .row end -->*/}
			</Parallax>


			<Parallax img={`/path/demo.png`} heightClass={null} fullyVisible={false} offsetTop={0} overlay={false} skew={-3} speed={0.3}>
				<h2 className="poemkit-el--skew">Skew Parallax Effect</h2>
			</Parallax>



      <h3>HTML Element Parallax (not for background image)</h3>
      {/* ================================================================== */} 
			<Parallax parallaxElements={true} parallaxElementsTransition="all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s" speed={-0.7}>
				<div className="poemkit-height--30 is-mobile-still" style={{backgroundColor: "#d2ff52", background: "linear-gradient(to bottom, #d2ff52 0%,#91e842 100%)"}}>
					<div className="poemkit-v-align--absolute poemkit-t-c">
						<h2>Element Parallax</h2>
						<p>Background without parallax</p>
					</div>
				</div>

			</Parallax>




      <h3>Cropped Parallax (for HTML Element Parallax)</h3>
      {/* ================================================================== */} 
			<div className="poemkit-height--30 poemkit-relative--inline poemkit-relative--inline-clip">
				<Parallax heightClass="mh-100" parallaxElements={true} parallaxElementsTransition="all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s"speed={-0.07}>
					<img src={`/path/demo.png`} alt="" style={{marginTop: "-20px"}}/>
					<div className="poemkit-v-align--table poemkit-t-c poemkit-overlay poemkit-overlay--black poemkit-overlay--cover position-absolute poemkit-dir--top">
						<div>
							<h2 className="poemkit-spacing--no">Parallax only works on inline image 1920 x 600</h2>
						</div>
					</div>
				</Parallax>
			</div>


			
      <h3>Compound Parallax</h3>
      {/* ================================================================== */} 
			<Parallax img={`/path/demo.png`} heightClass="poemkit-height--100" fullyVisible={false} offsetTop={150} overlay="rgba(0,0,0,.6)" skew={0} speed={0.4}>
				<Parallax parallaxElements={true} parallaxElementsTransition="all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s" speed={-0.4}>
					<div className="poemkit-typo--color-white">
						<h2>
							Fulscreen + Parallax Element
							<p className="poemkit-typo--h4">Has Overlay Background</p>
						</h2>
					</div>

				</Parallax>
			</Parallax>




    </>
  );
}

```