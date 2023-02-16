let user = {
    name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log( JSON.stringify(descriptor, null, 2 ) );
/* дескриптор свойства:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/


let user1 = {};

Object.defineProperty(user1, "name", {
    value: "John"
});

let descriptor1 = Object.getOwnPropertyDescriptor(user1, 'name');

console.log( JSON.stringify(descriptor1, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

// Геттеры и сеттеры
let obj = {
    get propName() {
        // геттер, срабатывает при чтении obj.propName
    },

    set propName(value) {
        // сеттер, срабатывает при записи obj.propName = value
    }
};

let user3 = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};
user3.fullName = 'Oleg Ivanov'
console.log(user3.fullName); // John Smith