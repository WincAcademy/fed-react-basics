import Animal from './Animal.js';

export default class Cat extends Animal {
    constructor(name) {
        super(
            name,
            'cat',
            4 // a cat has 4 legs
        );
    }

    meow() {
        console.log('Meow!');
    }

    scratch(thing) {
        console.log(`I'm scratching ${thing}!`);
    }

    call(name) {
        console.log("Cats don't come when called.");
    }
}