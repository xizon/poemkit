/* 
 *************************************
 * <!-- Swiper -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap';
import '@uixkit.react/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';

// Slideshow
import { Swiper as SW } from '@uixkit.react/components/_plugins/_lib-slideshow';


/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utils/styles/_all.scss';
import '@uixkit.react/components/_utils/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utils/_all';


/*-- Apply this component styles --*/
import '@uixkit.react/components/Swiper/styles/_style.scss';


//get project config
import { rootDirectory } from '@uixkit.react/config/websiteConfig.js';


type SwiperProps = {
	/** -- */
	id?: string;
	attributes?: any;
};
type SwiperState = false;


export default class Swiper extends Component<SwiperProps, SwiperState> {

	constructor(props) {
		super(props);
	}
	
	componentDidMount(){
		
		
		__( document ).ready( function() {

			

			__( '.uix-swiper' ).each( function(this: any, index: number, curSelector: string )  {

				const $el = __( this );
				const actived = $el.data( 'activated' );
				if( actived === null ) {

					//Synchronize multiple objects
					//------------------------------------------
					if ( $el.find( '#app-slider1' ).length > 0 ) {
						const swiper2: any = new SW('#app-slider2', {
							slidesPerView: 5,
							spaceBetween: 10,
							allowTouchMove: false
						});

						const swiper1: any = new SW('#app-slider1', {
							slidesPerView: 1,
							spaceBetween: 10,
							speed: 1000,
							pagination: {
								el: '.swiper-pagination',
								clickable: true,
								renderBullet: function (index, className) {
									return '<span class="' + className + '">' + (index + 1) + '</span>';
								},	
							},
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							},
							breakpoints: {
								640 : {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								768 : {
									slidesPerView: 4,
									spaceBetween: 40,
								},
								1024 : {
									slidesPerView: 5,
									spaceBetween: 50,
								},
							},
						});

						//Sync swiper slider
						swiper1.on( 'slideChange', function(this: any) {

							const index = this.activeIndex;
							swiper2.slideTo( index, 1000, false );

						});



					}





					//Swiper custom slides transform effect (Parallax effect)
					//------------------------------------------

					if ( $el.find( '#app-slider3' ).length > 0 ) {
						const interleaveOffset = 0.5;
		
						const swiper3: any = new SW('#app-slider3', {
							slidesPerView: 1,
							spaceBetween: 0,
							loop: false,
							speed: 1000,
							grabCursor: false,
							watchSlidesProgress: true,
							mousewheelControl: false,
							keyboardControl: false,
							pagination: {
								el: '.swiper-pagination',
								clickable: true,
								renderBullet: function (index, className) {
									return '<span class="' + className + '">' + (index + 1) + '</span>';
								},	
							},
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							},
							on: {
								progress: function(this: any, e: any ) {

									const thisSwiper = this;
									for (let i = 0; i < thisSwiper.slides.length; i++) {
										const slideProgress = thisSwiper.slides[i].progress;
										const innerOffset = thisSwiper.width * interleaveOffset;
										const innerTranslate = slideProgress * innerOffset;
										thisSwiper.slides[i].querySelector(".slide-inner").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";

										//console.log( e.passedParams );
									}
								},
								touchStart: function(this: any, e: any ) {
									const passedParams = e.passedParams;
									const thisSwiper = this;
									for (let i = 0; i < thisSwiper.slides.length; i++) {
										thisSwiper.slides[i].style.transition = "";
									}
								},
								setTransition: function(this: any, e: any ) {

									const passedParams = e.passedParams;
									const thisSwiper = this;
									for (let i = 0; i < thisSwiper.slides.length; i++) {
										thisSwiper.slides[i].style.transition = passedParams.speed + "ms";
										thisSwiper.slides[i].querySelector(".slide-inner").style.transition = passedParams.speed + "ms";
									}
								}
							}

						});


						//AutoPlay
						swiper3.autoplay.start();
						//swiper3.autoplay.stop();			
					}




					//Swiper custom slides transform effect (Scale Effect without left/right swipe)
					//------------------------------------------

					if ( $el.find( '#app-slider4' ).length > 0 ) {
						const swiper4: any = new SW('#app-slider4', {
							slidesPerView: 1,
							spaceBetween: 0,
							loop: false,
							speed: 1000,
							grabCursor: false,
							watchSlidesProgress: true,
							mousewheelControl: false,
							keyboardControl: false,
							virtualTranslate: true, /* Required */
							pagination: {
								el: '.swiper-pagination',
								clickable: true,
								renderBullet: function (index, className) {
									return '<span class="' + className + '">' + (index + 1) + '</span>';
								},	
							},
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							},
							on: {
								progress: function(this: any, translate: any ) {

									const thisSwiper = this;

									for (let i = 0; i < thisSwiper.slides.length; i++) {
										const slideProgress = thisSwiper.slides[i].progress;
										console.log( translate.params );
									}
								},
								touchStart: function(this: any, translate: any ) {
									const params = translate.params;
									const thisSwiper = this;

								},
								setTransition(this: any, translate: any ) {
									const params = translate.params;
									const thisSwiper = this;
								},
								setTranslate(this: any, translate: any) {

									const params = translate.params;
									const thisSwiper = this;



									/*
									A weird way to find this out but I've found no other.
									Checks if the progress on the active slide is 1 or -1 which happens when swiper navigates to next/previous slide on click and keybord navigation.
									If not then the slider is being dragged, so we get the right index by finding the startTranslate from touchEvents in array of transitions the swiper snaps to.
									The startTranslate doesn't exist on initial load so we use the initialSlide index instead.
									*/
									const getActiveIndexBeforeTransitionStart = function(curSwiper, curSlides) {
										const _progress = curSlides[curSwiper.activeIndex].progress;
										const _draggingProgress = Math.abs(_progress);
										const isDragging = _draggingProgress === 1 ? true : false;

										if (isDragging) {
											return curSwiper.slidesGrid.indexOf( -curSwiper.touchEventsData.startTranslate || curSwiper.params.initialSlide);
										} else {
											return curSwiper.activeIndex;
										}
									};


									const getDirection = function(animationProgress) {
										if (animationProgress === 0) {
											return "NONE";
										} else if (animationProgress > 0) {
											return "NEXT";
										} else {
											return "BACK";
										}
									};



									const durationInSeconds = params.speed / 1000;
									// convert slides object to plain array
									const slides = thisSwiper.slides;

									// get the index of the slide active before transition start (activeIndex changes halfway when dragging)
									const originIndex = getActiveIndexBeforeTransitionStart(thisSwiper, slides);
									// get information about animation progress from the active slide - the active slide's value is always -1 to 1.
									/* 
									every slide has a progress attribute equal to the "distance" from the current active index.
									*/
									const animationProgress = slides[originIndex].progress;
									// you can then get the drag direction like so:
									const direction = getDirection(animationProgress);
									// console.log(direction);
									// do magic with each slide
									slides.map(function (perSlide, index) {
										// to put the slides behind each other we have to set their CSS translate accordingly since by default they are arranged in line.
										const offset = perSlide.swiperSlideOffset;
										let x = -offset;
										if (!thisSwiper.params.virtualTranslate) x -= thisSwiper.translate;
										let y = 0;
										if (!thisSwiper.isHorizontal()) {
											y = x;
											x = 0;
										}
										TweenMax.set(perSlide, {
											x,
											y
										});

										// do our animation stuff!
										const clip = function clip(val, min, max) {
											return Math.max(min, Math.min(val, max));
										};
										const ZOOM_FACTOR = 0.05;

										const opacity = Math.max(1 - Math.abs(perSlide.progress), 0);

										const clippedProgress = clip(perSlide.progress, -1, 1);
										const scale = 1 - ZOOM_FACTOR * clippedProgress;

										// you can do your CSS animation instead of using tweening.
										TweenMax.to(perSlide, durationInSeconds, {
											scale,
											opacity
										});
									});



								}
							}

						});


						//AutoPlay
						swiper4.autoplay.start();
						//swiper4.autoplay.stop();			
					}





					//Centered Slides
					//------------------------------------------	

					if ( $el.find( '#app-slider5' ).length > 0 ) {
						const swiper5: any = new SW('#app-slider5', {
							slidesPerView: 3,
							spaceBetween: 30,
							loop: true,
							speed: 1000,
							centeredSlides: true,
							pagination: {
								el: '.swiper-pagination',
								clickable: true,
								renderBullet: function (index, className) {
									return '<span class="' + className + '">' + (index + 1) + '</span>';
								},	
							},
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							}

						});

					}		




					//Display half on both sides
					//------------------------------------------		

					if ( $el.find( '#app-slider6' ).length > 0 ) {
						const swiper6: any = new SW('#app-slider6', {
							slidesPerView: 'auto',//Number of slides per view, and it must be "auto"!
							spaceBetween: 30,
							loop: true,
							speed: 1000,
							centeredSlides: true, //If true, then active slide will be centered, not always on the left side.
							pagination: {
								el: '.swiper-pagination',
								clickable: true,
								renderBullet: function (index, className) {
									return '<span class="' + className + '">' + (index + 1) + '</span>';
								},	
							},
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							}

						});


					}



					//Custom Progress Bar
					//------------------------------------------

					if ( $el.find( '#app-slider7' ).length > 0 ) {
						const cusProgressBar = function( speed, length, curIndex ) {
							TweenMax.set( '#app-slider7__progress', {
								width: 0,
								onComplete: function() {
									TweenMax.to( '#app-slider7__progress', speed/1000, {
										width: '100%'
									});	
								}
							});


							TweenMax.set( '#app-slider7__progress2', {
								width: 100/length * (curIndex) + '%',
								onComplete: function() {
									TweenMax.to( '#app-slider7__progress2', speed/1000, {
										width: 100/length * (curIndex+1) + '%'
									});	
								}
							});
						};


						const swiper7: any = new SW('#app-slider7', {
							slidesPerView: 1,
							spaceBetween: 0,
							loop: false,
							speed: 3500,
							grabCursor: false,
							watchSlidesProgress: true,
							mousewheelControl: false,
							keyboardControl: false,
							pagination: {
								el: '.swiper-pagination',
								clickable: true,
								renderBullet: function (index, className) {
									return '<span class="' + className + '">' + (index + 1) + '</span>';
								},	
							},
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							},
							on: {
								init: function(this: any, e: any ) {
									const thisSwiper = this;
									console.log( 'current index: ' + thisSwiper.activeIndex );
									cusProgressBar( e.passedParams.speed, thisSwiper.slides.length, thisSwiper.activeIndex );

								},
								slideChange: function(this: any, e: any ) {
									const thisSwiper = this;
									console.log( 'current index: ' + 	thisSwiper.activeIndex );
									cusProgressBar( e.passedParams.speed, thisSwiper.slides.length, thisSwiper.activeIndex );

								}	

							}

						});	
					}


					//Gallery with center thumbs automatically
					//------------------------------------------
					if ( $el.find( '#app-slider8' ).length > 0 ) {
						const swiper8: any = new SW('#app-slider8', {
							spaceBetween: 10,
							grabCursor: false,
							loop: true,
							loopedSlides: 4,
							autoplay: {
								delay: 5000
							},
							// other parameters
							on: {
								click: function() {
									/* do something */
								}
							},
							keyboard: {
								enabled: true,
								onlyInViewport: false
							},
							autoHeight: true,
							pagination: {
								el: '.swiper-pagination',
								clickable: true,
								renderBullet: function (index, className) {
									return '<span class="' + className + '">' + (index + 1) + '</span>';
								},	
							},
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							},
							speed: 1000
						});


						/* thumbs */
						const swiper8Thumbs: any = new SW( '#app-slider8-thumbs', {
							spaceBetween: 10,
							centeredSlides: true,
							slidesPerView: "auto", //If you use it with "auto" value and along with loop: true then you need to specify loopedSlides parameter with amount of slides to loop (duplicate)
							touchRatio: 0.4,
							slideToClickedSlide: true,
							loop: true,
							loopedSlides: 4,
							keyboard: {
								enabled: true,
								onlyInViewport: false
							},
							speed: 1000
						});

						/* set conteoller  */
						swiper8.controller.control = swiper8Thumbs;
						swiper8Thumbs.controller.control = swiper8;


					}




					//Gallery with manual triggers
					//------------------------------------------
					if ( $el.find( '#app-slider9' ).length > 0 ) {
						const swiper9: any = new SW('#app-slider9', {
							spaceBetween: 10,
							grabCursor: false,
							autoplay: {
								delay: 5000
							},
							// other parameters
							keyboard: {
								enabled: true,
								onlyInViewport: false
							},
							autoHeight: true,
							pagination: {
								el: '.swiper-pagination',
								clickable: true,
								renderBullet: function (index, className) {
									return '<span class="' + className + '">' + (index + 1) + '</span>';
								},	
							},
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							},
							speed: 1000,
							on: {
								click: function() {
									/* do something */
								},
								init: function(this: any, e: any ) {
									const thisSwiper = this;
									swiper9BTN( thisSwiper.activeIndex, true );

								}	

							}
						});


						//Sync swiper slider
						swiper9.on( 'slideChange', function(this: any) {

							const index = this.activeIndex;
							swiper9BTN( index, false );

						});


						__( '#app-slider9-triggers > div' ).off( 'click' ).on( 'click', function(this: any) {
							swiper9BTN( __( this ).index(), false );
						});


						function swiper9BTN( index, init ) {
							const _btns = __( '#app-slider9-triggers > div' );
							_btns.removeClass( 'is-active' );
							_btns.eq( index ).addClass( 'is-active' );

							if ( !init ) {
								swiper9.slideTo( index, 1000 );
							}

						}




					}



					//------------------------------------------

					//Prevents front-end javascripts that are activated in the background to repeat loading.
					$el.data( 'activated', 1 );



				}//endif actived
			});



				

		});

		
	}
	
	render() {
		
		
		const {
			id,
			...attributes
		} = this.props;
		

		
		return (
		  <>
			
			<div id={id ? id : 'app-swiper-' + __.GUID.create() } className="uix-swiper" {...attributes}>


				{/*<!-- Title
				====================================================== -->*/}
				<section className="uix-spacing--s">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Synchronize multiple objects</h3>
								<p>For different responsive breakpoints (screen sizes) and custom buttons.</p>
								<hr />


							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>



			   {/*<!-- Slideshow
				====================================================== -->*/}
				<div role="slider" className="swiper-container" id="app-slider1">
					<div className="swiper-wrapper">
						<div className="swiper-slide">Slide One 1</div>
						<div className="swiper-slide">Slide One 2</div>
						<div className="swiper-slide">Slide One 3</div>
						<div className="swiper-slide">Slide One 4</div>
						<div className="swiper-slide">Slide One 5</div>
						<div className="swiper-slide">Slide One 6</div>
						<div className="swiper-slide">Slide One 7</div>
						<div className="swiper-slide">Slide One 8</div>
						<div className="swiper-slide">Slide One 9</div>
						<div className="swiper-slide">Slide One 10</div>
					</div>
					{/*<!-- Add Pagination -->*/}
					<div className="swiper-pagination"></div>
					{/*<!-- Add Arrows -->*/}
					<div className="swiper-button-prev">

						<svg viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
					</div>
					<div className="swiper-button-next">
						<svg viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
					</div>
				</div>	
				{/*<!-- /.swiper-container -->*/}



				<div role="slider" className="swiper-container" id="app-slider2" style={__.styleFormat("margin-top: 30px;")}>
					<div className="swiper-wrapper">
						<div className="swiper-slide">Slide Two 1</div>
						<div className="swiper-slide">Slide Two 2</div>
						<div className="swiper-slide">Slide Two 3</div>
						<div className="swiper-slide">Slide Two 4</div>
						<div className="swiper-slide">Slide Two 5</div>
						<div className="swiper-slide">Slide Two 6</div>
						<div className="swiper-slide">Slide Two 7</div>
						<div className="swiper-slide">Slide Two 8</div>
						<div className="swiper-slide">Slide Two 9</div>
						<div className="swiper-slide">Slide Two 10</div>
					</div>
				</div>	
				{/*<!-- /.swiper-container -->*/}



				{/*<!-- Title
				====================================================== -->*/}
				<section className="uix-spacing--s">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Parallax Effect</h3>
								<p>Custom slides transform effect and custom buttons..</p>
								<hr />


							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>



			   {/*<!-- Slideshow
				====================================================== -->*/}
				<div role="slider" className="swiper-container" id="app-slider3" style={__.styleFormat("margin-top: 30px;")}>
					<div className="swiper-wrapper">
						<div className="swiper-slide"><span>Slide Three 1</span><div className="slide-inner" style={__.styleFormat(`background-image:url(${rootDirectory}/assets/images/demo/slide-1.jpg)`)}></div></div>
						<div className="swiper-slide"><span>Slide Three 2</span><div className="slide-inner" style={__.styleFormat(`background-image:url(${rootDirectory}/assets/images/demo/slide-2.jpg)`)}></div></div>
						<div className="swiper-slide"><span>Slide Three 3</span><div className="slide-inner" style={__.styleFormat(`background-image:url(${rootDirectory}/assets/images/demo/slide-3.jpg)`)}></div></div>
					</div>
					{/*<!-- Add Pagination -->*/}
					<div className="swiper-pagination"></div>
					{/*<!-- Add Arrows -->*/}
					<div className="swiper-button-prev">

						<svg viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
					</div>
					<div className="swiper-button-next">
						<svg viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
					</div>
				</div>	
				{/*<!-- /.swiper-container -->*/}				





				{/*<!-- Title
				====================================================== -->*/}
				<section className="uix-spacing--s">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Scale Effect without left/right swipe</h3>
								<p>Custom slides transform effect and custom buttons..</p>
								<hr />


							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>





			   {/*<!-- Slideshow
				====================================================== -->*/}
				<div role="slider" className="swiper-container" id="app-slider4" style={__.styleFormat("margin-top: 30px;")}>
					<div className="swiper-wrapper">
						<div className="swiper-slide"><span>Slide Three 1</span><div className="slide-inner" style={__.styleFormat(`background-image:url(${rootDirectory}/assets/images/demo/slide-1.jpg)`)}></div></div>
						<div className="swiper-slide"><span>Slide Three 2</span><div className="slide-inner" style={__.styleFormat(`background-image:url(${rootDirectory}/assets/images/demo/slide-2.jpg)`)}></div></div>
						<div className="swiper-slide"><span>Slide Three 3</span><div className="slide-inner" style={__.styleFormat(`background-image:url(${rootDirectory}/assets/images/demo/slide-3.jpg)`)}></div></div>
					</div>
					{/*<!-- Add Pagination -->*/}
					<div className="swiper-pagination"></div>
					{/*<!-- Add Arrows -->*/}
					<div className="swiper-button-prev">

						<svg viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
					</div>
					<div className="swiper-button-next">
						<svg viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
					</div>
				</div>	
				{/*<!-- /.swiper-container -->*/}			




				{/*<!-- Title
				====================================================== -->*/}
				<section className="uix-spacing--s">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Centered Slides</h3>
								<p>Allow this option if you want to have your active slide in the center, instead of snapped to the left side of Swiper view.</p>
								<hr />


							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>

			   {/*<!-- Slideshow
				====================================================== -->*/}
				<div role="slider" className="swiper-container" id="app-slider5">
					<div className="swiper-wrapper">
						<div className="swiper-slide">Slide One 1</div>
						<div className="swiper-slide">Slide One 2</div>
						<div className="swiper-slide">Slide One 3</div>
						<div className="swiper-slide">Slide One 4</div>
						<div className="swiper-slide">Slide One 5</div>
						<div className="swiper-slide">Slide One 6</div>
						<div className="swiper-slide">Slide One 7</div>
						<div className="swiper-slide">Slide One 8</div>
					</div>
					{/*<!-- Add Pagination -->*/}
					<div className="swiper-pagination"></div>
					{/*<!-- Add Arrows -->*/}
					<div className="swiper-button-prev">

						<svg viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
					</div>
					<div className="swiper-button-next">
						<svg viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
					</div>
				</div>	
				{/*<!-- /.swiper-container -->*/}





				{/*<!-- Title
				====================================================== -->*/}
				<section className="uix-spacing--s">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Display half on both sides</h3>
								<p>Set up CSS to achieve only half of the entries on both sides.</p>
								<hr />


							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>

			   {/*<!-- Slideshow
				====================================================== -->*/}
				<div role="slider" className="swiper-container" id="app-slider6">
					<div className="swiper-wrapper">
						<div className="swiper-slide">Slide One 1</div>
						<div className="swiper-slide">Slide One 2</div>
						<div className="swiper-slide">Slide One 3</div>
						<div className="swiper-slide">Slide One 4</div>
						<div className="swiper-slide">Slide One 5</div>
						<div className="swiper-slide">Slide One 6</div>
						<div className="swiper-slide">Slide One 7</div>
						<div className="swiper-slide">Slide One 8</div>
					</div>
					{/*<!-- Add Pagination -->*/}
					<div className="swiper-pagination"></div>
					{/*<!-- Add Arrows -->*/}
					<div className="swiper-button-prev">

						<svg viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
					</div>
					<div className="swiper-button-next">
						<svg viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
					</div>
				</div>	
				{/*<!-- /.swiper-container -->*/}





				{/*<!-- Title
				====================================================== -->*/}
				<section className="uix-spacing--s">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Custom Progress Bar</h3>
								<p>Demonstrate how to add a slide progress bar to Swiper.</p>
								<hr />


							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>

			   {/*<!-- Slideshow
				====================================================== -->*/}
				<div role="slider" className="swiper-container" id="app-slider7">
					<div id="app-slider7__progress"></div>
					<div id="app-slider7__progress2"></div>

					<div className="swiper-wrapper">
						<div className="swiper-slide">Slide One 1</div>
						<div className="swiper-slide">Slide One 2</div>
						<div className="swiper-slide">Slide One 3</div>
						<div className="swiper-slide">Slide One 4</div>
						<div className="swiper-slide">Slide One 5</div>
						<div className="swiper-slide">Slide One 6</div>
						<div className="swiper-slide">Slide One 7</div>
						<div className="swiper-slide">Slide One 8</div>
					</div>
					{/*<!-- Add Pagination -->*/}
					<div className="swiper-pagination"></div>
					{/*<!-- Add Arrows -->*/}
					<div className="swiper-button-prev">

						<svg viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
					</div>
					<div className="swiper-button-next">
						<svg viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
					</div>
				</div>	
				{/*<!-- /.swiper-container -->*/}






				{/*<!-- Title
				====================================================== -->*/}
				<section className="uix-spacing--s">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Gallery with center thumbs automatically</h3>
								<p>Using the Swiper API that enables you to add custom thumbnails and link them to your Swiper instance automatically.</p>
								<hr />


							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>

			   {/*<!-- Slideshow
				====================================================== -->*/}
				<div style={__.styleFormat("max-width: 600px;")}>

					<div role="slider" className="swiper-container" id="app-slider8">
						<div className="swiper-wrapper">
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/320x345.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/400x279.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/400x320.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/400x320.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/400x400.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/450x338.jpg`} alt="null" /></div>
						</div>
						{/*<!-- Add Pagination -->*/}
						<div className="swiper-pagination"></div>
						{/*<!-- Add Arrows -->*/}
						<div className="swiper-button-prev">

							<svg viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
						</div>
						<div className="swiper-button-next">
							<svg viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
						</div>
					</div>	
					{/*<!-- /.swiper-container -->*/}



					{/*<!-- //// thumbs  /// -->*/}
					<div role="slider" className="swiper-container" id="app-slider8-thumbs">
						<div className="swiper-wrapper">
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/320x345.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/400x279.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/400x320.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/400x320.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/400x400.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/450x338.jpg`} alt="null" /></div>
						</div>
					</div>	
					{/*<!-- /#app-slider8-thumbs -->*/}




				</div>





				{/*<!-- Title
				====================================================== -->*/}
				<section className="uix-spacing--s">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Gallery with manual triggers</h3>
								<p>Customize the thumbnail/trigger and link it to your Swiper instance manually.</p>
								<hr />


							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>

			   {/*<!-- Slideshow
				====================================================== -->*/}
				<div style={__.styleFormat("max-width: 600px;")}>

					<div role="slider" className="swiper-container" id="app-slider9">
						<div className="swiper-wrapper">
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/320x345.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/400x279.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/400x320.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/400x320.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/400x400.jpg`} alt="null" /></div>
							<div className="swiper-slide"><img src={`${rootDirectory}/assets/images/placeholder/450x338.jpg`} alt="null" /></div>
						</div>
						{/*<!-- Add Pagination -->*/}
						<div className="swiper-pagination"></div>
						{/*<!-- Add Arrows -->*/}
						<div className="swiper-button-prev">

							<svg viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
						</div>
						<div className="swiper-button-next">
							<svg viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
						</div>
					</div>	
					{/*<!-- /.swiper-container -->*/}



					{/*<!-- //// triggers  /// -->*/}
					<div id="app-slider9-triggers">
						<div><img src={`${rootDirectory}/assets/images/placeholder/320x345.jpg`} alt="null" /></div>
						<div><img src={`${rootDirectory}/assets/images/placeholder/400x279.jpg`} alt="null" /></div>
						<div><img src={`${rootDirectory}/assets/images/placeholder/400x320.jpg`} alt="null" /></div>
						<div><img src={`${rootDirectory}/assets/images/placeholder/400x320.jpg`} alt="null" /></div>
						<div><img src={`${rootDirectory}/assets/images/placeholder/400x400.jpg`} alt="null" /></div>
						<div><img src={`${rootDirectory}/assets/images/placeholder/450x338.jpg`} alt="null" /></div>
					</div>	
					{/*<!-- /#app-slider9-triggers -->*/}




				</div>







			</div>
			{/*<!-- /.uix-swiper -->*/}



		  </>
		)
	}
}

