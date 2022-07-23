export default {}

/**
 * any->表示任意类型 当不清楚类型的时候可以使用any
 * void->与any相反 表示没有任何类型 即没有类型
 */

// any
let rand: any
rand = 13
rand = '你好世界'
rand = true

// void
let value: void

// value = 1234         错误
// value = '你好世界'     错误

// void类型仅可赋值为 undefined 和 null
value = undefined
// value = null

console.log(rand)