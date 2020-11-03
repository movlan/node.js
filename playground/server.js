function positiveNumbers() {
  this.current = 0;
  this.next = function() {return ++this.current}
}

console.log(positiveNumbers())