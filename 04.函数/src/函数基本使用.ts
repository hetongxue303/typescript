export default {}

// 匿名函数
const anonymous = function (name: string, age: number): string {
    return `我是${name},今年${age}岁`
}

// 普通函数(命名或有名函数)
function ordinary(str: string): string {
    return str
}

// 箭头函数
const arrow = (hour: number, minute: number, second: number): string => {
    return `${hour}:${minute}:${second}`
}

// 接口函数
// type TFunc = (a: number, b: number) => number
interface IFunc {
    (a: number, b: number): number
}

const inter: IFunc = (a: number, b: number): number => a + b

console.log(anonymous('heTongXue', 22))  // 结果：我是heTongXue,今年22岁
console.log(ordinary('你好世界'))                 // 结果：你好世界
console.log(arrow(16, 56, 22))  // 结果：16:56:22
console.log(inter(2000, 22))                   // 结果：2022