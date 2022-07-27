export default {}

/**
 * 注意：在类中属性需要有构造函数进行赋值 否则报错
 */
class Person {
    // 定义属性
    name: string
    age: number
    gender: string

    // 构造函数(构造器)
    constructor(name: string, age: number, gender: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    // 自定义函数
    toString(): void {
        console.log(`我叫${this.name},今年${this.age}岁,性别${this.gender}!`)
    }
}

// new一个对象
let person = new Person('heTongXue', 22, '男')
person.toString()    // 结果：我叫heTongXue,今年22岁,性别男!