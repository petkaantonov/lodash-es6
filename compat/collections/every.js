/**
 * Lo-Dash 2.2.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseEach from '../internals/baseEach';
import createCallback from '../functions/createCallback';
import isArray from '../objects/isArray';

/**
 * Checks if the given callback returns truey value for **all** elements of
 * a collection. The callback is bound to `thisArg` and invoked with three
 * arguments; (value, index|key, collection).
 *
 * If a property name is provided for `callback` the created "_.pluck" style
 * callback will return the property value of the given element.
 *
 * If an object is provided for `callback` the created "_.where" style callback
 * will return `true` for elements that have the properties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @alias all
 * @category Collections
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [callback=identity] The function called
 *  per iteration. If a property name or object is provided it will be used
 *  to create a "_.pluck" or "_.where" style callback, respectively.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {boolean} Returns `true` if all elements passed the callback check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes']);
 * // => false
 *
 * var characters = [
 *   { 'name': 'barney', 'age': 36 },
 *   { 'name': 'fred',   'age': 40 }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.every(characters, 'age');
 * // => true
 *
 * // using "_.where" callback shorthand
 * _.every(characters, { 'age': 36 });
 * // => false
 */
function every(collection, callback, thisArg) {
  var result = true;
  callback = createCallback(callback, thisArg, 3);

  if (isArray(collection)) {
    var index = -1,
        length = collection.length;

    while (++index < length) {
      if (!(result = !!callback(collection[index], index, collection))) {
        break;
      }
    }
  } else {
    baseEach(collection, function(value, index, collection) {
      return (result = !!callback(value, index, collection));
    });
  }
  return result;
}

export default = every;
