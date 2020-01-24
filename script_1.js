let filterByType = function() {
  let a = Array.prototype.slice.call(arguments);
  let b = [];
  for (i = 1; i < a.length; i++ ) {
    if (typeof a[i] == a[0]) {
      b.push(a[i]);
    }
  }
  console.log(b);
  // if ( a[0] == 'string' ) {
  //   let stringArray = a.filter( function(a) { return typeof a == 'string' } );
  //   console.log( stringArray );
  // }
  // if ( a[0] == 'number' ) {
  //   let numericArray = a.filter( function(a) { return typeof a == 'number' } );
  //   console.log( numericArray );
  // }
  // if ( a[0] == 'boolean') {
  //   let booleanArray = a.filter( function(a) { return typeof a == 'boolean' } );
  //   console.log( booleanArray );
  // }
}
// filterByType('boolean', 'a', 'aa', 'vb', 2, 4,true, true, 'z', 343542);
// filterByType('string', 'a', 'aa', 'vb', 2, 4,true, true, 'z', 343542);
filterByType('number', 'a', 'aa', 'vb', 2, 4,true, true, 'z', 343542);
