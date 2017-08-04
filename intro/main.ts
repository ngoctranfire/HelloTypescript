class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
}
let person1 = new Person("Person1", 23);
console.log(`Person with name: ${person1.name}, age: ${person1.age}`);