if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback,thisArg){
        if(typeof callback !== 'function'){
            throw new TypeError(callback + ' is not a function');
        }
        const result = [];
        for(let i = 0; i < this.length; i++){
            if(i in this){
                result[i] = callback.call(thisArg, this[i], i, this);
            }
        }
        return result;
    }
}

const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.myMap(x => x * 2);
console.log(mappedArr); // Output: [2, 4, 6, 8, 10]

//Array.prototype.sort

if(!Array.prototype.mySort){
    Array.prototype.mySort = function(compareFunction){
        const arr=this;
        const cmp=(a,b)=>{
            const A=String(a), B=String(b);
            if(A<B) return -1;
            if(A>B) return 1;
            return 0;
        }
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                const a = arr[j],
                  b = arr[j + 1];
                const compare = compareFunction ? compareFunction(a, b) : cmp(a, b);
                if (compare > 0) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
}

const arr2 = [5, 3, 8, 1, 2];
const sortedArr = arr2.mySort();
console.log(sortedArr); // Output: [1, 2, 3, 5, 8]


if (!String.prototype.myStartsWith) {
  String.prototype.myStartsWith = function(searchString, position = 0) {
    if (typeof searchString !== 'string') {
      throw new TypeError('Search string must be a string');
    }
    const start = position < 0 ? 0 : position;
    for (let i = 0; i < searchString.length; i++) {
      if (this[start + i] !== searchString[i]) {
        return false;
      }
    }
    return true;
  };
}

const text = "JavaScript is awesome!";
console.log("myStartsWith test 1:", text.myStartsWith("Java")); // true
console.log("myStartsWith test 2:", text.myStartsWith("Script", 4)); // true
console.log("myStartsWith test 3:", text.myStartsWith("script")); // false 
