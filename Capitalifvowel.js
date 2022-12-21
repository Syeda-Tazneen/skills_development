var str='i am java'
var a = str.length;
 
for (var i = 0; i < a; i++) {
  if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u"
  ) {
    console.log(str[i].toUpperCase());
  } else {
    console.log(str[i]);
  }
}
