export default {}

interface IUser {
    name: string
    // 这里使用了可选属性 也就是年龄可以填也可以不填
    age?: number
    // 这里使用了只读属性 一旦 定义就不能被改变 只可读不可更改
    readonly gender: string
}

// 由于age为可选属性 所以在定义时可以不用写
let User: IUser = {
    name: 'heTongXue',
    gender: '男'
}
const val = 1234

// User.gender='保密'  由于使用了readonly 此时修改性别时就会发生错误 此时性别的值不能更改 作为属性时使用
// val=56789          由于使用const限定常数 此时更改val的值会发生错误 作为常量时使用

console.log(User)
console.log(val)

// 相同接口名
interface ITest {
    val1: string
}

interface ITest {
    readonly val2: boolean
    val3: number
}

// 此时的ITest接口中就包含了两个接口中的属性
let Test: ITest = {
    val1: 'test',
    val2: true,
    val3: 2022
}
console.log(Test)