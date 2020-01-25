// let javaCode = function() {
//   'use strict'
//   let x = prompt('Enter your code');
//   if (x!=null) {
//     try {
//       eval(x);
//       console.log( x );
//     } catch (err) {
//       alert('Error message: ' + err);
//       console.log(err);
//     }
//   }
// }
// javaCode();

// let javaCode = function() {
//   let x = prompt('Enter your code');
//   let y = new Function(x);
//   try {
//     'use strict'
//     y();
//     console.log(y);
//   } catch (err) {
//     alert('Error message: ' + err);
//     console.log(err);
//   }
// }
// javaCode();


let javaCode = function() {
  try {
    let x = prompt('Enter your code');
    let y = new Function(x);
    return (y());
  } catch (err) {
      alert('Error message: ' + err);
      console.log(err);
  }
}
'use strict'
javaCode();
