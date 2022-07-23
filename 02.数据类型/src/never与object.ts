export default {}

// never类型
// never类型会有异常抛出才会终止
const error = (message: string): never => {
    throw new Error(message)
}


// 类型推断为 never
const fail = (message: string) => {
    return error(message)
}
console.log(error("error发生错误"))
console.log(fail("fail发生错误"))


// object类型
let obj: object

obj = {
    name: 'heTongXue',
    age: 22,
    gender: '男'
}
