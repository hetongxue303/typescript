export default {}

// 定义一个函数的返回值为void
type MyType = () => void

/**
 * 由于类型别名中指定了返回值为void 所以此时理论上不应该存在返回值 但是可以强行进行返回 该值是有效的
 */
let Func1: MyType = function () {
    return 123
}
console.log(Func1())    // 结果：123

/**
 * 与类型别名不同 这里函数明确指定了返回值为void 故不能有任何返回值 否则报错
 */
// function Func2(): void {
//     return 123
// }