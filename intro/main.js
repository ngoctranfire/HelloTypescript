var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person1 = new Person("Person1", 23);
console.log("Person with name: " + person1.name + ", age: " + person1.age);
