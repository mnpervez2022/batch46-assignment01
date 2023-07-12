//Name Cases: Store a person’s name in a variable, and then print 
//that person’s name in lowercase, uppercase, and titlecase.
let myname = "this is first message to convert into title case";
console.log("Name in lower case :", myname.toLowerCase());
console.log("Origional name after lowercase ", myname);
console.log("Name in lower case :", myname.toUpperCase());
console.log("Origional name after uppercase ", myname);
// First step to split text into words by finding spaces
let firstStep = myname.split(' ');
console.log("first message", firstStep);
let stepTwo = firstStep.map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
console.log("Second Step message", stepTwo);
let stepThree = stepTwo.join(' ');
console.log("Third Step :", stepThree);
//final step
console.log("Final Stpe", myname.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' '));
export {};
