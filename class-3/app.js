// union_literals_type ( | );; ///////
// let myname :string ;
// let myAge : string | number ; //here we give any value to myAge var beacuse his type are both num & str ;///
// myname = "ansar";
// myAge = 30;
// myAge = "thirty";
//  console.log(myname + " " + myAge);
// [ | <= this is the sign of union literals  ]
//  nested object_type /// 
// type author =  {
//     firtName : string ;
//     lastName : string ; 
// }
// type book = {
//     authorName : author;
//     bookName:string;
//     publishYear : number ;
//     category?:string;
// }
// let books : book = {
//     authorName : {
//         firtName :"jhon",
//         lastName: "elia"
//     },
//     bookName : "poetry",
//     publishYear: 1999 , 
// }
// console.log("Author-Name "+books.authorName.firtName +" "+ books.authorName.lastName);
// console.log("Book-Name "+books.bookName);
// console.log("Publish-year-Of-Book "+books.publishYear);
// any & unkown_type ///
///////////// TYPE -- ANY -- TS //////////
// let x:any ;
// x = "string"; // true condtion and x type is string // 
// x = 48; // true condtion and x type is number //
// x = true ; // true condtion and x type is boolean // 
// he will never throw error beacause he will behave totally js type //
// console.log(x);
///////////// TYPE -- UnKnown-- TS //////////
var x = "String-type";
var y = x;
// x = "string"; // true condtion and x type is string // 
// x = 48; // true condtion and x type is number //
// x = true ; // true condtion and x type is boolean // 
// he will never throw error beacause he will behave like little bit of js type //
console.log(y);
