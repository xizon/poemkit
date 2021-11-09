/* 
 *************************************
 * Specify a background image
 *
 * @package: poemkit
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
	if ( typeof config === typeof undefined || config === null || config === false ) config = {};

	//Set a default configuration
	const defaultConfig = {
		"height"     : false,
		"width"      : false,
		"src"        : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
		"position"   : "top left",
		"size"       : "cover",
		"repeat"     : "no-repeat",
		"fill"       : false,
		"move"       : false  // {"dir":"left","duration":"10s","easing":"linear","loop":true}
    };
	
	const defaultConfigValues = Object.values(defaultConfig);
	Object.keys(defaultConfig).forEach(function(prop,index) {
		if ( typeof config[prop] === typeof undefined || config[prop] === null ) config[prop] = defaultConfigValues[index];
	});
	
	//
	let res = {};
	let dataH         = config.height,
		dataW         = config.width,
		dataImg       = config.src,
		dataPos       = config.position,
		dataSize      = config.size,
		dataRepeat    = config.repeat,
		dataFill      = config.fill,
		dataMove      = config.move;


	
	//background animation
	let moveAnim             = 'none',
		moveAnimLoop         = 'infinite',
		moveEasing           = 'linear',
		moveKeyframesTop     = '@keyframes js-poemkit-cssanim--move-t{from{background-position:0 0;}to{background-position:0 -19999px;}',
		moveKeyframesBottom  = '@keyframes js-poemkit-cssanim--move-b{from{background-position:0 0;}to{background-position:0 19999px;}',
		moveKeyframesLeft    = '@keyframes js-poemkit-cssanim--move-l{from{background-position:0 0;}to{background-position:-19999px 0;}',
		moveKeyframesRight   = '@keyframes js-poemkit-cssanim--move-r{from{background-position:0 0;}to{background-position:19999px 0;}';


	if ( dataMove && Object.prototype.toString.call( dataMove )=='[object Object]' ) {

		if ( ! dataMove.loop ) moveAnimLoop = '1 forwards';

		dataPos = '0 0';


		switch (dataMove.dir) {
			case 'top':
				moveAnim = 'js-poemkit-cssanim--move-t '+parseInt(dataMove.speed)+'s '+moveEasing+' '+ moveAnimLoop;
				break;
			case 'bottom':
				moveAnim = 'js-poemkit-cssanim--move-b '+parseInt(dataMove.speed)+'s '+moveEasing+' '+ moveAnimLoop;        
				break;
			case 'left':
				moveAnim = 'js-poemkit-cssanim--move-l '+parseInt(dataMove.speed)+'s '+moveEasing+' '+ moveAnimLoop;    
				break;
			case 'right':
				moveAnim = 'js-poemkit-cssanim--move-r '+parseInt(dataMove.speed)+'s '+moveEasing+' '+ moveAnimLoop;            
				break;
		}


		//  CSS3 animation keyframe attributes inline
		const addStyles = function( id, s ) {
			if ( typeof(document) !== 'undefined' && document.querySelector(id) === null ) {
				const $style = document.createElement("style");
				document.head.appendChild($style);
				$style.innerHTML = `${s}`;
			}
		}

		addStyles( '#js-poemkit-cssanim--move-t', moveKeyframesTop );
		addStyles( '#js-poemkit-cssanim--move-b', moveKeyframesBottom );
		addStyles( '#js-poemkit-cssanim--move-l', moveKeyframesLeft );
		addStyles( '#js-poemkit-cssanim--move-r', moveKeyframesRight );


	}

	
	
	//-----
	if ( dataImg != '' ) {

		if ( dataFill ) {
			//Show Image Under Text
	
			res = {
				height                   : dataH ? dataH : 'auto',
				width                    : dataW ? dataW : 'auto',
				background               : 'url('+dataImg+') '+dataRepeat+'',
				backgroundSize           : dataSize,
				WebkitBackgroundClip     : 'text',
				WebkitTextFillColor      : 'transparent',
				animation                : moveAnim
			};


		} else {
			
			res = {
				height                   : dataH ? dataH : 'auto',
				width                    : dataW ? dataW : 'auto',
				backgroundImage          : 'url('+dataImg+')',
				backgroundPosition       : dataPos,
				backgroundSize           : dataSize,
				backgroundRepeat         : dataRepeat,
				animation                : moveAnim
			};	
			
		}

		// Delete the width and height attributes to avoid being overwritten when using the grid system
		if ( !dataH ) delete res['height'];
		if ( !dataW ) delete res['width'];



	}	


	return res;

}

export default setBG;