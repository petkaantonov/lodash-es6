/**
 * Lo-Dash 2.2.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import createBound from '../internals/createBound';

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeSlice = arrayRef.slice;

/**
 * Creates a function that, when called, invokes `func` with any additional
 * `partial` arguments prepended to those provided to the new function. This
 * method is similar to `_.bind` except it does **not** alter the `this` binding.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [arg] Arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * var greet = function(greeting, name) { return greeting + ' ' + name; };
 * var hi = _.partial(greet, 'hi');
 * hi('fred');
 * // => 'hi fred'
 */
function partial(func) {
  return createBound(func, 16, nativeSlice.call(arguments, 1));
}

export default = partial;
