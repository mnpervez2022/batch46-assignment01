//More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your
// program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest 
//to the end of your list. • Print a new set of invitation messages, one for 
//each person in your list.
let livingordeceased = ["Ahmad", "Zia", "Fazal"];
console.log(` Dear all ${livingordeceased[0]}, ${livingordeceased[1]}, ${livingordeceased}\n
i got a new bigger dinner table so i invite more three peoples for dinner\n
soon we will met, Thanks`);
livingordeceased.unshift("Umair"); // add new guest in start
console.log(livingordeceased, "add new guest named Umair in start");
livingordeceased.push("Haseeb"); // add new guest in last 
console.log(livingordeceased, "add new guest named Haseeb in last");
livingordeceased.splice(3, 0, "Sarfaraz");
console.log(livingordeceased, "add new guest named Sarfaraz in mid");
console.log(livingordeceased.length, "Length of array");
for (let count = 0; count < livingordeceased.length; count++) {
    console.log(`Mr. ${livingordeceased[count]} After added with some more guests i would like to invite to have a dineer with us on dated Sunday 9th July 2023 at my home thanks to join us\n `);
}
export {};
