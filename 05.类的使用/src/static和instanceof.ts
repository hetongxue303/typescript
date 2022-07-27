export default {}

// static使用
class Person {
    static info: string

    static out(): void {
        console.log(Person.info)
    }
}

// 直接通过类名调用
Person.info = 'test'
Person.out()// 结果：test

// instanceof使用
class Test {
}

/**
 * 此时 test 不是 Person 类型
 */
let test = new Test()
console.log(test instanceof Person)// 结果：false

// 继承使用
class Student extends Person {
}

/**
 * 通过继承 子类依旧属于父类 故类型相同
 */
let student = new Student()
console.log(student instanceof Person)// 结果：true