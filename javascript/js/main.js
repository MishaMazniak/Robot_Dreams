console.log("_______ les-25 _________");

// ______ Check the object on datas_________
function checkOnEmpty(el) {
  if (Object.keys(el).length === 0) return console.log("Objeck is Empty!!!");
  return true;
}
// _________user_______
const user = {
  name: "Misha",
  age: 32,
  sayHello: function () {
    console.log("Привіт, я " + this.name, " мені " + this.age + " років");
  }
};
checkOnEmpty(user); //Check on empty
if (user.sayHello) user.sayHello(); //Check and run function
else console.log("Not property - sayHello");

// __________Calculator___________
const calculator = {
  num1: "",
  num2: "",
  ask: function () {
    let val1 = +prompt("Enter your first value");
    let val2 = +prompt("Enter your second value");
    this.num1 = val1;
    this.num2 = val2;
  },
  sum: function () {
    console.log(this.num1 + this.num2);
  },
  mul: function () {
    console.log(this.num1 * this.num2);
  },
};
calculator.ask();
calculator.sum();
calculator.mul();


