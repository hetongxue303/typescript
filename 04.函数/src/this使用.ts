export default {}

let User = {
    name: 'heTongXue',
    gender: '男',
    out: function () {
        this.name = 'test'
    }
}
console.log(User)
console.log(User.out())  // 结果：test

class CUser {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    /**
     * 默认本类为this
     */
    getUser1() {
        return () => {
            return this.name + this.age + '岁'
        }
    }

    /**
     * 可以改变this的指向
     */
    getUser2(this: CUser) {
        return () => {
            return this.name + this.age + '岁'
        }
    }

    getUser3(this: void) {
        return () => {
            return 'this指向为空 此时不能调用this'
        }
    }
}

let user = new CUser('heTongXue', 22)
console.log(user.getUser1())     // 结果：heTongXue22岁
console.log(user.getUser2())     // 结果：heTongXue22岁
console.log(user.getUser3())     // 结果：this指向为空 此时不能调用this