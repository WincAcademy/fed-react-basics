export default class Animal {
    constructor(species, legs) {
        this.species = species;
        this.legs = legs;
    }
 
    identify() {
        console.log(
            `This animal is a ${this.species}, and has ${this.legs} legs.`
        );
    }
}