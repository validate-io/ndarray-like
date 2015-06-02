'use strict';

var ndarrayLike = require( './../lib' );

var arr = {
	'data': [1,2,3,4],
	'shape': [2,2],
	'strides': [2,1],
	'offset': 0,
	'dtype': 'generic',
	'length': 4
};
console.log( ndarrayLike( arr ) );
// returns true

console.log( ndarrayLike( [] ) );
// returns false

console.log( ndarrayLike( {} ) );
// returns false

console.log( ndarrayLike( null ) );
// returns false
