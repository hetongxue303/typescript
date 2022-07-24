export default {}

interface IFunction {
    (name: string, gender: string): string
}

let Info: IFunction = function (name: string, gender: string) {
    return `我是${name},性别${gender}`
}

console.log(Info('张三', '男'))  // 结果：我是张三,性别男

/* 数组使用 */
interface IFunction1 {
    [index: number]: string
}

let myFun: IFunction1 = ['张三', '李四', '王五']
console.log(myFun[1])  // 结果：李四