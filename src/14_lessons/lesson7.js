//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

class Animal {
    constructor(name) {
        this.name = name
    }
    walk () {
        console.log(`${this.name} walking`)
    }
    eat () {
        console.log(`${this.name} eating`)
    }
    sleep () {
        console.log(`${this.name} sleeping`)
    }
}

const cat = new Animal('Hitler')
cat.eat()
cat.walk()
cat.sleep()

//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают
class Monkey extends Animal {
    constructor() {
        super("Monkey")
    }
    roar () {
        console.log(`${this.name} roaring`)
    }
    climb () {
        console.log(`${this.name} climbing`)
    }
}

const monkey = new Monkey()
monkey.climb()
monkey.roar()
monkey.eat()

//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают

class Human extends Monkey {
    constructor() {
        super()
        this.name = 'Human'
    }
    speak () {
        console.log(`${this.name} speaking`)
    }
    think () {
        console.log(`${this.name} thinking`)
    }
}

const human = new Human()
human.speak()
human.think()

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование
function Animal1 (name) {
    this.name = name
    this.walk = function () {
        console.log(`${this.name} walking`)
    }
    this.eat = function () {
        console.log(`${this.name} eating`)
    }
    this.sleep = function () {
        console.log(`${this.name} sleeping`)
    }
}
const animal = new Animal1('Cat')
animal.walk()
animal.sleep()
animal.eat()

function Monkey1 (name='Monkey1') {
    Animal1.call(this)
    this.name = name
    this.roar = function () {
        console.log(`${this.name} roaring`)
    }
    this.climb = function () {
        console.log(`${this.name} climbing`)
    }
}

const monkey1 = new Monkey1()
monkey1.climb()
monkey1.roar()
monkey1.sleep()

function Human1 (name='Human1') {
    Monkey1.call(this)
    this.name = name
    this.think = function () {
        console.log(`${this.name} thinking`)
    }
    this.speak = function () {
        console.log(`${this.name} speaking`)
    }
}

const human1 = new Human1()
human1.speak()
human1.eat()
human1.climb()
human.think.bind(monkey)()


// Task 05
// Используя метод Apply реализовать свой собственный метод bind
function bind (func, context, ...boundArgs) {
    return (...args) => {
        func.apply(context, [...boundArgs, ...args])
    }
}
