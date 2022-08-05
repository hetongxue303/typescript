export default {}

/**
 * 约束前
 */
interface IUser {
    [name: string]: any
}

let getVal = (obj: IUser, key: string): any => {
    return obj[key]
}

console.log(getVal({a: 1, b: 2, c: 3}, 'a'))

console.log(getVal({a: 1, b: 2, c: 3}, 'd'))// 此时返回undefined 因为其中没有d 但编译器是不会给我们提示的

/**
 * 约束后
 */
function getValue<T, E extends keyof T>(obj: T, key: E) {
    return obj[key]
}

console.log(getValue({a: 1, b: 2, c: 3}, 'c'))
// console.log(getValue({a: 1, b: 2, c: 3}, 'd')) // 编译器提示报错 这样更加友好 方便找出错误