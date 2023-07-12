
const name2 = "Muhammad Nasim Pervez";
console.log(name2.toLocaleLowerCase());
console.log(name2.toUpperCase());
let text: string[];
for (let c= 0; c< name2.length; c++){
if (name2.substring(c,c-1)===" "){
    console.log(" space found")
    console.log("value of counter c is : ",c);
    //console.log(name2.substring(((c-1)-(c-1)),(c-1)))
    console.log("my anme is ",name2.substring((c-1)))
    //console.log(name2.substring(c));
}

}