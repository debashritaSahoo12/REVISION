if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    // Your code here to implement the indexOf polyfill
    if(this == null) {
      throw new TypeError('"this" is null or not defined');
    }
    const length = this.length >>> 0; 
    if (length === 0) {
      return -1;
    }
    let start=Number(fromIndex) || 0;
    start = (start < 0) ? Math.max(length + start, 0) : Math.min(start, length);

    for (let i = start; i < length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}


//Example use case
const fruits = ['apple', 'banana', 'mango'];
console.log(fruits.indexOf('banana')); // 1
console.log(fruits.indexOf('grape'));  // -1
console.log(fruits.indexOf('mango', 2)); // 2
console.log(fruits.indexOf('apple',-3)); // 0


const numbers=[1,2,3,4,5];
console.log(numbers.indexOf(3)); // 2
console.log(numbers.indexOf(6)); // -1

