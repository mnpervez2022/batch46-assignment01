// Q42 Assignment No 01 Batch 46 Q1
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the 
//name of each magician in the array.
// let arrayMagician= ["Asif","Mustafa","Amir","Shahid","Qamar"];
// function show_magicians(Name:string[]):void{
// for (let c = 0; c< arrayMagician.length; c++){
//     console.log(` Magician No ${c+1} Name ${arrayMagician[c]}`)
// }
// }
// show_magicians(arrayMagician);
//Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
//show_magicians() to see that the list has actually been modified.
let arrayMagician = ["Asif", "Mustafa", "Amir", "Shahid", "Qamar"];
function make_great(Name) {
    for (let c = 0; c < arrayMagician.length; c++) {
        console.log(` Great Magician No ${c + 1} Name ${arrayMagician[c]}`);
    }
}
make_great(arrayMagician);
export {};
