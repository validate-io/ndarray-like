'use strict';

// MODULES //

var ndarrayLike = require( './../lib' );


// VARIABLES //

var ndarray,
	start,
	stop,
	len,
	res,
	b,
	i;

ndarray = {};
ndarray.data = [1,2,3,4];
ndarray.shape = [2,2];
ndarray.strides = [2,1];
ndarray.offset = 0;
ndarray.dtype = 'generic';
ndarray.length = 4;


// FUNCTIONS //

var toStr = Object.prototype.toString;


// --------------------------------------
// WARM-UP

len = 1e6;
for ( i = 0; i < len; i++ ) {
	i = i;
}


// --------------------------------------
// BENCHMARK

len = 1e6;
res = new Array( 1 );

// Control:
start = process.hrtime();
for ( i = 0; i < len; i++ ) {
	b = ( toStr.call( ndarray ) === '[object Object]' );
}
stop = process.hrtime( start );

res[ 0 ] = stop[ 0 ] + stop[ 1 ]*1e-9;

// Test:
start = process.hrtime();
for ( i = 0; i < len; i++ ) {
	b = ndarrayLike( ndarray );
}
stop = process.hrtime( start );

res[ 1 ] = stop[ 0 ] + stop[ 1 ]*1e-9;


// --------------------------------------
// RESULTS

console.log( 'ctrl:\t%d ops/sec', Math.floor( len/res[ 0 ] ) );
console.log( 'test:\t%d ops/sec', Math.floor( len/res[ 1 ] ) );
console.log( '\n' );

