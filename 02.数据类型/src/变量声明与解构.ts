export default {}

// 变量声明方式 var | let | const

/* 数组解构 */
let users: string[] = ['张三', '李四', '王五']// 数组定义
let [first, second, val1, val2] = users// 数组解构1
console.log(first)   // 结果：张三
console.log(second)  // 结果：李四
console.log(val1)    // 结果：王五
console.log(val2)    // 结果：undefined

let [a, ...b] = users// 数组解构2
console.log(a)       // 结果：张三
console.log(b)       // 结果：['李四', '王五']
console.log(...b)    // 结果：李四 王五


let [, val01, , val02] = [1, 2, 3, 4, 5, 6]// 数组解构3
console.log(val01)   // 结果：2
console.log(val02)   // 结果：4

/* 对象解构 */
let obj = {
    name: 'heTongXue',
    age: 22,
    gender: '男'
}

let {name, gender} = obj
console.log(name)    // 结果：heTongXue
console.log(gender)  // 结果：男