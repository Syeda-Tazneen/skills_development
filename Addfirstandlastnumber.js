


var num=1236
var first;
var last=num%10;
var len=num.toString().length-1
console.log(len)
first=parseInt(num/Math.pow(10,len))
console.log(first)
var sum=first+last
console.log(sum)