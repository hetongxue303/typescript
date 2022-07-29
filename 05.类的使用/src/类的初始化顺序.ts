export default {}

class Student {
    name: string = 'test1'

    constructor() {
        console.log('Student')
    }
}

class User extends Student {
    name: string = 'test2'

    constructor() {
        super()
    }
}

/**
 * 因为在子类中 虽然将name重新赋值为test2 但是在构造函数中 调用了父类中的值 故结果为：test1
 * 若在子类的构造函数中输出 this.name 则结果应该为test2 此时已经指向了子类
 */
let user = new User()
console.log(user)// 结果：test1