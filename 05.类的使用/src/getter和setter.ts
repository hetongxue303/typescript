export default {}

class Person {
    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    getName(): string {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }

    getAge(): number {
        return this.age
    }

    setAge(age: number) {
        this.age = age
    }

    out(): void {
        console.log(`${this.name}${this.age}岁`)
    }
}

let person: Person = new Person('test', 22)
person.out()       // 结果：test22岁
person.getAge()    // 结果：22
person.getName()   // 结果：test
person.setAge(25)
person.setName('abc')
person.out()       // 结果：abc25岁
person.getAge()    // 结果：25
person.getName()   // 结果：abc