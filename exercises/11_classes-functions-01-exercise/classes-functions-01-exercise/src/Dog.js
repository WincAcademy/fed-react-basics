import Animal from './Animal.js';

export default class Dog extends Animal {
    constructor() {
        super('dog', 4); // a dog has 4 legs
    }
    
    bark() {
        console.log('Woof!');
    }
}