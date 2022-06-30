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
  }
  getName() {
    //
  }
  getAge() {
    //
  }
}