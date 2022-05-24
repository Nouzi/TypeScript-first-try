import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

let id: number = 5;

id = 6;

console.log(id);

// Tuple - definovanie špecitického typu dát, ktoré má mať v sebe, v poradá z Ľava do Prava 
let arr: [number, string, boolean] = [4,"Hello",true];


// Tuple array - definovanie špecitického typu dát, ktoré má mať v sebe, v poradá z Ľava do Prava v Arrays(Zoznamoch)
let employee: [number, string][]

employee = [
  [1, "Brad"],
  [1, "Brad"],
  [1, "Brad"]
]  

//Union - keď chcem špecifikovať pre premennú aby sa do nej mohla vkladať viacej ako jeden špecifický typ dáť 
let rohlik: number | boolean = 4

// Objects - Definovanie špecifických dát, ktorá sa môže vkladať do premenných vrámci objektu 
const user: 
{ 
  id: number,
  name: string 
} = {
  id: 4,
  name: "John"
} 

// Types - pred definovanie špecifických dát, ktoré budú v premenných a budú aplikované vrámci daného typu ak sa použije 
type User = {
  id: number,
  name: string
};

const person: User = {
  id: 4,
  name: "John"
} ;

// Type Assertion - definovanie špecifického typu dát pre premennú, ktorá v sebe má inú premennú a tá nemá špecificky definovaný typ dát 
let cid: any = 1;

let customerId = cid as string;

customerId = "Hello"


// Functions - definovanie špecifického typu dát v argumentoch a vrámci celej funkcie toho aký typ dát má vrátiť

function addNum(x: number, y: number): number {
return x + y;
}

// Interface - Iný spôsob ako definovať Types pre špecifické funkcie a objekty 
// interface sa nedá používať s Unions alebo primitívnymi metódami 
// pokial pridám k nejakej hodnote ? tak to znej spravý voliteľnú hodnotu, čiže ak ju neskôr neaplikujem v danom interface, tak to nebude písať chybu
// Taktiež viem pridať "readonly" hodnotu, ktorá zakáže menenie dát v danej premennej.
interface UserInterface  {
 readonly id: number
  name: string
  age? : number
};

const person1: UserInterface = {
  id: 4,
  name: "John"
};

interface MathFunc {
  (x: number, y:number ): number
}

const add: MathFunc = (x:number, y:number): number => x + y
const sub: MathFunc = (x:number, y:number): number => x - y

// CLasses - slúži na definovanie viacerých objektov
// ak používam this v contructore v Classes, tak sa this vzťahuje na Classu samotnú, nižšie uvedený príklad pridáva do contructora práve premenné id a name vďaka this metóde
// tiež viem pridať na dáta ďalší verejnosť alebo súkomnosť, čo znamená, že ich budem môcť meniť aj mimo danej Classy alebo nebudem môcť Public, Private, Protected
// Tiež viem implementovať interface do Classes pomocou implements "názov implementu"
class Person implements PersonInterface {
  id: number
  name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name    
    }

    register(): string {
      return `${this.name} is now registered`
    }
}

interface PersonInterface  {
   id: number
   name: string
   register(): string
 };


const brad = new Person(1, "Brad")
const mike = new Person(2, "Mike")

// console.log(brad, mike)
// console.log(mike.id)

// console.log(mike.name)

console.log(brad.register())
console.log(mike.register())


// Keďže Employee Classa rozširuje Person Classu tak sa nazýva Sub-Class alebo Subclass
class Employee extends Person {

  position: string

  constructor(id: number, name: string, position: string) {
      super(id, name)
      this.position = position
  }
}

const emp = new Employee(3, "shawn", "developer")

// console.log(emp.name)
// console.log(emp.id)
// console.log(emp.position)
// console.log(emp.register())

// Generics - Znovu použiteľné komponenty  
// Pridal som do funkctie generics s názvom T, čiže ako Type, ktorý sa neskôr môže vždy vyplniť podľa toho aký typ dáť chcem využívať

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArraay = getArray<number>([1,2,3,4])
let strArraay = getArray<string>(["brad", "John", "Jill"])

numArraay.push(5)
strArraay.push("Ben")