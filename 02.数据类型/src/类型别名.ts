export default {}

// 方式1
type myType1 = '张三' | '李四' | '王五'
let test1: myType1
test1 = "张三"  // 正确
//test1=123    // 错误

// 方式2
type myType2 = (a: number, b: number) => number
let test2: myType2 = (a, b) => a + b
console.log(test2(10, 20))// 结果：30

// 方式3
type myType3 = {
    name: string
    age: number
    gender?: string
}
let user: myType3 = {
    name: 'heTongXue',
    age: 22,
    gender: '男'
}