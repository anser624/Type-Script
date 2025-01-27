"use strict";
// First Assingment Of Type-Script //
const alertts = "Hello Type-Script here !";
alert(alertts);
const msg = "Good Morning!"; // we set the type of msg is srting // we dont pass number in this variable //
alert(msg);
const num = 123; //we set the alert type is number //
alert(num);
function table(numb) {
    for (let i = 1; i <= 2; i++) {
        alert(`${numb} x ${i} = ${numb * i}`);
    }
}
table(2); // here we pass argument only number not sting if we give sting value like ("a,b,c") he will throw error in this file//
// open terminal (ctrl+j) and enter tsc and file name like my file name test.ts // and press enter to compile the code in js file //// here we done and open the browser to see alert in the result ///
