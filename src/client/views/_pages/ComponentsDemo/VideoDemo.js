import React from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import Video from '@poemkit/components/Video/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@poemkit/pages/ComponentsDemo/_SidebarMenu.js';

//get project config
import { rootDirectory } from '@poemkit/config/websiteConfig.js';

export default () => {


	React.useEffect(() => { // Equivalent to componentDidMount and componentDidUpdate:
		
		__( document ).ready( function() {
			//Create sidebar menu
	        SidebarMenu();
		});  
	});

	
    return (
	  <>

		{/*<!-- Content 
		====================================================== -->*/}
		<section>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="poemkit-typo--h2">
							Video 
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/Video" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
					</div>
				</div>
				{/*<!-- .row end -->*/}

			</div>
			{/*<!-- .container end -->*/}

		</section>



		{/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">Autoplay, No controls</h3>
						<p>Must be muted</p>
						<hr />


					</div>
				</div>
				{/*<!-- .row end -->*/}

			</div>
			{/*<!-- .container end -->*/}

		</section>



	   {/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s">
			<div className="container">


					<div className="row">
						<div className="col-md-6">

							<Video config='{"clickToPlay":false,"muted":true,"autoplay":true,"controls":[""],"loop":{"active":true},"fullscreen":{"enabled": false}}' poster={`${rootDirectory}/assets/videos/480x270/demo.jpg`} src={`${rootDirectory}/assets/videos/480x270/demo.mp4`} />



						</div>     


					</div>
					{/*<!-- .row end -->*/}  


			</div>
			{/*<!-- .container end -->*/}



		</section>



		{/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">Contains all controls</h3>
						<hr />


					</div>
				</div>
				{/*<!-- .row end -->*/}

			</div>
			{/*<!-- .container end -->*/}

		</section>



	   {/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s">
			<div className="container">


					<div className="row">
						<div className="col-md-6">


							<Video config='{"muted":false,"autoplay":false,"controls":["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],"loop":{"active":false}}' src={`${rootDirectory}/assets/videos/1440x1050/demo.mp4`} />






						</div>     


					</div>
					{/*<!-- .row end -->*/}  


			</div>
			{/*<!-- .container end -->*/}



		</section>



		{/*<!-- API 
		====================================================== -->*/}
		<section>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">API</h3>
						<hr />


						<article className="poemkit-spacing--s" itemProp="text">
							<h4>Video</h4>
							<div>
								<pre>import Video from '@poemkit/components/Video/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped mb-5">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>config</code></td>
											<td>JSON Object Literals</td>
											<td>-</td>
											<td><strong>(Required)</strong> Detailed animation parameters, using JSON string format.<br /><strong>default value:</strong><br /><code className="text-wrap">{`{"muted":false,"autoplay":false,"controls":["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],"loop":{"active":false}}`}</code> <br /><strong>other:</strong><br /><code className="text-wrap">{`{"clickToPlay":false,"muted":true,"autoplay":true,"controls":[""],"loop":{"active":true},"fullscreen":{"enabled": false}}`}</code></td>
										</tr>
										<tr>
											<td><code>poster</code></td>
											<td>string</td>
											<td>-</td>
											<td>The poster image should be specified.</td>
										</tr>
										<tr>
											<td><code>src</code></td>
											<td>string</td>
											<td>-</td>
											<td>The URL of the video to embed.</td>
										</tr>
									</tbody>
								</table>
	
							</div>

							<p>JSON configuration properties of the <code>config</code>:</p>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped mb-5">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>muted</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Whether to start playback muted. If the <code>muted</code> attribute is present on a <code>&lt;video&gt;</code> or <code>&lt;audio&gt;</code> element, this will be automatically set to true.</td>
										</tr>
										<tr>
											<td><code>autoplay</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Autoplay the media on load. If the <code>autoplay</code> attribute is present on a <code>&lt;video&gt;</code> or <code>&lt;audio&gt;</code> element, this will be automatically set to true.</td>
										</tr>
										<tr>
											<td><code>controls</code></td>
											<td>array</td>
											<td>-</td>
											<td>When present, it specifies that video controls should be displayed. <br /><strong>default value:</strong><br /><code className="text-wrap">["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"]</code></td>
										</tr>
										<tr>
											<td><code>loop</code></td>
											<td>JSON Object Literals</td>
											<td>-</td>
											<td><code>active</code>: Whether to loop the current video. If the <code>loop</code> attribute is present on a <code>&lt;video&gt;</code> or <code>&lt;audio&gt;</code> element, this will be automatically set to true This is an object to support future functionality. <br /><strong>default value:</strong><br /><code className="text-wrap">{`{ active: false }`}</code></td>
										</tr>
										<tr>
											<td><code>clickToPlay</code></td>
											<td>boolean</td>
											<td>true</td>
											<td>Click (or tap) of the video container will toggle play/pause.</td>
										</tr>
										<tr>
											<td><code>fullscreen</code></td>
											<td>JSON Object Literals</td>
											<td>-</td>
											<td><code>enabled</code>: Toggles whether fullscreen should be enabled. <code>fallback</code>: Allow fallback to a full-window solution (true/false/<code>'force'</code>). <code>iosNative</code>: whether to use native iOS fullscreen when entering fullscreen (no custom controls). <code>container</code>: A selector for an ancestor of the player element, allows contextual content to remain visual in fullscreen mode. Non-ancestors are ignored.<br /><strong>default value:</strong><br /><code className="text-wrap">{`{ enabled: true, fallback: true, iosNative: false, container: null }`}</code></td>
										</tr>
									</tbody>
								</table>
	
							</div>



						</article>


					</div>
				</div>
				{/*<!-- .row end -->*/}


			</div>
			{/*<!-- .container end -->*/}
		</section>




      </>
    );
};