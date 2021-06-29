class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log("This ninja name is " + this.name);
    }

    showStats(){
        console.log("This ninja name is " + this.name);
        console.log("This ninja health is " + this.health);
        console.log("This ninja speed is " + this.speed);
        console.log("This ninja strength is " + this.strength);
    }

    drinkSake(){
        this.health += 10;
        console.log(this.name + " drank sake, and the health is " + this.health + " now!");
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        this.drinkSake();
        console.log(`Wisdom, drank sake and got ${this.health}`);
    }
}

const sensei1 = new Sensei("Liam");
sensei1.sayName();
sensei1.speakWisdom();
sensei1.showStats();
console.log(sensei1);
