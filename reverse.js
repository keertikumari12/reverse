 let str = "the sky is blue";
 //op : Blue is sky the
 let res=str.split('').reverse() .join('');
 console.log(res);
// console.log(rev);

let str1="the sky is blue";
// op : eht yks si eulb;

let res1=str1.split('');
console.log(res1);
let op="";
for (let item of res1)
{
    op+=item.split('').reverse().join('');
    op+="";
}
console.log(op);


 
 

//   function reversewords(s){
//  return s.trim().split('').reverse().join('');
//   }
// let inputString = "the sky is blue";
//  let output = reversewords(inputString);
//  console.log(output);
