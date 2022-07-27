export default {}

// 单继承 每次只继承一个接口
interface IUser {
    name: string
    age: number
}

interface IUsers extends IUser {
    gender: string
}

/**
 * 此时IUsers中包含IUser中的所有属性+自己的属性
 */
let Users: IUsers = {
    name: 'heTTongXue',
    age: 22,
    gender: '男'
}

console.log(Users)

// 多继承 每次可以继承多个接口 用,隔开
interface Test1 {
    test1: string
}

interface Test2 {
    test2: string
}

interface Test3 {
    test2: number
}

/**
 * 此时test3中包含test1和test2的属性
 * 注意：当使用多继承时，两个父接口属性名一致且类型不一致时，会发生错误 应避免此类情况发生
 */
interface Test4 extends Test1, Test2 {
    test4: string
}

// 由于test2和test3中都含有test2属性且类型还不一致 此时无法继承
// interface Test5 extends Test2, Test3 {
//     test4: string
// }

let test: Test4 = {
    test1: 'test1',
    test2: 'test2',
    test4: 'test4'
}

console.log(test)