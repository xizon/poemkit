import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply Third-party animation plugins --*/
import TweenMax from '@poemkit/components/_plugins/_lib-gsap';

declare global {
    interface Window {
        dragEvents?: any[any];
        intervalEvents?: any[any];
    }
}

interface hybridSliderAnimeConfig {
    /** Transition speed. This setting sets how long the transition animation lasts. Amount of time measured in milliseconds. */
    speed?: number | undefined;
    /** The direction of the component animation, the value can be `vertical` and `horizontal` */
    dir?: string;
    /** Setup a hybridSliderAnime for the slider to animate automatically. */
	auto?: string | boolean | undefined;
    /** Autoplay interval. */
	timing?: number | undefined;
    /** Gives the slider a seamless infinite loop. */
	loop?: boolean | undefined;
    /** Navigation ID for paging control of each slide. */
    paginationID?: string | undefined;   
    /** Previous/Next arrow navigation ID. */
	arrowsID?: string | boolean | undefined;   
    /** Allow drag and drop on the slider (touch devices will always work). */
    draggable?: boolean | undefined;   
    /** Drag & Drop Change icon/cursor while dragging. */
	draggableCursor?: string | boolean | undefined;   
}




export function hybridSliderAnime( curElement: any, config: hybridSliderAnimeConfig ) {
    if ( typeof curElement === typeof undefined ) return;
    
    // Set a default configuration
    config = __.setDefaultOptions({
        "speed"             : 250,
        "dir"               : "horizontal",
        "auto"              : false,
        "timing"            : 10000,
        "loop"              : false,
        "paginationID"      : ".poemkit-hybridslider__pagination",
        "arrowsID"          : ".poemkit-hybridslider__arrows",
        "draggable"         : false,
        "draggableCursor"   : "move"
    }, config);

    //
    let dataSpeed              = config.speed,
        dataDir                = config.dir,
        dataAuto               = config.auto,
        dataTiming             = config.timing,
        dataLoop               = config.loop,
        dataControlsPagination = config.paginationID,
        dataControlsArrows     = config.arrowsID,
        dataDraggable          = config.draggable,
        dataDraggableCursor    = config.draggableCursor,
        dataNext               = `${dataControlsArrows} .poemkit-hybrid-content-slider__controls--next`,
        dataPrev               = `${dataControlsArrows} .poemkit-hybrid-content-slider__controls--prev`;
        

    //
    const $sliderWrapper = curElement;

    //Used to delete the global listening event when the component is about to be unmounted
    window.dragEvents = [];
    window.intervalEvents = [];


    let $itemsOuter     = $sliderWrapper.find( '.poemkit-hybrid-content-slider__items' ),
        $items          = $sliderWrapper.find( '.poemkit-hybrid-content-slider__items .poemkit-hybrid-content-slider__item' ),
        itemsTotal      = $items.length,
        amountVisible   = 1;


    //Autoplay times
    let playTimes;
    //A function called "timer" once every second (like a digital watch).
    $sliderWrapper[0].animatedSlides;
    
    
    //Store the latest position (X,Y) in a temporary variable
    let tempItemsPos = [];
    
    
    //each item width and height
    let eachItemNewWidth, eachItemNewHeight = [];


    //total height of items
    let totalItemsHeight = 0;
    

    // Returns the value of a number rounded to the nearest integer.
    const midIndex = 0; 


    //Images loaded
    //-------------------------------------	
    const sources = [];

    //Push all images from page
    const imgs = $sliderWrapper[0].getElementsByTagName('img');
    for (let i = 0; i < imgs.length; i++) {
        sources.push({"url": imgs[i].src, "type": 'img'} as never);
    }
    
    loadTextures(sources).then( function() {
        sliderInit();
    });


    /*
     * Initialize sliderAnime
     *
     * @return {Void}
     */
    function sliderInit() {

        // Get the width and height of each item
        $items.each(function (this: any, index: number) {
            const _height = __( this ).height();
            eachItemNewHeight.push( _height as never );
            __( this ).attr('data-height', _height);
            __( this ).attr('data-index', index);
        });
        
                        
        //Returns the total height of items
        for (let i = 0; i < eachItemNewHeight.length; i++ ) {
            totalItemsHeight += eachItemNewHeight[i];
            if ( (i+1) == (itemsTotal - amountVisible) ) break;
        }
                
        //Set target index of the slider buttons
        setButtonTargetIndex( __( dataNext ), __( dataPrev ), 'init', null );
        
        
        //set actived item & initialize the height of container
        setContainerSize( 0 );    
        $items.addClass( 'js-is-ready' ); 
        
        
        // Activate the current item from carouse
        setItemState( 0 );    


        //Slider Initialize
        //------------------------------------------
        const eachItemOldWidth  = $itemsOuter.width()/amountVisible;

        eachItemNewWidth = ( $sliderWrapper.width() / amountVisible );
        
        if ( dataDir === 'horizontal' ) {
            $itemsOuter.css( 'width', itemsTotal * eachItemOldWidth );
        }

        
        // Re-order all items
        sliderReOrder();



        //default button status
        __( dataPrev ).addClass( 'is-disabled' ).data( 'disabled', 1 );	





        // Re-order all items
        //------------------------------------------
        function sliderReOrder() {

            
            //Initialize the width and height of each item
            if ( dataDir === 'horizontal' ) {
                const boxWidth = eachItemNewWidth;
                TweenMax.set($items, {
                    width: boxWidth,
                    height: function(i, target) {
                        return eachItemNewHeight[i];
                    },
                    x: function(i, target) {
                        return i * boxWidth;
                    }
                });

            } else {
                
                TweenMax.set($items, {
                    height: function(i, target) {
                        return eachItemNewHeight[i];
                    },
                    y: function(i, target) {
                        let yIncrement = 0;
                        for (let k = 0; k < eachItemNewHeight.length; k++ ) {    
                            const tempY = ( typeof eachItemNewHeight[k-1] === typeof undefined ) ? 0 : eachItemNewHeight[k-1];
                            yIncrement += tempY;
                            if ( k == i ) break;
                        }   
                        
                        return yIncrement;
                    }
                });  
                
            }


        }



        //Next/Prev buttons
        //-------------------------------------		
        const _prev = __( dataPrev ),
              _next = __( dataNext );
            

        __( dataControlsArrows ).find( 'a' ).removeClass( 'is-disabled' );
        if ( !dataLoop ) {
            _prev.addClass( 'is-disabled' );
        }

        _prev.off( 'click' ).on( 'click', function( this: any, e: any ) {
            e.preventDefault();
            btnPrevMove();
        });

        _next.off( 'click' ).on( 'click', function( this: any, e: any ) {
            e.preventDefault();
            btnNextMove();
        });

        

        // (right/down)
        function btnPrevMove() {
            //Prevent buttons' events from firing multiple times
            if ( _prev.attr( 'aria-disabled' ) == 'true' ) return false;
            _prev.attr( 'aria-disabled', 'true' );
            setTimeout( function() {
                _prev.attr( 'aria-disabled', 'false' );
            }, dataSpeed );
            

            //
            if ( _prev.hasClass( 'is-disabled' ) ) return false;

            //
            movePositionWithButton( false, _prev, 'prev' );
            
            //Pause the auto play event
            clearInterval( $sliderWrapper[0].animatedSlides );


        }

        // (left/up)
        function btnNextMove() {
            //Prevent buttons' events from firing multiple times
            if ( _next.attr( 'aria-disabled' ) == 'true' ) return false;
            _next.attr( 'aria-disabled', 'true' );
            setTimeout( function() {
                _next.attr( 'aria-disabled', 'false' );
            }, dataSpeed );
            

            //
            if ( _next.hasClass( 'is-disabled' ) ) return false;

            //
            movePositionWithButton( false, _next, 'next' );

            //Pause the auto play event
            clearInterval( $sliderWrapper[0].animatedSlides );	 
            
        } 


        
        // Pagination
        //------------------------------------------
        let _dot       = '';
        _dot += '<ul>';
        for ( let i = 0; i < itemsTotal; i++ ) {
            _dot += '<li><a data-index="'+i+'" href="#"></a></li>';
        }
        _dot += '</ul>';

        if ( __( dataControlsPagination ).html() == '' ) __( dataControlsPagination ).html( _dot );

        // Activate the currently selected Pagination
        setPaginationState( 0 );

        __( dataControlsPagination ).find( 'li a' ).off( 'click' ).on( 'click', function( this: any, e: any ) {
            e.preventDefault(); 
            //Prevent buttons' events from firing multiple times
            const $btn = __( this );
            if ( $btn.attr( 'aria-disabled' ) == 'true' ) return false;
            __( dataControlsPagination ).find( 'li a' ).attr( 'aria-disabled', 'true' );
            setTimeout( function() {
                __( dataControlsPagination ).find( 'li a' ).attr( 'aria-disabled', 'false' );
            }, dataSpeed );
            

            if ( !$btn.parent().hasClass( 'is-active' ) ) {

                movePositionWithButton( true, $btn, 'next' );

                //Pause the auto play event
                clearInterval( $sliderWrapper[0].animatedSlides );	

            }

        });

   
        
        //Drag and Drop
        //-------------------------------------	
        let firstItemOffset;
        let maxMoveOffset;

        // need to initialize a value
        let targetIndex = 0;
        let dragDirChanged = false;
        let currentIsFirstOrLast = false;
        let dragDirection = '';
        let elAnim = true;

        //Temporarily store arrays as strings
        //!!!important ///////////////////////////////////////
        //!!! Prevent dragging events from nesting multiple 
        //!!! times to reduce subscripts.
        //!!!important ///////////////////////////////////////
        const allHeightStr = eachItemNewHeight.toString();


        //
        const $dragTrigger = $sliderWrapper.find( '.poemkit-hybrid-content-slider__items' );
        let mouseX, mouseY;

        //Avoid images causing mouseup to fail
        $dragTrigger.find( 'img' ).css({
            'pointer-events': 'none',
            'user-select': 'none'
        });


        //Make the cursor a move icon when a user hovers over an item
        if ( dataDraggable && dataDraggableCursor != '' && dataDraggableCursor != false ) $dragTrigger.css( 'cursor', dataDraggableCursor );

        //draggable for touch devices
        if ( __.isTouchCapable() ) dataDraggable = true;

        if ( dataDraggable ) {

            $dragTrigger[0].removeEventListener( 'mousedown', dragStart );
            document.removeEventListener( 'mouseup', dragEnd );

            $dragTrigger[0].removeEventListener( 'touchstart', dragStart );
            document.removeEventListener( 'touchend', dragEnd );


            //
            $dragTrigger[0].addEventListener( 'mousedown', dragStart );
            $dragTrigger[0].addEventListener( 'touchstart', dragStart );


            //block the vertical scrolling on a touch-device while on the element
            $sliderWrapper.css('touch-action', 'pan-x');

        }

       
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


            //drag direction
            dragDirection = '';
            

            //current item index
            dragDirChanged = false;
            targetIndex = __( e.target ).data( 'index' );
            if ( targetIndex === null ) targetIndex = __( e.target ).closest( '.poemkit-hybrid-content-slider__item' ).data( 'index' );
            if ( targetIndex === null ) targetIndex = __( e.target ).find( '.poemkit-hybrid-content-slider__item' ).data( 'index' );

            //determine whether it is the first or the last    
            currentIsFirstOrLast = false;
            firstItemOffset = ( dataDir === 'horizontal' ) ? $itemsOuter.find( '[data-index="0"]' )[0]._gsTransform.x : $itemsOuter.find( '[data-index="0"]' )[0]._gsTransform.y;
            maxMoveOffset = ( dataDir === 'horizontal' ) ? -eachItemNewWidth*(itemsTotal-amountVisible) : -totalItemsHeight;


            //
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


            //drag direction
            if ( dataDir === 'horizontal' ) {
                if ( offsetX > 0) dragDirection = 'left';
                if ( offsetX < 0) dragDirection = 'right';
            } else {
                if ( offsetY > 0) dragDirection = 'up';
                if ( offsetY < 0) dragDirection = 'down';
            }


            if ( dragDirection == 'right' || dragDirection == 'down' ) {
                if ( !dragDirChanged ) {

                    //current item index
                    targetIndex = targetIndex;

                    //first item
                    if ( firstItemOffset >= 0 ) currentIsFirstOrLast = true;

                    //
                    dragDirChanged = true;
                }
                
            }

            if ( dragDirection == 'left' || dragDirection == 'up' ) { 
                if ( !dragDirChanged ) {

                    //current item index
                    targetIndex = targetIndex + 1;

                    //last item
                    if ( firstItemOffset <= maxMoveOffset ) currentIsFirstOrLast = true;

                    //
                    dragDirChanged = true;
                }
                
            }   

            //console.log( 'dragDirection: ', dragDirection, 'targetIndex: ', targetIndex, 'currentIsFirstOrLast: ', currentIsFirstOrLast, 'offsetX: ', offsetX , 'offsetY: ', offsetY );

            //Rebound effect of drag offset 
            //
            //!important -> Please do not use multiple case conditions, 
            //otherwise it may cause vertical data problems

            if ( dataDir === 'horizontal' ) {
                switch ( dragDirection ) {
                    case 'left':

                        if ( offsetX < eachItemNewWidth/4 && offsetX > 0 ) {
                            elAnim = false;  
                            
                            const simulationButtonNext = __( dataNext );
                            itemUpdates( $sliderWrapper, simulationButtonNext, -offsetX, 0.1, true, targetIndex, allHeightStr );
                        } else {
                            elAnim = ( currentIsFirstOrLast ) ? false : true;
                        }


                        break;
                    case 'right':

                        if ( offsetX > -eachItemNewWidth/4 && offsetX < 0 ) {
                            elAnim = false;  
                            
                            const simulationButtonPrev = __( dataPrev );
                            itemUpdates( $sliderWrapper, simulationButtonPrev, -offsetX, 0.1, true, targetIndex, allHeightStr );
                        } else {
                            elAnim = ( currentIsFirstOrLast ) ? false : true;
                        }

                        break;  
        

                }  
            } else {
                
                const draggingItemHeight = ( typeof allHeightStr.split( ',' )[targetIndex-1] === typeof undefined ) ? allHeightStr.split( ',' )[targetIndex] : allHeightStr.split( ',' )[targetIndex-1];
                
                switch ( dragDirection ) {
                    case 'up':

                        if ( offsetY < parseFloat(draggingItemHeight)/4 && offsetY > 0 ) {
                            elAnim = false;  
                            
                            const simulationButtonNext = __( dataNext );
                            itemUpdates( $sliderWrapper, simulationButtonNext, -offsetY, 0.1, true, targetIndex, allHeightStr );
                        } else {
                            elAnim = ( currentIsFirstOrLast ) ? false : true;
                        }


                        break;

                    case 'down':

                        if ( offsetY > -parseFloat(draggingItemHeight)/4 && offsetY < 0 ) {
                            elAnim = false;  
                            
                            const simulationButtonPrev = __( dataPrev );
                            itemUpdates( $sliderWrapper, simulationButtonPrev, -offsetY, 0.1, true, targetIndex, allHeightStr );
                        } else {
                            elAnim = ( currentIsFirstOrLast ) ? false : true;
                        }


                        break;            

                }       
                
            }
            

        }

        function dragEnd(e) {
            document.removeEventListener( 'mousemove', dragProcess);
            document.removeEventListener( 'touchmove', dragProcess);

            if ( elAnim ) {

                //!important -> Please do not use multiple case conditions, 
                //otherwise it may cause vertical data problems
                
                if ( dataDir === 'horizontal' ) {
                    switch ( dragDirection ) {
                        case 'left':
                            btnNextMove();
                            break;
                        case 'right':
                            btnPrevMove();
                            break;      
                    }  
                    
                } else {
                    
                    switch ( dragDirection ) {
                        case 'up':
                            btnNextMove();
                            break;
                        case 'down':
                            btnPrevMove();
                            break;                 

                    }     
                }
                
                            
            } else {    
                
                //Rebound effect of drag offset 
                itemUpdates( $sliderWrapper, false, tempItemsPos, null, false, targetIndex, allHeightStr);

                //Pause the auto play event
                clearInterval( $sliderWrapper[0].animatedSlides );                
            }



            //restore drag status
            dragDirChanged = false;

        }

    }


            
    //Autoplay Slider
    //-------------------------------------		
    if (dataAuto && !isNaN(dataTiming as number) && isFinite(dataTiming as number)) {

        sliderAutoPlay( playTimes, dataTiming, dataLoop );

        const autoplayEnter = function() {
            clearInterval( $sliderWrapper[0].animatedSlides );
        };

        const autoplayLeave = function() {
            sliderAutoPlay( playTimes, dataTiming, dataLoop );
        };


        // Do not use the `off()` method, otherwise it will cause the second mouseenter to be invalid
        $sliderWrapper.on( 'mouseenter', autoplayEnter );
        $sliderWrapper.on( 'mouseleave', autoplayLeave );  

        // To determine if it is a touch screen.
        if ( __.isTouchCapable() ) {
            $sliderWrapper.on( 'pointerenter', autoplayEnter );
            $sliderWrapper.on( 'pointerleave', autoplayLeave );  
        }



    }
    
    
    /*
    * Trigger slider autoplay
    *
    * @param  {Function} playTimes      - Number of times.
    * @param  {Number} timing           - Autoplay interval.
    * @param  {Boolean} loop            - Gives the slider a seamless infinite loop.
    * @return {Void}             
    */
    function sliderAutoPlay( playTimes, timing, loop ) {	

        $sliderWrapper[0].animatedSlides = setInterval( function() {

            const autoMove = function( indexGo ) {

                // Retrieve the position (X,Y) of an element 
                const moveX = eachItemNewWidth * indexGo;

                let moveYIncrement = 0;
                for (let k = 0; k < eachItemNewHeight.length; k++ ) {    
                    const tempY = ( typeof eachItemNewHeight[k-1] === typeof undefined ) ? 0 : eachItemNewHeight[k-1];
                    moveYIncrement += tempY;
                    if ( k == indexGo ) break;
                }
                const moveY = moveYIncrement;

                //
                const delta = ( dataDir === 'horizontal' ) ? -moveX : -moveY;

                //
                itemUpdates( $sliderWrapper, 'auto', delta, null, false, indexGo, eachItemNewHeight );    
            }; 
            
            playTimes = parseFloat( $items.filter( '.is-active' ).index() );
            playTimes++;
            
            
            if ( !loop ) {
                if ( playTimes < itemsTotal && playTimes >= 0 ) {
                    autoMove( playTimes );
                }
            } else {
                if ( playTimes == itemsTotal ) playTimes = 0;
                if ( playTimes < 0 ) playTimes = itemsTotal-1;		
                
                autoMove( playTimes );
            }

        }, timing );
        
        window.intervalEvents.push($sliderWrapper[0].animatedSlides);
    }


    
    
    /*
    * Transition Between Items
    *
    * @param  {Element} wrapper                - Wrapper of slider.
    * @param  {?Element|String|Boolean} curBtn - The button that currently triggers the move.
    * @param  {Number|Array} delta             - The value returned will need to be adjusted according to the offset rate.
    * @param  {?Number} speed                  - Sliding speed. Please set to 0 when rebounding.
    * @param  {Boolean} dragging               - Determine if the object is being dragged.
    * @param  {!Number} indexGo                - The target item index.
    * @param  {String|Array} itemsHeight       - Return all items height (the string type is used when a drag event is triggered).
    * @return {Void}
    */
    function itemUpdates( wrapper, curBtn, delta, speed, dragging, indexGo, itemsHeight ) {
        
        if ( speed == null ) speed = (dataSpeed as number)/1000;
        
        let $curWrapper = wrapper.children( '.poemkit-hybrid-content-slider__items' ),  //Default: $itemsOuter
            $curItems   = $curWrapper.find( '.poemkit-hybrid-content-slider__item' ); //Default: $items
    
        
        //Get height constant
        let itemsHeightArr;
        if ( Array.isArray( itemsHeight ) ) {
            itemsHeightArr = [].slice.call(itemsHeight);
        } else {
            itemsHeightArr = itemsHeight.split( ',' );
        }
        

        //Check next or previous event
        let btnType = 'init';
        if ( curBtn !== false && curBtn !== 'auto' ) {
            if ( curBtn.attr( 'class' ) !== null ) {
                btnType = ( curBtn.attr( 'class' ).indexOf( '--next' ) >=0 ) ? 'next' : 'prev';
            } else {
                btnType = 'next';
            }
            
        }


        //Check next or previous event ( Autoplay )
        if ( curBtn === 'auto' ) btnType = 'next';

        //Clone the first element to the last position
        if ( dataDir === 'horizontal' ) {

            const boxWidth = eachItemNewWidth;
            
            TweenMax.to( $curItems, speed, {
                x: function(i, target) {

                    let xIncrement = 0;

                    for (let k = 0; k < itemsTotal; k++ ) {    
                        const tempX = ( k == 0 ) ? 0 : boxWidth;
                        xIncrement += tempX;
                        if ( k == i ) break;
                    }   

                    
                    
                    if ( Array.isArray( delta ) ) {
                        
                        //Rebound effect of drag offset 
                        return ( delta.length == 0 ) ? xIncrement : delta[i];     
                        
                    } else {
                        
                        if ( !dragging ) {
                            //console.log( 'btnType: ' + btnType + ' indexGo: ' + indexGo );


                            let curWidthIncrement = 0;
                            
                            for (let m= 0; m < itemsTotal; m++ ) {    
                                const tempW = ( m == 0 ) ? 0 : boxWidth;
                                curWidthIncrement += tempW;
                                if ( m == ( btnType == 'next' ? indexGo : indexGo-1 ) ) break;
                            } 

                            return xIncrement + -curWidthIncrement;  
                        } else {
                            //console.log( 'dragging...' );
                            const x = Math.round(target._gsTransform.x / boxWidth ) * boxWidth;
                            return x + delta; 
                            
                        }
                    }
                    
                },
                onComplete : function() {
                    
                    if ( !dragging && !Array.isArray( delta ) ) {
                        
                        //Get index of current element
                        let currentIndex = 0;
            
                        
                        //The state of the control button
                        setButtonState( Math.round( $curItems.first()[0]._gsTransform.x ), Math.round( ($curItems.length - amountVisible) * boxWidth ) );  

                        //Initialize the height of container
                        currentIndex = Math.round( $curItems.first()[0]._gsTransform.x/boxWidth );
                        setContainerSize( currentIndex );  	 

                        //Set target index of the slider buttons
                        setButtonTargetIndex( __( dataNext ), __( dataPrev ), btnType, ( btnType == 'next' ? Math.abs( currentIndex ) : Math.abs( currentIndex ) + 1 ) );   
                        
                        // Activate the currently selected Pagination
                        setPaginationState( Math.abs( currentIndex ) );
                        
                        // Activate the current item from carouse
                        setItemState( Math.abs( currentIndex ) );     
                        
                        //Store the latest position (X,Y) in a temporary variable
                        tempItemsPos = createStoreLatestPosition();  
                        
                    }
                    

                }
            });    
        

        } else {
            
            TweenMax.to( $curItems, speed, {
                y: function(i, target) {
                    
                    let yIncrement = 0;

                    for (let k = 0; k < itemsHeightArr.length; k++ ) {    
                        const tempY = ( typeof itemsHeightArr[k-1] === typeof undefined ) ? 0 : itemsHeightArr[k-1];
                        yIncrement += tempY;
                        if ( k == i ) break;
                    }  
                    
                    if ( Array.isArray( delta ) ) {
                        
                        //Rebound effect of drag offset 
                        return ( delta.length == 0 ) ? yIncrement : delta[i];   
                        
                    } else {
                        
                        if ( !dragging ) {
                            //console.log( 'btnType: ' + btnType + ' indexGo: ' + indexGo );

                            let curHeightIncrement = 0;

                            for (let m = 0; m < itemsHeightArr.length; m++ ) {    
                                const tempH = ( typeof itemsHeightArr[m-1] === typeof undefined ) ? 0 : itemsHeightArr[m-1];
                                curHeightIncrement += tempH;
                                if ( m == ( btnType == 'next' ? indexGo : indexGo-1 ) ) break;
                            }   
                            

                            return yIncrement + -curHeightIncrement;  
                        } else {
                            //console.log( 'dragging...' );
                            const draggingItemHeight = ( typeof itemsHeightArr[indexGo-1] === typeof undefined ) ? itemsHeightArr[indexGo] : itemsHeightArr[indexGo-1];
                            
                            const y = Math.round(target._gsTransform.y / draggingItemHeight ) * draggingItemHeight;
                            return y + delta; 
                        }
                    }

                    
                    
                },
                onComplete : function() {
                    
                    
                    if ( !dragging && !Array.isArray( delta ) ) {
                        
                        //The state of the control button
                        setButtonState( $curItems.first()[0]._gsTransform.y, totalItemsHeight );   

                        //Set target index of the slider buttons
                        setButtonTargetIndex( __( dataNext ), __( dataPrev ), btnType, indexGo ); 

                        //set actived item & initialize the height of container
                        setContainerSize( ( btnType == 'next' ? indexGo : indexGo-1 ) );
                        
                        // Activate the currently selected Pagination
                        setPaginationState( ( btnType == 'next' ? indexGo : indexGo-1 ) ); 
            
                        // Activate the current item from carouse
                        setItemState( ( btnType == 'next' ? indexGo : indexGo-1 ) );               
            
                        //Store the latest position (X,Y) in a temporary variable
                        tempItemsPos = createStoreLatestPosition();   
                        
                        
                    }
                        

                }
            });         
            
        }




    }

    

    /*
    * Use the button to trigger the transition between the two sliders
    *
    * @param  {Boolean} paginationEnabled   - Determine whether it is triggered by pagination
    * @param  {Element} $btn               - The button that currently triggers the move.
    * @param  {String} type                - Move next or previous.
    * @return {Void}
    */
    function movePositionWithButton( paginationEnabled, $btn, type ) {
        //Protection button is not triggered multiple times.
        const btnDisabled = $btn.data( 'disabled' );

        //Get target index
        let tIndex = $btn.data( 'index' );
        
        // Retrieve the position (X,Y) of an element 
        let moveX = eachItemNewWidth,
            moveY = ( typeof eachItemNewHeight[tIndex-1] === typeof undefined ) ? 0 : eachItemNewHeight[tIndex-1];   
        
        if ( paginationEnabled ) {

            //--
            moveX = eachItemNewWidth * tIndex;
            
            //--
            let moveYIncrement = 0;
            for (let k = 0; k < eachItemNewHeight.length; k++ ) {    
                const tempY = ( typeof eachItemNewHeight[k-1] === typeof undefined ) ? 0 : eachItemNewHeight[k-1];
                moveYIncrement += tempY;
                if ( k == tIndex ) break;
            }
            moveY = moveYIncrement;
            
        }
        

        
        //
        let delta;
        if ( type == 'next' ) {
            delta = ( dataDir === 'horizontal' ) ? -moveX : -moveY;
        } else {
            delta = ( dataDir === 'horizontal' ) ? moveX : moveY;
        }
        
        
        if ( btnDisabled === null ) {	
            itemUpdates( $sliderWrapper, $btn, delta, null, false, tIndex, eachItemNewHeight );
            
        }    
    }  
    


    /*
    * Activate the currently selected Pagination
    *
    * @param  {Number} index          - Get index of current element.
    * @return {Void}
    */
    function setPaginationState( index ) {
        __( dataControlsPagination ).find( 'li' ).removeClass( 'is-active' );
        __( dataControlsPagination ).find( 'li a[data-index="'+index+'"]' ).parent().addClass( 'is-active' );   
    }   
            
    /*
    * Activate the current item from carouse
    *
    * @param  {Number} index          - Get index of current element.
    * @return {Void}
    */
    function setItemState( index ) {
        $items.removeClass( 'is-active' );
        $items.eq( index ).addClass( 'is-active' );   
    }      
    
    /*
    * Store the latest position (X,Y) in a temporary variable
    *
    * @return {Array}              - Return to a new position.
    */
    function createStoreLatestPosition() {
        const pos = [];
        // Retrieve the temporary variable of each item.
        $items.each(function (this: any, index: number) {
            let _v: number;
            if ( dataDir === 'horizontal' ) {
                _v = __( this )[0]._gsTransform.x;
            } else {
                _v = __( this )[0]._gsTransform.y;
            }
            pos.push( _v as never );
        }); 
        return pos;
    }  


    /*
    * Initialize the height of container
    *
    * @param  {Number} index          - Get index of current element.
    * @return {Void}
    */
    function setContainerSize( index ) {
        
        const _h = eachItemNewHeight[Math.abs( index )];
        if ( typeof _h !== typeof undefined ) {
            TweenMax.to( $itemsOuter, 0.2, { 
                height: eachItemNewHeight[Math.abs( index )]
            } );	    
        }

    }   
        
    
    

    /*
    * Set target index of the slider buttons
    *
    * @param  {Element} nextBtn      - The next move button.
    * @param  {Element} prevBtn      - The previous move button.
    * @param  {String} type          - The type of button is triggered. Values: next, prev, init
    * @param  {?Number} indexGo      - The target item index.
    * @return {Void}
    */
    function setButtonTargetIndex( nextBtn, prevBtn, type, indexGo ) {
        
        switch ( type ) {
            case 'init':
                nextBtn.data('index', 1);   
                prevBtn.data('index', 0);   
                
                break;

            case 'next':
                let nextBtnOldTargetIndex1 = nextBtn.data( 'index' );
                let prevBtnOldTargetIndex1 = prevBtn.data( 'index' );

                if ( indexGo != null ) {
                    nextBtnOldTargetIndex1 = indexGo;
                    prevBtnOldTargetIndex1 = indexGo-1;
                }

                nextBtn.data('index', nextBtnOldTargetIndex1+1);   
                prevBtn.data('index', prevBtnOldTargetIndex1+1);  
                
                break;  
                
            case 'prev':
                let nextBtnOldTargetIndex2 = nextBtn.data( 'index' ) - 1;
                let prevBtnOldTargetIndex2 = prevBtn.data( 'index' ) - 1;

                if ( indexGo != null ) {
                    nextBtnOldTargetIndex2 = indexGo;
                    prevBtnOldTargetIndex2 = indexGo-1;
                } 


                nextBtn.data('index', nextBtnOldTargetIndex2);   
                prevBtn.data('index', prevBtnOldTargetIndex2);   
                
                break;  
        }      
    }              
    
    /*
    * The state of the control button
    *
    * @param  {Number} firstOffset          - Get the computed Translate X or Y values of a given first DOM element.
    * @param  {Number} lastOffset           - Get the computed Translate X or Y values of a given last DOM element.
    * @return {Void}
    */
    function setButtonState( firstOffset, lastOffset ) {
        
        if ( Math.abs( firstOffset ) == lastOffset ) {
            __( dataNext ).addClass( 'is-disabled' ).data( 'disabled', 1 );
            __( dataPrev ).removeClass( 'is-disabled' ).removeData( 'disabled' );
        } else if ( Math.round( firstOffset ) == 0 ) {
            __( dataNext ).removeClass( 'is-disabled' ).removeData( 'disabled' );
            __( dataPrev ).addClass( 'is-disabled' ).data( 'disabled', 1 );
        } else {
            __( dataNext ).removeClass( 'is-disabled' ).removeData( 'disabled' );
            __( dataPrev ).removeClass( 'is-disabled' ).removeData( 'disabled' );
        }
    }   



    /*
    * Load Textures
    *
    * @param  {Array} arr                       - All images and videos from array. 
    *                                             Such as: `[{"url":"1.jpg","type":"img"},{"url":"1.mp4","type":"video"}]`
    * @param  {?Function} perLoadedCallback     - Callback function after per item is completed
    * @return {Promise}
    */   
    function loadTextures(arr, perLoadedCallback?) {
        let promises = [];
        if (typeof(perLoadedCallback) === 'undefined') perLoadedCallback = function (url) { console.log(url) };

        for (let i = 0; i < arr.length; i++) {

            if (arr[i].type == 'img') {
                ///////////
                // IMAGE //
                ///////////  
                const _promise = new Promise(function (resolve: any, reject?: any) {

                    const img = document.createElement('img');
                    img.crossOrigin = "anonymous";
                    img.src = arr[i].url;

                    img.onload = function (this: any, e: any) {
                        // compatible with safari and firefox
                        const _path = typeof e.path === typeof undefined ? e.target.currentSrc : e.path[0].currentSrc;

                        // send back result
                        return resolve({
                            height: this.height,
                            width: this.width,
                            source: _path
                        });
                    };
                }) as never;
                
                promises.push(_promise);

            } else {
                ///////////
                // VIDEO //
                ///////////   
                const _promise = new Promise(function (resolve: any, reject?: any) {

                    const video = document.createElement('video');
                    video.addEventListener("loadedmetadata", function (this: any, e: any) {
                        // retrieve dimensions
                        let height = this.videoHeight;
                        let width = this.videoWidth;

                        // compatible with safari and firefox
                        const _path = typeof e.path === typeof undefined ? e.target.currentSrc : e.path[0].currentSrc;

                        // send back result
                        return resolve({
                            height: height,
                            width: width,
                            source: _path
                        });
                    }, false);

                    // start download meta-datas
                    video.src = arr[i].url;
                }) as never;

                promises.push(_promise);



            }

        }

        return Promise.all(promises);
    }





}

export default hybridSliderAnime;