"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.setCredentials = function (credentials) {
        this.credentials = credentials;
    };
    Person.prototype.getCredentials = function () {
        return this.credentials;
    };
    return Person;
}());
var SuperPerson = (function (_super) {
    __extends(SuperPerson, _super);
    function SuperPerson(name, age, superPowers) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.superPowers = superPowers;
        _this.superPowers = superPowers;
        return _this;
    }
    SuperPerson.prototype.getSuperPowers = function () {
        return this.superPowers;
    };
    return SuperPerson;
}(Person));
var person1 = new Person("Peter", 30);
console.log("Log1: Person name: " + person1.name + " Age: " + person1.age + ", Credentials: ", person1.getCredentials());
person1.setCredentials({
    socialSecurity: "1232",
    taxId: "taxId",
    healthPublicID: 203
});
console.log("Log2: Person name: " + person1.name + " Age: " + person1.age + " Credentials:", person1.getCredentials());
//# sourceMappingURL=main.js.map