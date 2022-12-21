// const str = 'i am learning';
// const a = str.split(" ");
// for (var i = 0; i < a.length; i++) {
//     a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);

// }
// const str2 = a.join(" ");
// console.log(str2);



// const str='i am learning java'
// const b=str.split('')
// for(var i =0;i<= b.length;i++)
// {
//     if(str[i] === "a" ||
//     str[i] === "e" ||
//     str[i] === "i" ||
//     str[i] === "o" ||
//     str[i] === "u"
//     )
//     str[i]=str[i].toUpperCase()
// }



let str = "idea jio";

function startsWithVowel(str) {
    const a=str.split('')
 
  for(var i=0;i<=a.length ;i++)
  {
    let fstLetter = a[i].charAt(0);
    let lstletter=a[i].charAt(a.length-1)
  if (fstLetter=='a' || fstLetter=='e'|| fstLetter=='i' || fstLetter=='o' || fstLetter=='u' ) {
    return a[i].toUpperCase();
  }
else if(lstletter=='a' || lstletter=='e'|| lstletter=='i' || lstletter=='o' || lstletter=='u' ){
    return a[i].toUpperCase
}
}
}
console.log(startsWithVowel(str));