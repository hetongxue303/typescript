export default {}

/**
 * 基础使用
 */
class Person {
    // 公有属性 public为默认 可省略不屑
    public name: string
    // 受保护属性
    protected age: number
    // 私有属性
    private gender: string
    // 只读属性
    readonly info: string

    constructor(name: string, age: number, gender: string, info: string) {
        this.name = name
        this.age = age
        this.gender = gender
        this.info = info
    }

    out(): void {
        console.log(`我是${this.name},${this.age}岁,性别${this.gender},喜欢${this.info}`)
    }
}

let person = new Person('test', 22, '男', '运动')
person.out()    // 结果：我是test，22岁,性别男,喜欢运动
// person.info='test'  // 错误：由于设置了readonly属性 其值不可更改

/**
 * 继承使用
 */
class Student extends Person {
    score: number

    constructor(name: string, age: number, gender: string, info: string, score: number) {
        super(name, age, gender, info)
        this.score = score
    }

    out(): void {
        console.log(this.name)
        console.log(this.age)
        // console.log(this.gender)  // 错误：由于在父类中 该属性使用了私有属性 是无法继承的 故无法访问
        console.log(this.info)
        console.log(this.score)
    }
}

let student = new Student('test', 22, '男', '运动', 100)
student.out()