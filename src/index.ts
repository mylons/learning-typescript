
let a = 1 + 2
let b = a + 3
let c = {
    apple: a,
    banance: b
}

let d = c.apple * 4

class Person {
    constructor (
        public firstName: string,
        public lastName: string,
    ) {}
}

let e = new Person("mike", "lyons")
console.log(e)