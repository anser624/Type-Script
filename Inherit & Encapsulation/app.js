"use strict";
/////  Class  ////
// class form {
// name!:string; [ ! ] this mark will remove eror if you dont give any value to property ..
// id!:number;
//     submit(name:string,id:number){
//         this.name = name;
//         this.id = id;
//         console.log(`this is your details ${this.name} : id is ${id}`);
//     }
// }
// const p1 = new form();
// p1.submit("ansar",445);
// console.log(p1.submit("ali",123));
///////////////////////////////////////////////////////////////////////////////////////////////
////////////    Inheritence ///////////////
// class form {
//   name!: string; // [ ! ] this mark will remove eror if you dont give any value to property ..
//   id!: number;
//   submit(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//     console.log(`this is your details ${this.name} : id is ${id}`);
//   }
// }
// class reciept extends form {
//   pay!: number;
//   reciept(price: number, name: string, id: number) {
//     this.pay = price;
//     this.name = name;
//     this.id = id;
//     console.log(
//       `Payment recieved Rs:${this.pay} From => Name = ${this.name} ; id = ${this.id}`
//     );
//   }
// }
// const person = new reciept();
// person.reciept(500, "Rauf", 156);
/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// EnCapsulation ///////////////
////  Public & Private  ////
// class form {
//       name: string = "Ansar"; // [ ! ] this mark will remove eror if you dont give any value to property ..
//       private id: number = 13 ; ///this property also a public property we access everywhere inside or outside class // 
//       submit(name: string, id: number) {
//         this.name = name;
//         this.id = id;
//         console.log(`this is your details ${this.name} : id is ${id}`);
//       }
//     }
//     const person = new form();
//     person.name = "Rauf";  //// here you can see we edit the name property outside the class its make problem because he is public propert now we see id property ///
//     // person.id = 446 ; //Property 'id' is private and only accessible within class 'form' /////
//     console.log(person);
//     // person.submit("ansar",1566);
