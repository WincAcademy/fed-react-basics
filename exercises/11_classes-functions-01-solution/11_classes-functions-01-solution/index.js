import Animal from './src/Animal.js';
import Dog from './src/Dog.js';
import Cat from './src/Cat.js';
 
const human = new Animal('Tom', 'human', 2);
console.log(human.name);
human.identify();

const dog = new Dog('Rex');
dog.bark();
console.log(dog.legs);
dog.identify();
dog.fetch('the ball');
dog.call('Rex');

const secondDog = new Dog('Fido');
secondDog.call('Rex');

const cat = new Cat('Fluffy');
cat.meow();
cat.scratch('the couch');
cat.call('Fluffy');
