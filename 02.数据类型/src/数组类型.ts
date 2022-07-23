export default {}

/* 数组类型 */

// 基础使用
let testList1: string[]
testList1 = ['test', 'test2', 'test3']

// Array使用
let testList2: Array<number>
testList2 = [10, 20, 30, 40, 50]

// 联合类型
let testList3: (string | boolean)[]
testList3 = ['123', '456', true, '789']

// 任意类型
let testList4: any[]
testList4 = [123, '123', false, 20.22]