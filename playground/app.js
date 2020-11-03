// function update(progressBarId, increase) {
//   // Write the code that goes here
//   // grab bar value
//   let bar = document.getElementById(progressBarId)
//   // check if value is less than max
//   if (bar.value < bar.max) {
//     // if less, check if increase will top it
//     if ((bar.value + increase) > bar.max) {
//       bar.value = bar.max
//     } else {
//       bar.value += increase
//     }
//   }

//   // return true if value at max
//   if (bar.value >= bar.max) {
//     return true
//   } else {
//     return false
//   }
// }

// // Example case. 
// document.body.innerHTML = `<progress id="loading-bar" value="0" max="100"></progress>`;
// console.log(update("loading-bar", 50)); // should return false and loading-bar's value should be 50.
// console.log(update("loading-bar", 50)); // should return true and loading-bar's value should be 100.

// class positiveNumbers {
//   constructor() {
//     this.current = 0;
//     this.next = function () { return ++this.current; };
//   }
// }

// console.log(positiveNumbers)