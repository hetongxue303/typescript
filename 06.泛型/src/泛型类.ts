export default {}

class User<T1 = string, T2 = number, T3 = any> {
    name: T1
    age: T2
    data: T3

    constructor(name: T1, age: T2, data: T3) {
        this.name = name
        this.age = age
        this.data = data
    }

}

// 这里使用的默认类型
let user = new User('test', 22, 'hello word')
console.log(user)

// 手动指定类型
let user2 = new User<number, boolean, User<string, number, string>>(123, true, {name: 'test', age: 22, data: 'data'})
console.log(user2)

let user3: User<number, number, number> = new User(123, 456, 789)
console.log(user3)