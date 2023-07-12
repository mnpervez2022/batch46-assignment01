// Q45 Assignment No 01 Batch 46 Q1
//Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments. Call
// the function with the required information and two other name-value
// pairs, such as a color or an optional feature. Print the Object that’s
// returned to make sure all the information was stored correctly.
// let car : {
//     manufacturerName:string,
//     modelName:string,
//     color : string,
//     year? :number,
// };
//{ name: string; age: number } {
  //  return { name: 'Bobby Hadz', age: 30 }

function carInformation(mName:string,modName:string,coluor:string,year?:number):{
    company_Name:string; model_Name:string; color :string;year?:number} {
    return { 
        company_Name:mName,
        model_Name  :modName,
        color       : coluor,
        year        : year,   
    }
    
}
console.log("First Message",carInformation("Toyota","Vitz","White",1980));
console.log("Second message without optional year value ",carInformation("Suzuki","Swift","Black"));
