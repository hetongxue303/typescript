export default {}

class Person {
    name: string
    age: number
    gender: string

    constructor(name: string, age: number, gender: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    out(): void {
        console.log('我是父类')
    }
}

class Student extends Person {
    score: number
    likes: string[]

    /**
     * 针对继承的属性 需要在构造器中调用 super 并将参数传入
     */
    constructor(name: string, age: number, gender: string, score: number, likes: string[]) {
        super(name, age, gender)
        this.score = score
        this.likes = likes
    }

    out(): void {
        console.log('我是子类')
    }

    out2(): void {
        super.out()
    }
}

let student = new Student('heTongXue', 22, '男', 100, ['篮球', '羽毛球'])
student.out()    // 结果：我是子类

/**
 * 如何在子类中调用父类的方法?
 * 在方法中使用 super 关键字 调用父类中的方法即可
 */
student.out2()   // 结果：我是父类