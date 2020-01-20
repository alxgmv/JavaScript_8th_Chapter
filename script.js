let javaCode = function() {
  'use strict'
  let x = prompt('Enter your code');
  if (x!=null) {
    try {
      eval(x);
      console.log(x);
    } catch (err) {
      alert('Error message: ' + err);
      console.log(err);
    }
  }
}
javaCode();
