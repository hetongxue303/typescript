export default {}

// 主要需要先更改为ES2020 否则会报错
const num1: bigint = BigInt(100)
const num2: bigint = 100n


// symbol
const firstName = Symbol('he')
const secondName = Symbol('tongXue')
// if (secondName === firstName) {
//     console.log('ok')
// }