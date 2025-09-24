if(!Array.prototype.indexOf){
    Array.prototype.indexOf=function (searchEle,fromIndex){
        let start=fromIndex||0
        for(let i=start;i<this.length;i++){
            if(this[i]===searchEle){
                return i
            }
        }
        return -1
    }
}

let num=[1,2,3]
console.log(num.indexOf(2));//1
console.log(num.indexOf(8));//-1

let str=['a','b','c']
console.log(str.indexOf('c'));//2
console.log(str.indexOf('e'));//-1

