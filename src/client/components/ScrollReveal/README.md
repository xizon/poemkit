# @uixkit.react/components/ScrollReveal

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/ScrollReveal)

## Version

=> 0.0.1


## Examples

```js
import React from 'react';
import ScrollReveal from '@uixkit.react/components/ScrollReveal/index.tsx';


export default () => {
	

   React.useEffect(() => {
		const $style = document.createElement("style");
		document.head.appendChild($style);
		$style.innerHTML = `
			.demo-sr-active {
				transition: all 1s ease;
				transform: scale(0.7);
			}
        `;     
   });
	
  return (
    <>

		<ScrollReveal className="uix-spacing--s uix-height--50 uix-el--transparent" config='{"viewport":"100%","from":{"opacity":0,"x":100},"to":{"opacity":1,"x":0},"ease":"Power2.easeOut","duration":0.8,"delay":0,"infinite":false}' style={{background:"#FBFBFB"}}>
			<div className="uix-v-align--relative uix-t-c">
				<h3>Moving the element when going left</h3>
			</div>
		</ScrollReveal> 



		<ScrollReveal className="uix-spacing--s uix-height--50 uix-el--transparent" config='{"viewport":"100%","from":{"opacity":0,"scale":0.5,"transform":"translateX(50px) rotate(30deg)"},"to":{"opacity":1,"scale":1,"transform":"translateX(0) rotate(0deg)"},"ease":"Power2.easeOut","duration":0.8,"delay":0.5,"infinite":false}' style={{background:"#ACABA3"}}>
			<div className="uix-v-align--relative uix-t-c">
				<h3>Flipping the element when going left</h3>

			</div>
		</ScrollReveal>


		<ScrollReveal className="uix-spacing--s uix-height--50 uix-el--transparent" config='{"viewport":"80%","from":{"opacity":0,"y":150},"to":{"opacity":1,"y":0},"ease":"Power2.easeOut","duration":0.8,"delay":0,"infinite":true}' style={{background:"#C7BAAF"}}>
			<div className="uix-v-align--relative uix-t-c">
				<h3>Infinite loop animation</h3>

			</div>
		</ScrollReveal>


		<ScrollReveal className="uix-spacing--s uix-height--50 uix-el--transparent" config='{"viewport":"100%","from":{"opacity":0,"y":150},"to":{"opacity":1,"y":0},"ease":"Power2.easeOut","duration":0.8,"delay":0,"infinite":false}' style={{background:"#AB9799"}}>
			<div className="uix-v-align--relative uix-t-c">
				<h3>Moving the element when going top</h3>

			</div>
		</ScrollReveal>



		<ScrollReveal className="uix-spacing--s uix-height--50" config='{"viewport":"100%","from":"","to":".demo-sr-active","infinite":true}' style={{background:"#91707A"}}>
			<div className="uix-v-align--relative uix-t-c">
				<h3>Add class <code>.demo-sr-active</code> when element becomes visible</h3>

			</div>
		</ScrollReveal>




		<ScrollReveal className="uix-spacing--s uix-height--50 uix-el--zoom" config='{"viewport":"100%","from":{"scale":0},"to":{"scale":1},"ease":"Power2.easeOut","duration":0.8,"delay":0,"infinite":false}' style={{background:"#805965"}}>
			<div className="uix-v-align--relative uix-t-c">
				<h3>Scale effect</h3>

			</div>
		</ScrollReveal>
	  
	  
    </>
  );
}

```