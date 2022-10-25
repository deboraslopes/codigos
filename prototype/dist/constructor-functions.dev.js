"use strict";

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

var personPrototype = {
  firstName: 'Luiz',
  lastName: 'Miranda',
  age: 30,
  fullName: function fullName() {
    return "".concat(this.firstName, " ").concat(this.lastName);
  }
};
Person.prototype = Object.create(personPrototype); //perde o construtor

Person.prototype.constructor = Person; //construtor
//fazer herança

var person1 = new Person('João', 'Miranda', 30);
console.log(person1);
console.log(person1.fullName());