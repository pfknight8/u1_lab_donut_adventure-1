class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = {
      sprinkleSpray: 5,
      sugarShock: 10
    }
    this.catchPhrases = ['i\'m fresher than day old pizza', 
    'you can\'t count my calories'];
  }
  talkSass() {
    let i = Math.floor(Math.random()*this.catchPhrases.length);
    console.log(i);
    return this.catchPhrases[i];
  }
  announceHealth() {
    console.log(this.health);
  }
  battle() {
    console.log('i\'m ready to rumble')
  }
}

const dougieDonut = new Hero("Dougie the Donut")
console.log(dougieDonut.talkSass());
dougieDonut.announceHealth();

class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = {
      pepperoniStars: 5,
      cheeseGrease: 10    
  }
    this.catchPhrases = ['i\'m youtube famous',
    'i\'m more dangerous than an uncovered sewer'];
  }
  talkSmack() {
    let i = Math.floor(Math.random()*this.catchPhrases.length);
    console.log(i);
    return this.catchPhrases[i];
  }
  announceHealth() {
    console.log(this.health);
  }
  battle() {
    console.log('i\'m gonna flatten you like a slice of pepperoni!')
  }
}

const pizzaRat = new Enemy("Pizza Rat");
console.log(pizzaRat.talkSmack());