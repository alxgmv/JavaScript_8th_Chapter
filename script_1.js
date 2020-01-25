let filterByType = function() {
  let a = Array.prototype.slice.call(arguments);
  let b = [];
  for (i = 1; i < a.length; i++ ) {
    if (typeof a[i] == a[0]) {
      b.push(a[i]);
    }
  }
  console.log(b);
}
filterByType('boolean', 'a', 'aa', 'vb', 2, 4,true, true, 'z', 343542);
filterByType('string', 'a', 'aa', 'vb', 2, 4,true, true, 'z', 343542);
filterByType('number', 'a', 'aa', 'vb', 2, 4,true, true, 'z', 343542);
