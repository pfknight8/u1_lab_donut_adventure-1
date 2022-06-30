class Hampster {
  constructor(name){
    this.owner = "";
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log('squeak squeak')
  }
  eatFood() {
    console.log('nibble nibble')
  }
  getPrice() {
    return this.price;
  }
}

class Person {
  constructor(name){
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight
  }
  greet() {
    console.log(`Hi, my name is ${this.name}.`)
  }
  eat(howMuch) {
    this.mood += parseInt(howMuch);
    this.weight += parseInt(howMuch);
  }
  exercise(howMuch) {
    this.weight -= parseInt(howMuch);
  }
  ageUp(number) {
    this.age += parseInt(number);
    this.height += parseInt(number);
    this.weight += parseInt(number);
    this.mood -= parseInt(number);
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

const newPerson = new Person("Timmy")
newPerson.ageUp(5);
newPerson.eat(5);
newPerson.exercise(5);
newPerson.ageUp(9);

const hamsterGus = new Hampster("Gus");

newPerson.buyHamster(hamsterGus);
hamsterGus.owner = newPerson.name;

newPerson.ageUp(15);
newPerson.eat(2);
newPerson.exercise(2);

console.log(newPerson);
console.log(hamsterGus);