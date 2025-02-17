"use strict";
class person {
    constructor(name, cell) {
        this.name = name;
        this.cell = cell;
    }
    data(name, cell) {
        this.name = name;
        this.cell = cell;
        console.log(`${this.name} is booked . phone number is ${this.cell}`);
    }
}
const user = new person();
user.data("ansar", 45666);
