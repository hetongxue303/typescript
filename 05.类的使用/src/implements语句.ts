export default {}

interface IUser {
    name: string
    age: number
    gender?: string

    show(): void
}

/**
 * 实现了IUser接口中的方法及属性
 */
class Person implements IUser {
    name: string = 'test'
    age: number = 22
    // 由于是 可选属性 默认是不会被实现的
    gender = '男'


    show(): void {
        console.log(this.name, this.age, this.gender)
    }

}

let person = new Person()
person.show()    // 结果：test,22,男