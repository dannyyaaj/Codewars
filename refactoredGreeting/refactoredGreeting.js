function Person(name) {
this.name = name;
}

Person.prototype.greet = function(targetName) {
return `Hello ${targetName}, my name is ${this.name}.`;
}

// es6 way below

class Hmong {
  constructor(name) {
  this.name = name;
  }

  greet(targetName) {
  return `Hello ${targetName}, my name is ${this.name} and I am Hmong.`;
  }
}

const Danny = new Hmong('Danny');
console.log(Danny.greet('Justine'));
