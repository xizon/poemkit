// ==========================================================================
// Plyr support checks
// ==========================================================================

import { transitionEndEvent } from './utils/animation';
import browser from './utils/browser';
import { createElement } from './utils/elements';
import is from './utils/is';

// Default codecs for checking mimetype support
const defaultCodecs = {
  'audio/ogg': 'vorbis',
  'audio/wav': '1',
  'video/webm': 'vp8, vorbis',
  'video/mp4': 'avc1.42E01E, mp4a.40.2',
  'video/ogg': 'theora',
};

// Check for feature support
const support = {
	  // Basic support
	  audio: typeof(document) !== 'undefined' ? 'canPlayType' in document.createElement('audio') : false,
	  video: typeof(document) !== 'undefined' ? 'canPlayType' in document.createElement('video') : false,

	  // Check for support
	  // Basic functionality vs full UI
	  check(type, provider, playsinline) {
		const canPlayInline = browser.isIPhone && playsinline && support.playsinline;
		const api = support[type] || provider !== 'html5';
		const ui = api && support.rangeInput && (type !== 'video' || !browser.isIPhone || canPlayInline);

		return {
		  api,
		  ui,
		};
	  },

	  // Picture-in-picture support
	  // Safari & Chrome only currently
	  pip: (() => {
		if (browser.isIPhone) {
		  return false;
		}

		// Safari
		// https://developer.apple.com/documentation/webkitjs/adding_picture_in_picture_to_your_safari_media_controls
		if (is.function(createElement('video').webkitSetPresentationMode)) {
		  return true;
		}

		// Chrome
		// https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture
		if ( typeof(document) !== 'undefined' ) {
			if (document.pictureInPictureEnabled && !createElement('video').disablePictureInPicture) {
			  return true;
			}	
		}


		return false;
	  })(),

	  // Airplay support
	  // Safari only currently
	  airplay: typeof(window) !== 'undefined' ? is.function(window.WebKitPlaybackTargetAvailabilityEvent) : false,

	  // Inline playback support
	  // https://webkit.org/blog/6784/new-video-policies-for-ios/
	  playsinline: typeof(document) !== 'undefined' ? 'playsInline' in document.createElement('video') : false,

	  // Check for mime type support against a player instance
	  // Credits: http://diveintohtml5.info/everything.html
	  // Related: http://www.leanbackplayer.com/test/h5mt.html
	  mime(input) {
		if (is.empty(input)) {
		  return false;
		}

		const [mediaType] = input.split('/');
		let type = input;

		// Verify we're using HTML5 and there's no media type mismatch
		if (!this.isHTML5 || mediaType !== this.type) {
		  return false;
		}

		// Add codec if required
		if (Object.keys(defaultCodecs).includes(type)) {
		  type += `; codecs="${defaultCodecs[input]}"`;
		}

		try {
		  return Boolean(type && this.media.canPlayType(type).replace(/no/, ''));
		} catch (e) {
		  return false;
		}
	  },

	  // Check for textTracks support
	  textTracks: typeof(document) !== 'undefined' ? 'textTracks' in document.createElement('video') : false,

	  // <input type="range"> Sliders
	  rangeInput: typeof(document) !== 'undefined' ? (() => {
		const range = document.createElement('input');
		range.type = 'range';
		return range.type === 'range';
	  })() : false,

	  // Touch
	  // NOTE: Remember a device can be mouse + touch enabled so we check on first touch event
	  touch: typeof(document) !== 'undefined' ? 'ontouchstart' in document.documentElement : false,

	  // Detect transitions support
	  transitions: transitionEndEvent !== false,

	  // Reduced motion iOS & MacOS setting
	  // https://webkit.org/blog/7551/responsive-design-for-motion/
	  reducedMotion: typeof(window) !== 'undefined' ? 'matchMedia' in window && window.matchMedia('(prefers-reduced-motion)').matches : false,
	};



export default support;
