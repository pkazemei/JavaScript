class Ninja{
    constructor(name){
        this.name=name
        this.health=100
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(`Hello ${this.name}, ready to start your ninja training?`);
    }
    showStats(){
        console.log(`Current stats are: ${this.name}, ${this.strength}, ${this.speed}, ${this.health}`);
    }
    drinkSake(){
        this.health+=10;
        console.log(`Health increased by 10! Currently: ${this.health}`)
    }
}

const ninja1=new Ninja('Hayabusa')
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()