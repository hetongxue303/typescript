export default {}

/**
 * 相同点：
 * 1.都可以描述一个对象属性或函数
 * 2.都可以扩展
 */
// 1.都可以描述一个对象属性或函数
interface Test1 {
    name: string
    age: number

    test(): any
}

type Test2 = {
    name: string
    age: number

    test(): any
}

let test1: Test1 = {
    name: 'test1',
    age: 22,
    test(): any {
        return '接口'
    }
}

let test2: Test2 = {
    name: 'test2',
    age: 22,
    test(): any {
        return '类型别名'
    }
}

console.log(test1)
console.log(test2)

// 2.都可以扩展
interface IUser1 {
    name: string
    age: number
}

interface IUsers1 extends IUser1 {
    gender: string
}

let user1: IUsers1 = {
    name: 'test1',
    age: 22,
    gender: '男'
}

type IUser2 = {
    name: string
    age: number
}
type IUsers2 = IUser2 & {
    gender: string
}

let user2: IUsers2 = {
    name: 'test2',
    age: 22,
    gender: '保密'
}

console.log(user1)
console.log(user2)

/**
 * 不同点：
 * 1.interface只能定义对象类型或者函数事件等;type可以声明任何类型，包括基础类型、联合类型(A | B)、交叉类型(A & B)、元组等
 * 2.名字一样时 type不能合并
 */

type name = string | number | boolean
// interface IName=string | number | boolean   错误
type age = number
// interface IAge=null   错误
type MyList = [string | number]
// interface IMyList= [string | number]   错误

// type t = {
//     name: string
// }
// type t = {
//     age: number
// }