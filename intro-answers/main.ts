interface Credentials {
    socialSecurity: string;
    taxId: string;
    healthPublicID: number;
}

class Person {
    private credentials: Credentials;
    private isTrue: boolean;
    constructor(public name: string, public readonly age: number){}

    public setCredentials(credentials: Credentials): void {
        this.credentials = credentials;
    }

    public getCredentials() {
        return this.credentials;
    }

}

class SuperPerson extends Person {
    constructor(public name: string, public readonly age: number,
                private superPowers: string[]) {
        super(name, age);
        this.superPowers = superPowers;
    }

    public getSuperPowers(): string[] {
        return this.superPowers;
    }
}

let person1 = new Person("Peter", 30);
console.log(`Log1: Person name: ${person1.name} Age: ${person1.age}, Credentials: `, person1.getCredentials());

person1.setCredentials({
    socialSecurity: "1232",
    taxId: "taxId",
    healthPublicID: 203
});

console.log(`Log2: Person name: ${person1.name} Age: ${person1.age} Credentials:`,  person1.getCredentials());
