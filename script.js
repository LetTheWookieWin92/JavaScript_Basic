
// Object
let person = 
{
  name: "Geoff",
  age: 27,
  getWage: function() {
    return this.age * 1000;
  }
};

console.log("Geoff's wage is: $" + person.getWage())

// Array
let colours = ["Red", "Blue", "Green"];
console.log("Geoff's favourite colour is: " + colours[2])