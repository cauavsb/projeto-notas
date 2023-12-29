// string, boolean, number...
let x: number = 10;
x = 25;
console.log(x);

// inferencia x annotation
let y = 12 // inferencia 
let z: number = 12; // annotation

// tipos básicos
let firstName: string = "Cauã";
let age: number = 30;
const isAdmin: boolean = true;

console.log(typeof firstName);
firstName = "Eduardo";
console.log(firstName.toUpperCase())

// object
const myNumbers: number[] = [1, 2, 3]
console.log(myNumbers)
console.log(myNumbers.length)
myNumbers.push(5);
console.log(myNumbers)

// tuplas
let myTuple: [number, string, string[]];
myTuple = [5, "Cauã", ["a", "b"]];

// objects letrals - > {prop: value}
const user: {name: string; age: number} = {
    name: "João",
    age: 4,
};
console.log(user)

// any (não usual)
let a:any = 0;
a = "teste";
a = true;
a = [];

// union Type
let id: string | number = "10";
id = 200;

// type alias
type myIdType = number | string;
const userId: myIdType = 10;
const productId: myIdType = "00001"
const shirId: myIdType = 123;

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
};

const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};

console.log(camisa)

// literal types
let teste: "autenticado" | null;
teste = "autenticado";
teste = null;

// functions
function sum( a: number, b: number) {
    return a + b;
}
console.log(sum(12, 12))

function sayHelloTo(name: string): string {
    return `Hello, ${name}`;
}
console.log(sayHelloTo("Aninha"))

function logger(msg: string): void {
    console.log(msg);
}
logger("Teste!")

function greeting(name: string, greet?: string) {
    if (greet) {
        console.log(`Olá, ${greet} ${name}`);
        return;
    }
    console.log(`Olá, ${name}`);
}
greeting("José", "Sir")
greeting("José")

// interfaces
interface MathFunctionParams {
    n1: number,
    n2: number,
}
function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({n1: 1, n2: 2}));


function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}
const someNumbers:MathFunctionParams = {
    n1: 5,
    n2: 10,
}
console.log(multiplyNumbers(someNumbers))

// narrowing
// checagem de tipos
function doSomething(info: number | boolean) {
    if(typeof info === "number") {
        console.log(`O número é ${info}`)
        return;
    }
    console.log(`Não foi passado um número`)
}
doSomething(5);
doSomething(true);

// generics
function showArrayItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`)
    })
}

const a1 = [1, 2, 3]
const a2 = ["a", "b", "c"]

showArrayItems(a1);
showArrayItems(a2);

// classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean): void {
        if(canShow) {
            console.log(`A role do usuário é ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }
}

const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);

// interfaces em classes
interface IVehicle {
    brand: string,
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`);
    }
}

const fusca = new Car("VW", 4);
fusca.showBrand();

// herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);

// decorators
function BaseParameters() {
    return function<T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createAt = new Date();
        }
    }
}

@BaseParameters()
class Person {
    name

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("Sam");
console.log(sam)