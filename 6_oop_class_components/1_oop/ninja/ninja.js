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
        console.log(this.name + "drank sake, and the health is" + this.health + "now!");
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
