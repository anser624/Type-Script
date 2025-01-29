////// function_type //////
// Jab hum kisi function ka type define karte hain, to ise function type kehte hain./////
// function add(a:number,b:number):number{
//     return a+b ;
// }
// console.log(add(6,6));
// function namefun(firstName:string,lastName:string):string{
//     return firstName.charAt(0).toUpperCase() + firstName.slice(1) + " " + lastName;
// }
// console.log(namefun("ansar","malik"));
////// Never_Type //////
// Jab koi function kabhi return nahi karta, ya koi aisa case handle karta hai jo kabhi hona hi nahi chahiye, to uska type never hota hai.///////////////////////////////////
// function nevertype(message:string):never{
//     throw Error(message);
// }
// console.log(nevertype("function will never return any value !"));
//  * Ye function kabhi return nahi karega kyunki ye hamesha error throw karega.
//  * Aise functions ka type never hota hai.
////// Array_Type //////
// let array1: string[]= ["mango","grapes"]; /// ===> here we store only string values because array1 type is string so we can not store any number or boolean type values /////
// let array2: number[]= [1,2,3]; /// ===> here we store only number values because array1 type is number so we can not store any string or boolean type values /////
// console.log(array1);
// console.log(array2);
// here we can store multiple type in one array in round brackets and | this symbol use /////
// let userarray: (number | string | boolean)[] = ["Id Is :",123,true];
// console.log(...userarray);
////// Enum_Type //////
// enum ek special type hai jo predefined values ka set define karne ke liye use hota hai./////
// enum arrowkey {
//     up, // 0 output
//     down, // 1 output
//     right, // 2 output
//     left, // 3 output
// }
// let key:arrowkey = arrowkey.left;
// console.log(key);
// enum show {
//     success = 200,
//     NotFound = 404,
//     ServerError = 500,
// }
// let statusMsg:show = show.ServerError;
// console.log(statusMsg);
////// Const_Enum_Type //////
// * const enum compile hone ke baad extra code generate nahi karta.
// * Yeh performance ke liye better hota hai.
// const enum Colors {
//   Red,
//   Green,
//   Blue,
// }
// let myColor = Colors.Green;
// console.log(myColor); // Output: 1
////// Explicit_Casting_Type //////
// *  Kabhi kabhi TypeScript ko pata nahi hota ke koi variable kis type ka hai,
//    - to hum explicit casting ka use karte hain.
// let fruit:unknown = "mango , is sweet !"
// let fruitlength = (fruit as string).length ; 
// console.log(fruitlength); // output= 18 //
// console.log(fruit as string); // output =  mango is sweet !
/////////// second method //////////////
var fruit = "mango , is sweet !";
var fruitlength = fruit.length;
// console.log(fruitlength); // output= 18 //
console.log(fruitlength);
