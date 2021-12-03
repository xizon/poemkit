import core from './constructor';

/**
 * Instantiate a new constructor
 * @private
 */
const instance = function (s, root?) {
    return new core(s, root);
};

export default instance;
