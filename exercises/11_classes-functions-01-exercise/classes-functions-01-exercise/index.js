import Animal from './src/Animal.js';
import Dog from './src/Dog.js';
 
const human = new Animal('human', 2);
human.identify();

const dog = new Dog();
dog.bark();
console.log(dog.legs);
dog.identify();