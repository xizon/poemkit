# @uixkit.react/components/Video

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Video)

## Version

=> 0.0.1

## API

### Video
```js
import Video from '@uixkit.react/components/Video/index.tsx';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `config` | JSON Object Literals  | - | Detailed animation parameters, using JSON string format.<br />**default value:**<br />`{"muted":false,"autoplay":false,"controls":["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],"loop":{"active":false}}` <br />**other:**<br />`{"clickToPlay":false,"muted":true,"autoplay":true,"controls":[""],"loop":{"active":true},"fullscreen":{"enabled": false}}` |
| `poster` | string  | - | The poster image should be specified. |
| `src` | string  | - | The URL of the video to embed. |



JSON configuration properties of the `config`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `muted` | boolean | false | Whether to start playback muted. If the `muted` attribute is present on a `<video>` or `<audio>` element, this will be automatically set to true. |
| `autoplay` | boolean | false | Autoplay the media on load. If the `autoplay` attribute is present on a `<video>` or `<audio>` element, this will be automatically set to true. |
| `controls`  | array | - | When present, it specifies that video controls should be displayed. <br />**default value:**<br />`["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"]` |
| `loop` | JSON Object Literals | - | `active`: Whether to loop the current video. If the `loop` attribute is present on a `<video>` or `<audio>` element, this will be automatically set to true This is an object to support future functionality. <br />**default value:**<br />`{ active: false }` |
| `clickToPlay` | boolean | true | Click (or tap) of the video container will toggle play/pause.  |
| `fullscreen` | JSON Object Literals | - | `enabled`: Toggles whether fullscreen should be enabled. `fallback`: Allow fallback to a full-window solution (true/false/`'force'`). `iosNative`: whether to use native iOS fullscreen when entering fullscreen (no custom controls). `container`: A selector for an ancestor of the player element, allows contextual content to remain visual in fullscreen mode. Non-ancestors are ignored.<br />**default value:**<br />`{ enabled: true, fallback: true, iosNative: false, container: null }` |



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

	  
		<Video config='{"clickToPlay":false,"muted":true,"autoplay":true,"controls":[""],"loop":{"active":true},"fullscreen":{"enabled": false}}' poster="/assets/videos/480x270/demo.jpg" src="/assets/videos/480x270/demo.mp4" />


		<h3>Contains all controls</h3>
		{/* ================================================================== */} 

		<Video config='{"muted":false,"autoplay":false,"controls":["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],"loop":{"active":false}}' src="/assets/videos/1440x1050/demo.mp4" />
	  
    </>
  );
}

```