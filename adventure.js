class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventor = {
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

class Enemy {
  constructor(name) {
    this.name = name;
  }
}

const dougieDonut = new Hero("Dougie the Donut")
console.log(dougieDonut.talkSass());