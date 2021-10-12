import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply Third-party plugins --*/
import TweenMax from '@uixkit.react/components/_plugins/_lib-gsap';


interface thumbSwitchConfig {
    /** The target index of large photo. */
    index?: number | undefined;
    /** Set a default width for container (Match the width in the css file). */
    width?: number | undefined;
    /** The name of the relevant style of the container */
    classLoader?: string | undefined; 
}


// Click thumbnail to show large photo
export function thumbSwitch(curElement: any, config: thumbSwitchConfig) {
    if ( typeof curElement === typeof undefined ) return; //Target large image <li>
    
    // Set a default configuration
    config = __.setDefaultOptions({
        "index"        : 0,
        "width"        : 1000,
        "classLoader"  : ".demo-loading"
    }, config);

    //
    const loaderEl    = config.classLoader,
          targetIndex = config.index,
          customWidth = config.width; //Match the width in the css file;


    const $largePhoto = curElement.closest('.uix-lightbox__html').find('.uix-lightbox__photo-container.uix-lightbox__photo-sets-container'),
          $thumb = curElement.closest('.uix-lightbox__html').find('.uix-lightbox__thumb-container li');

    // show the content container
    const showLightboxContent = function () {
        TweenMax.set(curElement.closest('.uix-lightbox__html'), {
            css: {
                'display': 'block'
            },
            onComplete: function () {
                TweenMax.to(this.target, 0.5, {
                    alpha: 1
                });
            }
        });
    };

    $thumb.removeClass('is-active');
    curElement.addClass('is-active');


    //all items
    TweenMax.set($largePhoto.find('li'), {
        css: {
            'display': 'none',
            'opacity': 0
        },
        onComplete: function () {
            TweenMax.set( this.target, {className: "-=is-active"});
        }
    });


    //current item
    TweenMax.set($largePhoto.find('li').eq(targetIndex), {
        css: {
            'display': 'block',
            'opacity': 0
        },
        onComplete: function () {

            const _curObj = this.target;

            TweenMax.set( _curObj, {className: "-=is-active"});

            //
            //Reset the container height
            const imgClick = new Image();
            imgClick.src = $largePhoto.find('li').eq(targetIndex).find('img').attr('src');
            imgClick.onload = function ( this: any ) {

                //remove loading
                __(loaderEl).addClass('is-loaded');

                // show the content container
                showLightboxContent();



                let sw = window.innerWidth - 30,
                    ow = this.width,
                    oh = this.height,
                    ratioH = oh / ow,
                    w = (ow > !customWidth) ? customWidth : ow,
                    h;


                if (w > sw) w = sw;

                h = w * ratioH;


                //Prevent height overflow
                if (h > window.innerHeight) h = window.innerHeight * 0.95;


                $largePhoto.css({
                    'height': h + 'px'
                })
                    .find('img').css({
                        'height': h + 'px'
                    });


                //If the image is larger than the current window, it will display at the top.
                //Don't write variables outside
                const $lbTarImg = $largePhoto.find('li').eq(targetIndex).find('.uix-lightbox__original__target');
                if (oh > window.innerHeight) {
                    $lbTarImg.addClass('uix-lightbox__original__target--imgfull');
                } else {
                    $lbTarImg.removeClass('uix-lightbox__original__target--imgfull');
                }

                TweenMax.to( _curObj, 0.5, {
                    alpha: 1
                });

            };//imgClick.onload       



        }
    });


}

export default { thumbSwitch };