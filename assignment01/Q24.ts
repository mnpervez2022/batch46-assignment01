//• Tests for equality and inequality with strings

let a = 4;
if (a >4 ) {
    console.log("Number is > 4")
}else if (a===4){
    console.log("Number is = 4")
}
//• Tests using the lower case function

let name1 = "Muhammad Nasim Pervez";
if (name1 === name1.toLowerCase()) {
    console.log(`Name ${name1}" is in lower case `)
} else {
console.log((`Name ${name1}" is in normal case `))
}
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

 a = 5; let b = 4;
 if (a===b){
    console.log(` A: ${a} is =  B : ${b}` )
 } else  if (a != b) {
    console.log(` A: ${a} is Not = to B : ${b}` )
 } else if ( a > b ) {
    console.log(` A: ${a} is > then B : ${b}` )
 } else if (a < b) {
    console.log ` A: ${a} is < then B : ${b}` 
 }else if (a >= b) {
    console.log ` A: ${a} is >= then B : ${b}` 
 }else if (a <= b) {
    console.log ` A: ${a} is <= then B : ${b}` 
 }
//• Tests using "and" and "or" operators
let nationality = 'Pakistani';
let age =60;
if (nationality === 'Pakistani' && age === 60) {
    console.log('You are count as senior citizen')
} else if (nationality === 'Pakistani' || age >=18) {
    console.log('You are eligible to get CNIC')
}

//• Test whether an item is in a array
let item : string[];
//item = 'ABC';// string data can not be stored in arran type string
console.log('String data can not be restored in an array type string')

//• Test whether an item is not in a array
item = ["ABC"] // Allow to add item as an array element 
console.log(`${item} can be saved b/c it is an array type elemtn`)