import { __ } from '@uixkit.react/components/_utils/_all';


type UpdateFnType = (arg1: number) => number | void;
type CompleteFnType = (arg1: number) => number | void;

interface countToConfig {
    /** The number the element should start at */
    from?: number | undefined;
    /** The number the element should end at */
    to?: number | undefined;
    /** Formats a number using fixed-point notation. */
    fixed?: number | undefined;
    /** How long it should take to count between the target numbers */
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


export function countTo(curElement: any) {

    const config: countToConfig = {
        "from": curElement.data('counter-start') === null ? 0 : curElement.data('counter-start'),
        "to": curElement.data('counter-number') === null ? 0 : curElement.data('counter-number'),
        "fixed": curElement.data('counter-fixed') === null ? 0 : curElement.data('counter-fixed'),
        "speed": curElement.data('counter-duration') === null ? 500 : curElement.data('counter-duration'),
        "refreshInterval": curElement.data('counter-refresh-interval') === null ? 1 : curElement.data('counter-refresh-interval'),
        "dilimiter": curElement.data('counter-dilimiter') === null ? false : curElement.data('counter-dilimiter'),
        "doubleDigits": curElement.data('counter-double-digits') === null ? false : curElement.data('counter-double-digits'),
        "onUpdate": null,
        "onComplete": null
    };


    // how many times to update the value, and how much to increment the value on each update
    const _speed: any = config.speed;
    const _refreshInterval: any = config.refreshInterval;
    const _numberEnd: any = config.to;
    const _numberStart: any = config.from;

    let loops = Math.ceil(_speed / _refreshInterval),
        increment = (_numberEnd - _numberStart) / loops;



    // references & variables that will change with each update
    let loopCount: number = 0,
        value: any = _numberStart,
        data: any = curElement.data('count-to') || {};

    curElement.data('count-to', data);

    // if an existing interval can be found, clear it first
    if (data.interval) {
        clearInterval(data.interval);
    }
    data.interval = setInterval(updateTimer, _refreshInterval);

    // initialize the element with the starting value
    render(value);

    function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof (config.onUpdate) == 'function') {
            config.onUpdate.call(curElement[0], value);
        }

        if (loopCount >= loops) {
            // remove the interval
            curElement.removeData('count-to');
            clearInterval(data.interval);
            value = _numberEnd;

            if (typeof (config.onComplete) == 'function') {
                config.onComplete.call(curElement[0], value);
            }
        }
    }

    function render(value) {
        let formattedValue: any = Number(value).toFixed(config.fixed);


        if (config.dilimiter && formattedValue > 0) {
            formattedValue = formattedValue.toString().replace(/\B(?=(?:\d{3})+\b)/g, ',');
        }

        if (config.doubleDigits) {
            if (formattedValue < 10) {
                formattedValue = '0' + formattedValue;
            }
        }

        curElement.html(formattedValue);

    }


}

export default { countTo };