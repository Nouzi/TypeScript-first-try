"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
require("./style.css");
var app = document.querySelector('#app');
app.innerHTML = "\n  <h1>Hello Vite!</h1>\n  <a href=\"https://vitejs.dev/guide/features.html\" target=\"_blank\">Documentation</a>\n";
var id = 5;
id = 6;
console.log(id);
// Tuple - definovanie špecitického typu dát, ktoré má mať v sebe, v poradá z Ľava do Prava 
var arr = [4, "Hello", true];
// Tuple array - definovanie špecitického typu dát, ktoré má mať v sebe, v poradá z Ľava do Prava v Arrays(Zoznamoch)
var employee;
employee = [
    [1, "Brad"],
    [1, "Brad"],
    [1, "Brad"]
];
//Union - keď chcem špecifikovať pre premennú aby sa do nej mohla vkladať viacej ako jeden špecifický typ dáť 
var rohlik = 4;
// Objects - Definovanie špecifických dát, ktorá sa môže vkladať do premenných vrámci objektu 
var user = {
    id: 4,
    name: "John"
};
var person = {
    id: 4,
    name: "John"
};
// Type Assertion - definovanie špecifického typu dát pre premennú, ktorá v sebe má inú premennú a tá nemá špecificky definovaný typ dát 
var cid = 1;
var customerId = cid;
customerId = "Hello";
// Functions - definovanie špecifického typu dát v argumentoch a vrámci celej funkcie toho aký typ dát má vrátiť
function addNum(x, y) {
    return x + y;
}
;
var person1 = {
    id: 4,
    name: "John"
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// CLasses - slúži na definovanie viacerých objektov
// ak používam this v contructore v Classes, tak sa this vzťahuje na Classu samotnú, nižšie uvedený príklad pridáva do contructora práve premenné id a name vďaka this metóde
// tiež viem pridať na dáta ďalší verejnosť alebo súkomnosť, čo znamená, že ich budem môcť meniť aj mimo danej Classy alebo nebudem môcť Public, Private, Protected
// Tiež viem implementovať interface do Classes pomocou implements "názov implementu"
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
;
var brad = new Person(1, "Brad");
var mike = new Person(2, "Mike");
// console.log(brad, mike)
// console.log(mike.id)
// console.log(mike.name)
console.log(brad.register());
console.log(mike.register());
// Keďže Employee Classa rozširuje Person Classu tak sa nazýva Sub-Class alebo Subclass
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, "shawn", "developer");
// console.log(emp.name)
// console.log(emp.id)
// console.log(emp.position)
// console.log(emp.register())
// Generics - Znovu použiteľné komponenty  
// Pridal som do funkctie generics s názvom T, čiže ako Type, ktorý sa neskôr môže vždy vyplniť podľa toho aký typ dáť chcem využívať
function getArray(items) {
    return new Array().concat(items);
}
var numArraay = getArray([1, 2, 3, 4]);
var strArraay = getArray(["brad", "John", "Jill"]);
numArraay.push(5);
strArraay.push("Ben");
