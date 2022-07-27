export default {}

// 可选参数
const function1 = (a: number, b?: number): number => {
    if (b) {
        return a + b
    }
    return a
}
console.log(function1(10))         // 结果：10
console.log(function1(10, 20))  // 结果：30

// 默认参数
const function2 = (a: number, b: number = 10): number => {
    return a + b
}
console.log(function2(5))            // 结果：15
console.log(function2(10, 12))    // 结果：22

// 可变长参数
const function3 = (...args: number[]): number => {
    let val: number = 0
    args.forEach(item => {
        val += item
    })
    return val
}
console.log(function3(10, 20, 50, 10))// 结果：90