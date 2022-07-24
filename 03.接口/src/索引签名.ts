export default {}

/**
 * 当前端不清楚后端返回的数据格式 或者说数据格式在返回过程中发生了改变；
 * 此时对应的接口就会发生错误 由于参数不能一一对应 发生错误；
 * 可以使用可选参数来解决 但是不推荐 因为此时也需要大致知道哪些参数会发生改变 还是会有错误发生的情况；
 * 另外一种就是使用类型断言解决 此时需要自己给类型 也不是很推荐；
 * 最好的解决方法就是使用索引签名解决
 *
 */


/**
 * 这里的 any 可以为任意类型 string number等等
 */
interface IUser {
    [props: string]: any
}

/**
 * 此时不管给的数据类型是什么 都可以 得到解析
 */
let Info: IUser = {
    val1: 'test1',
    val2: 'test2',
    val3: 'test3',
    val4: 123,
    val5: true
}

console.log(Info)