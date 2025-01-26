// alias type 

// let person:{
//     name:string,
//     age:number,
//     id:boolean,
// } = {
//     name : "ansar",
//     age : 45 ,
//     id : true,
// }

// console.log(person);

////second method ////

// let person:{
//     name:string,
//     age:number,
//     id:boolean,
//     city?:string,   //remove (?) symbol  you can find error in console beacause this symbol mean its optional not importan for the object /////
// } = {
//     name : "ansar",
//     age : 45 ,
//     id : true,
//     city : "karachi",
// }

// here we make type of object like person have 4 property we will make 4 types and use everywhere 

// type objtype =  {
//     name : string,
//     age:number,
//     id:boolean,
//     city?:string

// }
// let person:objtype = {
//     name : "ansar",
//     age : 45 ,
//     id : true,
//     city : "karachi",
// }

// let person2:objtype = {
//     name : "ali",
//     age :30,
//     id : false ,
//     // [city] property is optional no need if remove the ? then he is required for the person object///
//  }

// console.log(person);
// console.log(person2);
