'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isInteger = require( 'validate.io-integer-primitive' ),
	isString = require( 'validate.io-string-primitive' );


// IS NDARRAY-LIKE //

/**
* FUNCTION: ndarrayLike( value )
*	Validates if a value is ndarray-like.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is ndarray-like
*/
function ndarrayLike( v ) {
	return v !== void 0 &&
		v !== null &&
		v.data &&
		isArray( v.shape ) &&
		isArray( v.strides ) &&
		isInteger( v.offset ) &&
		isString( v.dtype ) &&
		isInteger( v.length ) &&
		v.length >= 0;
} // end FUNCTION ndarrayLike()


// EXPORTS //

module.exports = ndarrayLike;
