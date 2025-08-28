export default class Animal {
    constructor(name, species, legs) {
        this.name = name;
        this.species = species;
        this.legs = legs;
    }
 
    identify() {
        console.log(
            `This animal is a ${this.species}, and has ${this.legs} legs.`
        );
    }

    fetch() {
        console.log(
            "I don't want to fetch."
        )
    }

    call(name) {
        if (name === this.name) {
            console.log(`Yes, this is ${this.name}!`);
        }
    }
}