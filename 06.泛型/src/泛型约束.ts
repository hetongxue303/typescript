export default {}

/**
 * 如果我们要在函数中获取参数的长度 并且已经指定了其泛型的类型为string 但此时编译器依旧会报错
 */
function Test<T>(value: T): T {
    // console.log(value.length)// 报错
    return value;
}

<string>Test("test")

/**
 * 针对上面的额问题做出解决方案：泛型接口
 */
interface ITest {
    length: number
}

// 泛型继承了接口 而接口中存在length属性 此时返回length就不会报错
function AAA<T extends ITest>(value: T): number {
    return value.length;
}

AAA("test")
AAA([1, 5, 6, 9])
AAA({length: 50})