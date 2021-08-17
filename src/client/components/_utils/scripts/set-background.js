/* 
 *************************************
 * Specify a background image
 *
 * @package: uix-kit-react
 *
 *************************************
 */


 /*
 Usage:

 	render() {
		return (
		  <>
			<div style={setBG({"src":"assets/images/demo.jpg","position":"center center","size":"cover","repeat":"no-repeat","fill":false})}></div>

			<div style={setBG({"height":"300px","width":"300px","src":"assets/images/demo.jpg","size":"auto","repeat":"repeat","move":{"dir":"right","speed":"350","easing":"linear","loop":true}})}></div>

			<div style={setBG({ "height": "300px", "width": "300px", "src": "assets/images/demo.jpg","position":"top left","size":"cover","repeat":"no-repeat","fill":true})}>Background-Clip Text </div>
	
		  </>
		)
	}

 */

export function setBG( config ) {
	let res = {};

	if ( typeof config === typeof undefined ) {
		config = {
			"src"        : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
			"position"   : "top left",
			"size"       : "cover",
			"repeat"     : "no-repeat",
			"fill"       : false,
			"transition" : "none 0s ease 0s",
			"move"       : false  // {"dir":"left","duration":"10s","easing":"linear","loop":true}
		};
	}

	if ( config ) {

		let dataH        = config.height,
			dataW        = config.width,
			dataImg       = config.src,
			dataPos       = config.position,
			dataSize      = config.size,
			dataRepeat    = config.repeat,
			dataEasing    = config.transition,
			dataMove      = config.move;

		if ( typeof dataPos === typeof undefined ) dataPos = 'top left';
		if ( typeof dataSize === typeof undefined ) dataSize = 'cover';
		if ( typeof dataRepeat === typeof undefined ) dataRepeat = 'no-repeat';
		if ( typeof dataEasing === typeof undefined ) dataEasing = 'none 0s ease 0s';
		if ( typeof dataMove === typeof undefined ) dataMove = false;


		
		//background animation
		let moveAnim             = 'none',
			moveAnimLoop         = 'infinite',
			moveEasing           = 'linear',
			moveKeyframesTop     = '@keyframes js-uix-cssanim--move-t{from{background-position:0 0;}to{background-position:0 -19999px;}',
			moveKeyframesBottom  = '@keyframes js-uix-cssanim--move-b{from{background-position:0 0;}to{background-position:0 19999px;}',
			moveKeyframesLeft    = '@keyframes js-uix-cssanim--move-l{from{background-position:0 0;}to{background-position:-19999px 0;}',
			moveKeyframesRight   = '@keyframes js-uix-cssanim--move-r{from{background-position:0 0;}to{background-position:19999px 0;}';


		if ( dataMove && Object.prototype.toString.call( dataMove )=='[object Object]' ) {

			if ( ! dataMove.loop ) moveAnimLoop = '1 forwards';

			dataPos = '0 0';


			switch (dataMove.dir) {
				case 'top':
					moveAnim = 'js-uix-cssanim--move-t '+parseInt(dataMove.speed)+'s '+moveEasing+' '+ moveAnimLoop;
					break;
				case 'bottom':
					moveAnim = 'js-uix-cssanim--move-b '+parseInt(dataMove.speed)+'s '+moveEasing+' '+ moveAnimLoop;        
					break;
				case 'left':
					moveAnim = 'js-uix-cssanim--move-l '+parseInt(dataMove.speed)+'s '+moveEasing+' '+ moveAnimLoop;    
					break;
				case 'right':
					moveAnim = 'js-uix-cssanim--move-r '+parseInt(dataMove.speed)+'s '+moveEasing+' '+ moveAnimLoop;            
					break;
			}


			//  CSS3 animation keyframe attributes inline
			const addStyles = function( id, s ) {
				if ( typeof (document) !== "undefined" && document.querySelector(id) === null ) {
					const $style = document.createElement("style");
					document.head.appendChild($style);
					$style.innerHTML = `${s}`;
				}
			}

			addStyles( '#js-uix-cssanim--move-t', moveKeyframesTop );
			addStyles( '#js-uix-cssanim--move-b', moveKeyframesBottom );
			addStyles( '#js-uix-cssanim--move-l', moveKeyframesLeft );
			addStyles( '#js-uix-cssanim--move-r', moveKeyframesRight );


		}

		
		
		//-----
		if ( typeof dataImg != typeof undefined && dataImg != '' ) {

			if ( config.fill ) {
				//Show Image Under Text
		
				res = {
					height                   : typeof dataH !== typeof undefined ? dataH : 'auto',
					width                    : typeof dataW !== typeof undefined ? dataW : 'auto',
					background               : 'url('+dataImg+') '+dataRepeat+'',
					backgroundSize           : dataSize,
					WebkitBackgroundClip     : 'text',
					WebkitTextFillColor      : 'transparent',
					animation                : moveAnim
				};
	

			} else {
				
				res = {
					height                   : typeof dataH !== typeof undefined ? dataH : 'auto',
					width                    : typeof dataW !== typeof undefined ? dataW : 'auto',
					backgroundImage          : 'url('+dataImg+')',
					backgroundPosition       : dataPos,
					backgroundSize           : dataSize,
					backgroundRepeat         : dataRepeat,
					animation                : moveAnim
				};	
				
			}

			// Delete the width and height attributes to avoid being overwritten when using the grid system
			if ( typeof dataH === typeof undefined ) delete res['height'];
			if ( typeof dataW === typeof undefined ) delete res['width'];



		}	


	}

	return res;

}

export default { setBG };