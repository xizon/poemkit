import { __ } from '@uixkit.react/components/_utils/_all';


declare global {
    interface Window {
        DocumentTouch?: any;
        dragEvents?: any[any];
        intervalEvents?: any[any];
    }
}

interface sliderAnimeConfig {
    /** Setup a sliderAnime for the slider to animate automatically. */
	auto?: boolean | undefined;
    /** Autoplay interval. */
	timing?: number | undefined;
    /** Gives the slider a seamless infinite loop. */
	loop?: boolean | undefined;   
    /** Total number ID or class of counter. */
    countTotalID?: string | undefined;   
    /** Current number ID or class of counter. */
	countCurID?: string | undefined;   
    /** Navigation ID for paging control of each slide. */
    paginationID?: string | undefined;   
    /** Previous/Next arrow navigation ID. */
	arrowsID?: string | boolean | undefined;   
    /** Allow drag and drop on the slider. */
    draggable?: boolean | undefined;   
    /** Drag & Drop Change icon/cursor while dragging. */
	draggableCursor?: string | boolean | undefined;   
}




export function sliderAnime( curElement: any, config: sliderAnimeConfig ) {
    if ( typeof curElement === typeof undefined ) return;
    
    // Set a default configuration
    config = __.setDefaultOptions({
        "auto"              : false,
        "timing"            : 10000,
        "loop"              : false,
        "countTotalID"      : "p.count em.count",
        "countCurID"        : "p.count em.current",
        "paginationID"      : ".uix-slideshow__pagination",
        "arrowsID"          : ".uix-slideshow__arrows",
        "draggable"         : false,
        "draggableCursor"   : "move"
    }, config);

    //
    let dataAuto               = config.auto,
        dataTiming             = config.timing,
        dataLoop               = config.loop,
        dataControlsPagination = config.paginationID,
        dataControlsArrows     = config.arrowsID,
        dataDraggable          = config.draggable,
        dataDraggableCursor    = config.draggableCursor,
        dataCountTotal         = config.countTotalID,
        dataCountCur           = config.countCurID;
        

    //
    const $sliderWrapper = curElement;
    let animDelay: any = 0;

    //Used to delete the global listening event when the component is about to be unmounted
    window.dragEvents = [];
    window.intervalEvents = [];


    //Slider Initialize
    //------------------------------------------
    let	windowWidth = window.innerWidth;
    sliderInit( false );

    function windowUpdate() {
        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        if ( window.innerWidth != windowWidth ) {
            
            // Update the window width for next time
            windowWidth = window.innerWidth;

            // Do stuff here
            sliderInit( true );


        }
    }
    
    const debounceFunc = __.debounce(windowUpdate, 50);
    window.removeEventListener('resize', debounceFunc);
    window.addEventListener('resize', debounceFunc);
    



    //Core Functions
    //------------------------------------------

    /*
     * Returns the dimensions of a video asynchrounsly.
     *
     * @param  {String} url            - Video URL.
     * @return {Json}                  - An object containing the properties height and width. 
     */
    function getVideoDimensions(url) {
        return new Promise(function (resolve) {
            // create the video element
            let video = document.createElement('video');

            // place a listener on it
            video.addEventListener("loadedmetadata", function () {
                // retrieve dimensions
                let height = this.videoHeight;
                let width = this.videoWidth;
                // send back result
                resolve({
                    height: height,
                    width: width
                });
            }, false);

            // start download meta-datas
            video.src = url;
        });
    }



    /*
     * Initialize sliderAnime
     *
     * @param  {Boolean} resize            - Determine whether the window size changes.
     * @return {Void}
     */
    function sliderInit(resize) {

        const $items = $sliderWrapper.find('.uix-slideshow__item'),
              $first = $items.first();

        let nativeItemW,
            nativeItemH,
            activated = $sliderWrapper.data('activated');



        if (activated === null || activated === 0) {


            //Images loaded
            //-------------------------------------	
            const images: string[] = [];
            $items.each(function (this: any, index: number) {
                const imgURL = __( this ).find('img').attr('src');
                if (imgURL !== null) {
                    images.push(imgURL);
                }
            });

            loader(images, loadImage, function () {
                $sliderWrapper.addClass('is-loaded');
            });



            //Autoplay times
            let playTimes;

            //A function called "timer" once every second (like a digital watch).
            //An interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().
            $sliderWrapper[0].animatedSlides = null;


            setTimeout(function () {

                //The speed of movement between elements.
                // Avoid the error that getTransitionDuration takes 0
                animDelay = __.cssProperty.getTransitionDuration($first[0]);



            }, 100);



            //Initialize the first item container
            //-------------------------------------		
            $items.addClass('next');
            setTimeout(function () {
                $first.addClass('is-active');
            }, animDelay);


            if ($first.find('video').length > 0) {

                //Returns the dimensions (intrinsic height and width ) of the video
                const video = $first.find( 'video' )[0];

                const _sources = video.getElementsByTagName('source');
                const _src = _sources.length > 0 ? _sources[0].src : video.src;

                
                $first.find('video').css({
                    'width': $sliderWrapper.width() + 'px'
                });

                getVideoDimensions(_src).then(function (res: any): void {

                    $sliderWrapper.css('height', res.height * ($sliderWrapper.width() / res.width) + 'px');

                    nativeItemW = res.width;
                    nativeItemH = res.height;

                    //Initialize all the items to the stage
                    addItemsToStage($sliderWrapper, nativeItemW, nativeItemH, dataControlsPagination, dataControlsArrows, dataLoop, dataDraggable, dataDraggableCursor, dataCountTotal, dataCountCur);
                });



            } else {

                const imgURL = $first.find('img').attr('src');

                if ( imgURL !== null ) {
                    const img = new Image();

                    img.onload = function () {
                        $sliderWrapper.css('height', $sliderWrapper.width() * (img.height / img.width) + 'px');

                        nativeItemW = img.width;
                        nativeItemH = img.height;

                        //Initialize all the items to the stage
                        addItemsToStage($sliderWrapper, nativeItemW, nativeItemH, dataControlsPagination, dataControlsArrows, dataLoop, dataDraggable, dataDraggableCursor, dataCountTotal, dataCountCur);

                    };

                    img.src = imgURL;
                }



            }



            //Autoplay Slider
            //-------------------------------------		
            if (!resize) {


                if (dataAuto && !isNaN(dataTiming as number) && isFinite(dataTiming as number)) {

                    sliderAutoPlay(playTimes, dataTiming, dataLoop, $sliderWrapper, dataCountTotal, dataCountCur, dataControlsPagination, dataControlsArrows);

                    const autoplayEnter = function() {
                        clearInterval($sliderWrapper[0].animatedSlides);
                    };

                    const autoplayLeave = function() {
                        sliderAutoPlay(playTimes, dataTiming, dataLoop, $sliderWrapper, dataCountTotal, dataCountCur, dataControlsPagination, dataControlsArrows);
                    };

                    // Do not use the `off()` method, otherwise it will cause the second mouseenter to be invalid
                    $sliderWrapper.on( 'mouseenter', autoplayEnter );
                    $sliderWrapper.on( 'mouseleave', autoplayLeave );  

                    if ( __.isTouchCapable() ) {
                        $sliderWrapper.on( 'pointerenter', autoplayEnter );
                        $sliderWrapper.on( 'pointerleave', autoplayLeave );  
                    }



                }


            }

            //Prevents front-end javascripts that are activated with AJAX to repeat loading.
            $sliderWrapper.data('activated', 1);

        }//endif activated



    }




    /*
        * Trigger slider autoplay
        *
        * @param  {Function} playTimes            - Number of times.
        * @param  {Number} timing                 - Autoplay interval.
        * @param  {Boolean} loop                  - Gives the slider a seamless infinite loop.
        * @param  {Object} slider                 - Selector of the slider .
        * @param  {String} countTotalID           - Total number ID or class of counter.
        * @param  {String} countCurID             - Current number ID or class of counter.
        * @param  {String} paginationID           - Navigation ID for paging control of each slide.
        * @param  {String} arrowsID               - Previous/Next arrow navigation ID.
        * @return {Void}                          - The constructor.
        */
    function sliderAutoPlay( playTimes, timing, loop, slider, countTotalID, countCurID, paginationID, arrowsID ) {	

        const items = slider.find( '.uix-slideshow__item' ),
              total = items.length;

        slider[0].animatedSlides = setInterval( function() {

            playTimes = parseFloat( items.filter( '.is-active' ).index() );
            playTimes++;


            if ( !loop ) {
                if ( playTimes < total && playTimes >= 0 ) sliderUpdates( playTimes, $sliderWrapper, 'next', countTotalID, countCurID, paginationID, arrowsID, loop );
            } else {
                if ( playTimes == total ) playTimes = 0;
                if ( playTimes < 0 ) playTimes = total-1;		
                sliderUpdates( playTimes, $sliderWrapper, 'next', countTotalID, countCurID, paginationID, arrowsID, loop );
            }

        }, timing );

        window.intervalEvents.push(slider[0].animatedSlides);
    }




    /*
        * Initialize all the items to the stage
        *
        * @param  {Object} slider                 - Current selector of each slider.
        * @param  {Number} nativeItemW            - Returns the intrinsic width of the image/video.
        * @param  {Number} nativeItemH            - Returns the intrinsic height of the image/video.
        * @param  {String} paginationID           - Navigation ID for paging control of each slide.
        * @param  {String} arrowsID               - Previous/Next arrow navigation ID.
        * @param  {Boolean} loop                  - Gives the slider a seamless infinite loop. 
        * @param  {Boolean} draggable             - Allow drag and drop on the slider.
        * @param  {String} draggableCursor        - Drag & Drop Change icon/cursor while dragging.
        * @param  {String} countTotalID           - Total number ID or class of counter.
        * @param  {String} countCurID             - Current number ID or class of counter.
        * @return {Void}
        */
    function addItemsToStage( slider, nativeItemW, nativeItemH, paginationID, arrowsID, loop, draggable, draggableCursor, countTotalID, countCurID ) {

        const $this                    = slider,
                $items                   = $this.find( '.uix-slideshow__item' ),
                $first                   = $items.first(),
                itemsTotal               = $items.length;


        //If arrows does not exist on the page, it will be added by default, 
        //and the drag and drop function will be activated.
        if ( __( arrowsID ).length == 0 ) {
            __( 'body' ).prepend( '<div style="display:none;" class="uix-slideshow__arrows '+arrowsID.replace('#','').replace('.','')+'"><a href="#" class="uix-slideshow__arrows--prev"></a><a href="#" class="uix-slideshow__arrows--next"></a></div>' );
        }



        //Prevent bubbling
        if ( itemsTotal == 1 ) {
            __( paginationID ).hide();
            __( arrowsID ).hide();
        }
        
        
        //Add identifiers for the first and last items
        $items.last().addClass( 'last' );
        $items.first().addClass( 'first' );



        //Pagination dots 
        //-------------------------------------	
        let _dot       = '',
            _dotActive = '';
        _dot += '<ul>';
        for ( let i = 0; i < itemsTotal; i++ ) {

            _dotActive = ( i == 0 ) ? 'class="is-active"' : '';

            _dot += '<li><a '+_dotActive+' data-index="'+i+'" href="#"></a></li>';
        }
        _dot += '</ul>';

        if ( __( paginationID ).html() == '' ) __( paginationID ).html( _dot );

        __( paginationID ).find( 'li a' ).off( 'click' ).on( 'click', function( this: any, e: any ) {
            e.preventDefault();
            
            const curBtnIndex = parseFloat( __( this ).data( 'index' ) );
            
            //Prevent buttons' events from firing multiple times
            const $btn = __( this );
            if ( $btn.attr( 'aria-disabled' ) == 'true' ) return false;
            __( paginationID ).find( 'li a' ).attr( 'aria-disabled', 'true' );
            setTimeout( function() {
                __( paginationID ).find( 'li a' ).attr( 'aria-disabled', 'false' );
            }, animDelay );
            

            if ( !__( this ).hasClass( 'is-active' ) ) {

                //Determine the direction
                let curDir = 'prev';
                if ( curBtnIndex > parseFloat( $items.filter( '.is-active' ).index() ) ) {
                    curDir = 'next';
                }

                sliderUpdates( curBtnIndex, $this, curDir, countTotalID, countCurID, paginationID, arrowsID, loop );

                //Pause the auto play event
                clearInterval( $this[0].animatedSlides );	

            }



        });

        //Next/Prev buttons
        //-------------------------------------		
        const _prev = __( arrowsID ).find( '.uix-slideshow__arrows--prev' ),
              _next = __( arrowsID ).find( '.uix-slideshow__arrows--next' );


        __( arrowsID ).find( 'a' ).removeClass( 'is-disabled' );
        if ( !loop ) {
            _prev.addClass( 'is-disabled' );
        }


        _prev.off( 'click' ).on( 'click', function( this: any, e: any ) {
            e.preventDefault();

            //Pause the auto play event
            clearInterval( $this[0].animatedSlides );   

            //Move animation
            prevMove();
        });

        _next.off( 'click' ).on( 'click', function( this: any, e: any ) {
            e.preventDefault();

            //Pause the auto play event
            clearInterval( $this[0].animatedSlides );   

            //Move animation
            nextMove();
        });


        function prevMove() {
            //Prevent buttons' events from firing multiple times
            if ( _prev.attr( 'aria-disabled' ) == 'true' ) return false;
            _prev.attr( 'aria-disabled', 'true' );
            setTimeout( function() {
                _prev.attr( 'aria-disabled', 'false' );
            }, animDelay );
            
    
            //
            if ( _prev.hasClass( 'is-disabled' ) ) return false;

            //
            sliderUpdates( parseFloat( $items.filter( '.is-active' ).index() ) - 1, $this, 'prev', countTotalID, countCurID, paginationID, arrowsID, loop );


        }

        function nextMove() {
            //Prevent buttons' events from firing multiple times
            if ( _next.attr( 'aria-disabled' ) == 'true' ) return false;
            _next.attr( 'aria-disabled', 'true' );
            setTimeout( function() {
                _next.attr( 'aria-disabled', 'false' );
            }, animDelay );
            

            //
            if ( _next.hasClass( 'is-disabled' ) ) return false;

            //
            sliderUpdates( parseFloat( $items.filter( '.is-active' ).index() ) + 1, $this, 'next', countTotalID, countCurID, paginationID, arrowsID, loop );
            
        } 

        //Added touch method to mobile device and desktop
        //-------------------------------------	
        const $dragTrigger = $this.find( '.uix-slideshow__inner' );
        let mouseX, mouseY;
        let isMoving = false;

        //Avoid images causing mouseup to fail
        $dragTrigger.find( 'img' ).css({
            'pointer-events': 'none',
            'user-select': 'none'
        });


        //Make the cursor a move icon when a user hovers over an item
        if ( draggable && draggableCursor != '' && draggableCursor != false ) $dragTrigger.css( 'cursor', draggableCursor );


        $dragTrigger[0].removeEventListener( 'mousedown', dragStart );
        document.removeEventListener( 'mouseup', dragEnd );

        $dragTrigger[0].removeEventListener( 'touchstart', dragStart );
        document.removeEventListener( 'touchend', dragEnd );


        //
        $dragTrigger[0].addEventListener( 'mousedown', dragStart );
        $dragTrigger[0].addEventListener( 'touchstart', dragStart );

        
        function dragStart(e) {
            //Do not use "e.preventDefault()" to avoid prevention page scroll on drag in IOS and Android
            const touches = e.touches;

            if ( touches && touches.length ) {	
                mouseX = touches[0].clientX;
                mouseY = touches[0].clientY;
            } else {
                mouseX = e.clientX;
                mouseY = e.clientY;
            } 

            document.addEventListener('mouseup', dragEnd);
            document.addEventListener('mousemove', dragProcess);

            document.addEventListener('touchend', dragEnd);
            document.addEventListener('touchmove', dragProcess); 

        
            window.dragEvents.push(dragEnd, dragProcess);

        }

        function dragProcess(e) {

            const touches = e.touches;
            let offsetX, offsetY;


            if ( touches && touches.length ) {	
                offsetX = mouseX - touches[0].clientX,
                offsetY = mouseY - touches[0].clientY;
            } else {
                offsetX = mouseX - e.clientX,
                offsetY = mouseY - e.clientY;
            } 


            //--- left
            if ( offsetX >= 50) {
                if ( draggable || ( touches && touches.length ) ) {
                    if ( !isMoving ) {
                        isMoving = true;
                        nextMove();
                    }
                }
            }

            //--- right
            if ( offsetX <= -50) {
                if ( draggable || ( touches && touches.length ) ) {
                    if ( !isMoving ) {
                        isMoving = true;
                        prevMove();
                    }
                }
            }

            //--- up
            if ( offsetY >= 50) { 

            }

            //--- down
            if ( offsetY <= -50) {

            }
        }

        function dragEnd(e) {
            document.removeEventListener( 'mousemove', dragProcess);
            document.removeEventListener( 'touchmove', dragProcess);

            //restore move action status
            setTimeout( function() {
                isMoving = false;
            }, animDelay);
        }

    }



    /*
        * Transition Between Slides
        *
        * @param  {Number} elementIndex           - Index of current slider.
        * @param  {Object} slider                 - Selector of the slider .
        * @param  {String} dir                    - Switching direction indicator.
        * @param  {String} countTotalID           - Total number ID or class of counter.
        * @param  {String} countCurID             - Current number ID or class of counter.
        * @param  {String} paginationID           - Navigation ID for paging control of each slide.
        * @param  {String} arrowsID               - Previous/Next arrow navigation ID.
        * @param  {Boolean} loop                  - Gives the slider a seamless infinite loop.
        * @return {Void}
        */
    function sliderUpdates( elementIndex, slider, dir, countTotalID, countCurID, paginationID, arrowsID, loop ) {

        const $items = slider.find( '.uix-slideshow__item' ),
                total  = $items.length;



        //Prevent bubbling
        if ( total == 1 ) {
            __( paginationID ).hide();
            __( arrowsID ).hide();
            return false;
        }



        //Transition Interception
        //-------------------------------------
        if ( loop ) {
            if ( elementIndex == total ) elementIndex = 0;
            if ( elementIndex < 0 ) elementIndex = total-1;	
        } else {
            __( arrowsID ).find( 'a' ).removeClass( 'is-disabled' );
            if ( elementIndex == total - 1 ) __( arrowsID ).find( '.uix-slideshow__arrows--next' ).addClass( 'is-disabled' );
            if ( elementIndex == 0 ) __( arrowsID ).find( '.uix-slideshow__arrows--prev' ).addClass( 'is-disabled' );
        }

        
        if ( __.isTouchCapable() ) {
            if ( elementIndex == total ) elementIndex = total-1;
            if ( elementIndex < 0 ) elementIndex = 0;	

            //Prevent bubbling
            if ( !loop ) {
                //first item
                if ( elementIndex == 0 ) {
                    __( arrowsID ).find( '.uix-slideshow__arrows--prev' ).addClass( 'is-disabled' );
                }

                //last item
                if ( elementIndex == total - 1 ) {
                    __( arrowsID ).find( '.uix-slideshow__arrows--next' ).addClass( 'is-disabled' );
                }	
            }


        }
        

        // call the current item
        //-------------------------------------
        const $current = $items.eq( elementIndex );	



        //Determine the direction and add class to switching direction indicator.
        let dirIndicatorClassName = '';
        if ( dir == 'prev' ) dirIndicatorClassName = 'prev';
        if ( dir == 'next' ) dirIndicatorClassName = 'next';



        //Add transition class to Controls Pagination
        __( paginationID ).find( 'li a' ).removeClass( 'leave' );
        __( paginationID ).find( 'li a.is-active' ).removeClass( 'is-active' ).addClass( 'leave');
        __( paginationID ).find( 'li a[data-index="'+elementIndex+'"]' ).addClass( 'is-active').removeClass( 'leave' );

        //Add transition class to each item
        $items.removeClass( 'leave prev next' );
        $items.addClass( dirIndicatorClassName );
        slider.find( '.uix-slideshow__item.is-active' ).removeClass( 'is-active' ).addClass( 'leave ' + dirIndicatorClassName );
        $items.eq( elementIndex ).addClass( 'is-active ' + dirIndicatorClassName ).removeClass( 'leave' );




        //Display counter
        //-------------------------------------
        if ( countTotalID !== false ) __( countTotalID ).text( total );
        if ( countCurID !== false ) __( countCurID ).text( parseFloat( elementIndex ) + 1 );		


        //Reset the default height of item
        //-------------------------------------	
        itemDefaultInit( slider, $current );		



    }

    /*
        * Initialize the default height of item
        *
        * @param  {Object} slider                 - Selector of the slider .
        * @param  {Object} currentLlement         - Current selector of each slider.
        * @return {Void}
        */
    function itemDefaultInit( slider, currentLlement ) {

        if ( currentLlement.find( 'video' ).length > 0 ) {

            //Returns the dimensions (intrinsic height and width ) of the video
            const video = currentLlement.find( 'video' )[0];

            const _sources = video.getElementsByTagName('source');
            const _src = _sources.length > 0 ? _sources[0].src : video.src;


            currentLlement.find( 'video' ).css({
                'width': currentLlement.closest( '.uix-slideshow__outline' ).width() + 'px'
            });   
            
            getVideoDimensions(_src).then(function (res: any): void {
                slider.css( 'height', res.height*(currentLlement.closest( '.uix-slideshow__outline' ).width()/res.width) + 'px' );
            });

            

        } else {

            const imgURL = currentLlement.find( 'img' ).attr( 'src' );
            if ( imgURL !== null ) {
                const img = new Image();

                img.onload = function() {

                    slider.css( 'height', currentLlement.closest( '.uix-slideshow__outline' ).width()*(img.height/img.width) + 'px' );		

                };

                img.src = imgURL;	
            }



        }	


    }

    // loader will 'load' items by calling thingToDo for each item,
    // before calling allDone when all the things to do have been done.
    function loader(items, thingToDo, allDone) {
        if (!items) {
            // nothing to do.
            return;
        }

        if ('undefined' === items.length) {
            // convert single item to array.
            items = [items];
        }

        let count = items.length;

        // this callback counts down the things to do.
        const thingToDoCompleted = function (items, i) {
            count--;
            if (0 == count) {
                allDone(items);
            }
        };

        for (let i = 0; i < items.length; i++) {
            // 'do' each thing, and await callback.
            thingToDo(items, i, thingToDoCompleted);
        }
    }

    function loadImage(items, i, onComplete) {
        const onLoad = function (e) {
            e.target.removeEventListener("load", onLoad);

            // this next line can be removed.
            // only here to prove the image was loaded.
            document.body.appendChild(e.target);

            // notify that we're done.
            onComplete(items, i);
        }
        const img = new Image();
        img.addEventListener("load", onLoad, false);
        img.src = items[i];
        img.style.display = 'none';
    }	


}

export default { sliderAnime };