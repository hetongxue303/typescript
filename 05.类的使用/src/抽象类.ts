export default {}

// 定义抽象类 该类不可被实例化 只能作为基类使用
abstract class Person {
    abstract name: string

    // 定义抽象方法
    abstract show(): string

    out(): void {
        console.log(this.name)
    }
}

/**
 * 继承抽象类需要实现其对应的方法
 * 此时的类可以被实例化
 */
class Student extends Person {
    name: string = 'test'

    show(): string {
        return this.name;
    }
}

// let person =new Person()  错误：此时不能创建抽象类的实例 只能对继承他的类进行实例化
let student = new Student()
student.out()// 结果：test