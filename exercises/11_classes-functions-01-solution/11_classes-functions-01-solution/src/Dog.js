import Animal from './Animal.js';

export default class Dog extends Animal {
    constructor(name) {
        super(
            name,
            'dog',
            4 // a dog has 4 legs
        );
    }
    
    bark() {
        console.log('Woof!');
    }

    fetch(thing) {
        console.log(`I'm fetching ${thing}!`);
    }
}