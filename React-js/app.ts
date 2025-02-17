class person {
  constructor(public name?: string, public cell?: number) {}
  data(name: string, cell: number) {
    this.name = name;
    this.cell = cell;
    console.log(`${this.name} is booked . phone number is ${this.cell}`);
  }
}

const user = new person();

user.data("ansar",45666);
