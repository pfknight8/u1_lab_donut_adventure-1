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
    // console.log(i);
    return this.catchPhrases[i];
  }
  announceHealth() {
    console.log(this.name + " has " + this.health + " points of health remaining.");
  }
  battle(target) {
    console.log('i\'m ready to rumble')
    const weaponsList = Object.keys(this.inventory);
    let i = Math.floor(Math.random() * weaponsList.length);
    let weaponChosen = weaponsList[i];
    console.log(this.name + " used " + weaponChosen + "!");
    let damageDealt = this.inventory[weaponsList[i]];
    console.log(target.name + " received " + damageDealt + " points of damage!");
    target.health -= damageDealt;
    target.announceHealth();
  }
}

const dougieDonut = new Hero("Dougie the Donut")
// console.log(dougieDonut.talkSass());
// dougieDonut.announceHealth();


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
    // console.log(i);
    return this.catchPhrases[i];
  }
  announceHealth() {
    console.log(this.name + " has " + this.health + " points of health remaining.");
  }
  battle(target) {
    console.log('i\'m gonna flatten you like a slice of pepperoni!')
    const weaponsList = Object.keys(this.inventory);
    let i = Math.floor(Math.random() * weaponsList.length);
    let weaponChosen = weaponsList[i];
    console.log(this.name + " used " + weaponChosen + "!");
    let damageDealt = this.inventory[weaponsList[i]]
    console.log(target.name + " received " + damageDealt + " points of damage!");
    target.health -= damageDealt;
    target.announceHealth();
  }
}

const pizzaRat = new Enemy("Pizza Rat");
// console.log(pizzaRat.talkSmack());

//Dougie talk Sass
console.log(dougieDonut.talkSass());
//Pizza Rat talk Smack
console.log(pizzaRat.talkSmack());
//Dougie health
dougieDonut.announceHealth();
//Pizza Pat health
pizzaRat.announceHealth();

//Let us battle...
dougieDonut.battle(pizzaRat);
pizzaRat.battle(dougieDonut);