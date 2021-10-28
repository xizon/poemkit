<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-type: application/json');

$paged = null;

if ( isset( $_GET[ 'page' ] ) && isset( $_GET[ 'page' ] ) ) {
	$paged = $_GET[ 'page' ];
}

$RESTful_res = json_encode( array(
	"error" => "Page Not Found", 
	"code" => 1001
) );


if ( $paged == 1 ) {
	$RESTful_res = '{
		"page":1,
		"per_page":5,
		"total":13,
		"total_pages":3,
		"data":[
		  {
			"id":1,
			"email":"george.bluth@reqres.in",
			"name":"George",
			"avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
		  },
		  {
			"id":2,
			"email":"janet.weaver@reqres.in",
			"name":"Janet",
			"avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
		  },
		  {
			"id":3,
			"email":"emma.wong@reqres.in",
			"name":"Emma",
			"avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
		  },
		  {
			"id":4,
			"email":"eve.holt@reqres.in",
			"name":"Eve",
			"avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
		  },
		  {
			"id":5,
			"email":"charles.morris@reqres.in",
			"name":"Charles",
			"avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
		  }
		]
	  }';

}



if ( $paged == 2 ) {
	$RESTful_res = '{
		"page":2,
		"per_page":5,
		"total":13,
		"total_pages":3,
		"data":[
		  {
			"id":6,
			"email":"george.bluth@reqres.in",
			"name":"George(page 2)",
			"avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpbFxcWxsbGjo6OcnJyqqqq+vr63t7f/2tAOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA9UlEQVRoge3VMW7CMBiG4WBIyNivkNIRygW4gpF6AQZm1KFzGdgBqfeujcsJ/CExvM/i7VV+O3GaBgAAAAAAAM9g/an9jyc1VjJfWloxt7RzpLpbSoOjddRwDb/SxtCKt/GiXupTQcpnuNJ7favXPC+d3upbnWZ5mTo2f6JFXoKj1ZZWI9W3RnrNi+W5uu+DrfVvXI7Toi3HaRHLtjmkD/xgSoWoYWlqnWQbMd2sg+mSThNq60ml29D2QvS+CZuL9GVKTeW4UovWN2EaceFKpS/x7EoF42XT+3Y+/zs+ivpWq7v61sjYWhlbR2MLAAAAAADgwf4A/NkWbYkY/vEAAAAASUVORK5CYII="
		  },
		  {
			"id":7,
			"email":"janet.weaver@reqres.in",
			"name":"Janet(page 2)",
			"avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpbFxcWxsbGjo6OcnJyqqqq+vr63t7f/2tAOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA9UlEQVRoge3VMW7CMBiG4WBIyNivkNIRygW4gpF6AQZm1KFzGdgBqfeujcsJ/CExvM/i7VV+O3GaBgAAAAAAAM9g/an9jyc1VjJfWloxt7RzpLpbSoOjddRwDb/SxtCKt/GiXupTQcpnuNJ7favXPC+d3upbnWZ5mTo2f6JFXoKj1ZZWI9W3RnrNi+W5uu+DrfVvXI7Toi3HaRHLtjmkD/xgSoWoYWlqnWQbMd2sg+mSThNq60ml29D2QvS+CZuL9GVKTeW4UovWN2EaceFKpS/x7EoF42XT+3Y+/zs+ivpWq7v61sjYWhlbR2MLAAAAAADgwf4A/NkWbYkY/vEAAAAASUVORK5CYII="
		  },
		  {
			"id":8,
			"email":"emma.wong@reqres.in",
			"name":"Emma(page 2)",
			"avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpbFxcWxsbGjo6OcnJyqqqq+vr63t7f/2tAOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA9UlEQVRoge3VMW7CMBiG4WBIyNivkNIRygW4gpF6AQZm1KFzGdgBqfeujcsJ/CExvM/i7VV+O3GaBgAAAAAAAM9g/an9jyc1VjJfWloxt7RzpLpbSoOjddRwDb/SxtCKt/GiXupTQcpnuNJ7favXPC+d3upbnWZ5mTo2f6JFXoKj1ZZWI9W3RnrNi+W5uu+DrfVvXI7Toi3HaRHLtjmkD/xgSoWoYWlqnWQbMd2sg+mSThNq60ml29D2QvS+CZuL9GVKTeW4UovWN2EaceFKpS/x7EoF42XT+3Y+/zs+ivpWq7v61sjYWhlbR2MLAAAAAADgwf4A/NkWbYkY/vEAAAAASUVORK5CYII="
		  },
		  {
			"id":9,
			"email":"eve.holt@reqres.in",
			"name":"Eve(page 2)",
			"avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpbFxcWxsbGjo6OcnJyqqqq+vr63t7f/2tAOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA9UlEQVRoge3VMW7CMBiG4WBIyNivkNIRygW4gpF6AQZm1KFzGdgBqfeujcsJ/CExvM/i7VV+O3GaBgAAAAAAAM9g/an9jyc1VjJfWloxt7RzpLpbSoOjddRwDb/SxtCKt/GiXupTQcpnuNJ7favXPC+d3upbnWZ5mTo2f6JFXoKj1ZZWI9W3RnrNi+W5uu+DrfVvXI7Toi3HaRHLtjmkD/xgSoWoYWlqnWQbMd2sg+mSThNq60ml29D2QvS+CZuL9GVKTeW4UovWN2EaceFKpS/x7EoF42XT+3Y+/zs+ivpWq7v61sjYWhlbR2MLAAAAAADgwf4A/NkWbYkY/vEAAAAASUVORK5CYII="
		  },
		  {
			"id":10,
			"email":"charles.morris@reqres.in",
			"name":"Charles(page 2)",
			"avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpbFxcWxsbGjo6OcnJyqqqq+vr63t7f/2tAOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA9UlEQVRoge3VMW7CMBiG4WBIyNivkNIRygW4gpF6AQZm1KFzGdgBqfeujcsJ/CExvM/i7VV+O3GaBgAAAAAAAM9g/an9jyc1VjJfWloxt7RzpLpbSoOjddRwDb/SxtCKt/GiXupTQcpnuNJ7favXPC+d3upbnWZ5mTo2f6JFXoKj1ZZWI9W3RnrNi+W5uu+DrfVvXI7Toi3HaRHLtjmkD/xgSoWoYWlqnWQbMd2sg+mSThNq60ml29D2QvS+CZuL9GVKTeW4UovWN2EaceFKpS/x7EoF42XT+3Y+/zs+ivpWq7v61sjYWhlbR2MLAAAAAADgwf4A/NkWbYkY/vEAAAAASUVORK5CYII="
		  }
		]
	  }';

}



if ( $paged == 3 ) {
	$RESTful_res = '{
		"page":3,
		"per_page":5,
		"total":13,
		"total_pages":3,
		"data":[
		  {
			"id":11,
			"email":"george.bluth@reqres.in",
			"name":"George(page 3)",
			"avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpa3t7ejo6OcnJyqqqq+vr7FxcWxsbHaW6/4AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABGElEQVRoge3WPW4CMRAFYPO3u2VeWAJlVskBcE4AKaCFSIiW3GAXRSglUYKUY8f20FH6FSne10z3ZI/Gs+uciIiIiIiIiIj8B0/L+o0U9YxgRYnqI3lkZHWW9cDI8pi1R4+aEFUCrXMV5ZIVZrF4bPKzRpjG0mCRnzXEPJYOd/lZPbtcj5HV4WxlkZ/1+dvG0thVKbwdj6FKU0Zx8rjnJBW0t21ZpGPZufbErJrW+x/w5qv0nGWYfGBCy6owpmUVjCV92aUSVnV+lr9mMLK29qhLxh0bHGLpM3p/3asD+xzlGWIdyztjVkdpSIsl4w2FYXhpT1tY2zJ92b8JoV2x68mZkRUmLHilRLnym/ePKSIiIiIiIiJy4w8JSB6Ch2nMZwAAAABJRU5ErkJggg=="
		  },
		  {
			"id":12,
			"email":"janet.weaver@reqres.in",
			"name":"Janet(page 3)",
			"avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpa3t7ejo6OcnJyqqqq+vr7FxcWxsbHaW6/4AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABGElEQVRoge3WPW4CMRAFYPO3u2VeWAJlVskBcE4AKaCFSIiW3GAXRSglUYKUY8f20FH6FSne10z3ZI/Gs+uciIiIiIiIiIj8B0/L+o0U9YxgRYnqI3lkZHWW9cDI8pi1R4+aEFUCrXMV5ZIVZrF4bPKzRpjG0mCRnzXEPJYOd/lZPbtcj5HV4WxlkZ/1+dvG0thVKbwdj6FKU0Zx8rjnJBW0t21ZpGPZufbErJrW+x/w5qv0nGWYfGBCy6owpmUVjCV92aUSVnV+lr9mMLK29qhLxh0bHGLpM3p/3asD+xzlGWIdyztjVkdpSIsl4w2FYXhpT1tY2zJ92b8JoV2x68mZkRUmLHilRLnym/ePKSIiIiIiIiJy4w8JSB6Ch2nMZwAAAABJRU5ErkJggg=="
		  },
		  {
			"id":13,
			"email":"emma.wong@reqres.in",
			"name":"Emma(page 3)",
			"avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpa3t7ejo6OcnJyqqqq+vr7FxcWxsbHaW6/4AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABGElEQVRoge3WPW4CMRAFYPO3u2VeWAJlVskBcE4AKaCFSIiW3GAXRSglUYKUY8f20FH6FSne10z3ZI/Gs+uciIiIiIiIiIj8B0/L+o0U9YxgRYnqI3lkZHWW9cDI8pi1R4+aEFUCrXMV5ZIVZrF4bPKzRpjG0mCRnzXEPJYOd/lZPbtcj5HV4WxlkZ/1+dvG0thVKbwdj6FKU0Zx8rjnJBW0t21ZpGPZufbErJrW+x/w5qv0nGWYfGBCy6owpmUVjCV92aUSVnV+lr9mMLK29qhLxh0bHGLpM3p/3asD+xzlGWIdyztjVkdpSIsl4w2FYXhpT1tY2zJ92b8JoV2x68mZkRUmLHilRLnym/ePKSIiIiIiIiJy4w8JSB6Ch2nMZwAAAABJRU5ErkJggg=="
		  }
		]
	  }';

}



echo $RESTful_res;

