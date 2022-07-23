export default {}

let str = '一起来学习typescript语言吧！'

// 方式一
let len1 = (<string>str).length

// 方式二
let len2 = (str as string).length