/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	ndarrayLike = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// FUNCTION //

/**
* FUNCTION: create()
*	Creates an ndarray-like object.
*
* @returns {Object} ndarray-like object
*/
function create() {
	var ndarray = {};
	ndarray.data = [1,2,3,4];
	ndarray.shape = [2,2];
	ndarray.strides = [2,1];
	ndarray.offset = 0;
	ndarray.dtype = 'generic';
	ndarray.length = 4;
	return ndarray;
} // end FUNCTION create()


// TESTS //

describe( 'validate.io-ndarray-like', function tests() {

	it( 'should export a function', function test() {
		expect( ndarrayLike ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( ndarrayLike( create() ) );
	});

	it( 'should negatively validate', function test() {
		var values, arr;

		values = [
			5,
			'5',
			null,
			undefined,
			NaN,
			true,
			[],
			{},
			function(){}
		];

		arr = create();
		delete arr.data;
		values.push( arr );

		arr = create();
		arr.shape = true;
		values.push( arr );

		arr = create();
		arr.strides = 0;
		values.push( arr );

		arr = create();
		arr.offset = undefined;
		values.push( arr );

		arr = create();
		arr.dtype = false;
		values.push( arr );

		arr = create();
		arr.length = new Number( NaN );
		values.push( arr );

		arr = create();
		arr.length = null;
		values.push( arr );

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( ndarrayLike( values[i] ), values[ i ] );
		}
	});

});
