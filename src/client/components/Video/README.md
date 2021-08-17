# @uixkit.react/components/Video

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Video)

## Version

=> 0.0.1


## Examples

```js
import React from 'react';
import Video from '@uixkit.react/components/Video/index.tsx';

export default () => {
  return (
    <>
	  
		<h3>Autoplay, No controls</h3>
		<p>Must be muted</p>
		{/* ================================================================== */} 

	  
		<Video config='{"clickToPlay":false,"muted":true,"autoplay":true,"controls":[""],"loop":{"active":true},"fullscreen":{"enabled": false}}' data-poster="/assets/videos/480x270/demo.jpg" src="/assets/videos/480x270/demo.mp4" />


		<h3>Contains all controls</h3>
		{/* ================================================================== */} 

		<Video config='{"muted":false,"autoplay":false,"controls":["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],"loop":{"active":false}}' src="/assets/videos/1440x1050/demo.mp4" />
	  
    </>
  );
}

```