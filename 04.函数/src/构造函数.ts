export default {}

// 构造函数
let val = new Function('a', 'b', 'return a+b')
console.log(val(1, 2))  // 结果：3

// 递归函数(即自己调自己)
const sum = (arr: number[], length: number): number => {
    if (length > 0) {
        return sum(arr, length - 1) + arr[length - 1]
    }
    return 0
}
console.log([10, 20, 30], 2)// 结果：30