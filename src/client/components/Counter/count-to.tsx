import { __ } from '@poemkit/components/_utils/_all';


type UpdateFnType = (arg1: number) => number | void;
type CompleteFnType = (arg1: number) => number | void;

interface countToConfig {
    /** The number the element should start at */
    from?: number | undefined;
    /** The number the element should end at */
    to?: number | undefined;
    /** Formats a number using fixed-point notation. */
    fixed?: number | undefined;
    /** How long it should take to count between the target numbers. Amount of time measured in milliseconds. */
    speed?: number | undefined;
    /** How often the element should be updated */
    refreshInterval?: number | undefined;
    /** The number of decimal places to show */
    dilimiter?: boolean | undefined;
    /** Two digits are used by default, if it is a number `2` it should be displayed `02` */
    doubleDigits?: boolean | undefined;
    /** Callback method for every time the element is updated */
    onUpdate?: UpdateFnType | null | undefined;
    /** Callback method for when the element finishes updating */
    onComplete?: CompleteFnType | null | undefined;
}


export function countTo(curElement: any, config: countToConfig) {
    if ( typeof curElement === typeof undefined ) return;
    
    // Set a default configuration
    config = __.setDefaultOptions({
        "from"             : 0,
        "to"               : 0,
        "fixed"            : 0,
        "speed"            : 500,
        "refreshInterval"  : 1,
        "dilimiter"        : false,
        "doubleDigits"     : false,
        "onUpdate"         : null,
        "onComplete"       : null
    }, config);


    //
    const _speed             = config.speed!,
          _refreshInterval   = config.refreshInterval!,
          _numberEnd         = config.to!,
          _numberStart       = config.from!,
          _dilimiter         = config.dilimiter,
          _doubleDigits      = config.doubleDigits,
          _fixed             = config.fixed,
          _update            = config.onUpdate,
          _complete          = config.onComplete;
          
    const $el = __( curElement );


    // how many times to update the value, and how much to increment the value on each update
    let loops = Math.ceil(_speed / _refreshInterval),
        increment = (_numberEnd - _numberStart) / loops;


    // references & variables that will change with each update
    let loopCount = 0,
        value = _numberStart,
        dataInterval: any = null;


    // if an existing interval can be found, clear it first
    if (dataInterval !== null) {
        clearInterval(dataInterval);
    }
    dataInterval = setInterval(updateTimer, _refreshInterval);

    // initialize the element with the starting value
    render(value);

    function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof(_update) === 'function') {
            _update.call($el[0], value);
        }

        if (loopCount >= loops) {
            // remove the interval
            clearInterval(dataInterval);
            value = _numberEnd;

            if (typeof(_complete) === 'function') {
                _complete.call($el[0], value);
            }
        }
    }

    function render(value) {
        let formattedValue: any = Number(value).toFixed(_fixed);


        if (_dilimiter && formattedValue > 0) {
            formattedValue = formattedValue.toString().replace(/\B(?=(?:\d{3})+\b)/g, ',');
        }

        if (_doubleDigits) {
            if (formattedValue < 10) {
                formattedValue = '0' + formattedValue;
            }
        }

        $el.html(formattedValue);

    }


}

export default countTo;