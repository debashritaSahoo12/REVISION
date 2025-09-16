const user = {
  name: "Alice",
  printName: function () {
    console.log(this.name);
  },
  printName2: function () {
    console.log(this.name);
  },
};

user.printName(); //Alice
user.printName2(); //Alice
